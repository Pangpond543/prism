// Prism Web — screenshot + hotspot capture.
// Loads a Prism app's real page in a hidden Electron window, drives it into a state, then saves
//   shots/<app>/<shot>.<theme>.<lang>.webp   and   data/shots/<app>.js  (hotspot boxes as 0..1 fractions).
//
// Run (Git Bash, from prism-web/):
//   env -u ELECTRON_RUN_AS_NODE ../prism-size/node_modules/electron/dist/electron.exe tools/capture/main.js tools/capture/jobs/cam.js [shotId]
// (the shell inherits ELECTRON_RUN_AS_NODE; without -u Electron silently runs as Node)
//
// A job module exports:
//   { app, root (renderer folder, served over http) | url, query?, size: [w, h], scale?, boot?, bridge? (fake __TAURI__ module),
//     redirect?: { regex: url | (match) => url }, storage?: (v) => 'extra js run before load',
//     variants?: [{ theme, lang }], shots: [{ id, act: async (page) => {}, wait, hot: { hotspotId: 'css' | ['css', …] } }] }
//   page.js(code) runs code in the page (async body, may `return`); page.click(sel) = full press sequence; page.sleep(ms).
const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..', '..');
const ji = process.argv.findIndex((a) => /jobs[\\/][^\\/]+\.js$/.test(a));
const jobFile = path.resolve(process.argv[ji]);
const job = require(jobFile);
const ONLY = process.argv[ji + 1] && !process.argv[ji + 1].startsWith('-') ? process.argv[ji + 1].split(',') : null;

app.commandLine.appendSwitch('force-device-scale-factor', String(job.scale || 1));
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[capture]', ...a);

// static server for the app's renderer folder (ES modules need http, not file://)
function serve(root) {
  const http = require('http');
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.wasm': 'application/wasm', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.json': 'application/json', '.py': 'text/plain', '.zip': 'application/zip', '.tflite': 'application/octet-stream', '.task': 'application/octet-stream' };
  return new Promise((res) => {
    const srv = http.createServer((req, rs) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/') p = '/index.html';
      const f = path.join(root, p);
      if (!f.startsWith(path.normalize(root))) { rs.writeHead(403); return rs.end(); }
      fs.readFile(f, (e, b) => { if (e) { rs.writeHead(404); return rs.end(); } rs.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); rs.end(b); });
    }).listen(0, '127.0.0.1', () => res(`http://127.0.0.1:${srv.address().port}/`));
  });
}

async function run() {
  await app.whenReady();
  const url = job.root ? (await serve(path.resolve(path.dirname(jobFile), job.root))) + (job.query || '') : job.url;
  const ses = session.fromPartition('capture-' + job.app);
  await ses.clearStorageData();
  if (job.redirect) {
    ses.webRequest.onBeforeRequest({ urls: ['*://*/*'] }, (d, cb) => {
      for (const [re, to] of Object.entries(job.redirect)) {
        const m = d.url.match(new RegExp(re));
        if (m) return cb({ redirectURL: typeof to === 'function' ? to(m) : to });
      }
      cb({});
    });
  }
  const variants = job.variants || [
    { theme: 'light', lang: 'th' }, { theme: 'dark', lang: 'th' },
    { theme: 'light', lang: 'en' }, { theme: 'dark', lang: 'en' },
  ];
  const outDir = path.join(ROOT, 'shots', job.app);
  fs.mkdirSync(outDir, { recursive: true });
  // a plain script (not .json) so the site also works opened by double-click: window.PrismShots.<app> = {...}
  const dataFile = path.join(ROOT, 'data', 'shots', job.app + '.js');
  const head = `(window.PrismShots = window.PrismShots || {}).${job.app} = `;
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  let data = {};
  try { data = JSON.parse(fs.readFileSync(dataFile, 'utf8').replace(head, '').trim().replace(/;$/, '')); } catch { /* first run */ }
  const [W, H] = job.size || [1480, 920];

  const win = new BrowserWindow({
    // off-screen rendering at a real frame rate (a plain hidden window draws ~1 fps, so animated backgrounds never finish fading)
    width: W, height: H, useContentSize: true, show: false, frame: false,
    webPreferences: {
      offscreen: true, session: ses, contextIsolation: false, sandbox: false, nodeIntegration: false, backgroundThrottling: false,
      preload: path.join(__dirname, 'preload.js'),
      additionalArguments: [`--pw-bridge=${job.bridge ? path.resolve(path.dirname(jobFile), job.bridge) : ''}`],
    },
  });
  win.webContents.on('console-message', (e) => { const m = String(e.message || ''); if (/error|fail/i.test(m) && !/favicon/.test(m)) log('page:', m.slice(0, 200)); });
  win.webContents.setFrameRate(60);
  const wc = win.webContents;
  const page = {
    win,
    js: (code) => wc.executeJavaScript(`(async () => { ${code} })()`),
    sleep,
    click: (sel) => wc.executeJavaScript(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); if (!e) return false;
      const r = e.getBoundingClientRect(), o = { bubbles: true, cancelable: true, button: 0, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, pointerId: 1, pointerType: 'mouse', isPrimary: true };
      for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) e.dispatchEvent(new (t.startsWith('pointer') ? PointerEvent : MouseEvent)(t, o)); return true; })()`),
    key: (key, mods = {}) => wc.executeJavaScript(`(() => { const o = Object.assign({ key: ${JSON.stringify(key)}, bubbles: true, cancelable: true }, ${JSON.stringify(mods)});
      (document.activeElement || document.body).dispatchEvent(new KeyboardEvent('keydown', o)); (document.activeElement || document.body).dispatchEvent(new KeyboardEvent('keyup', o)); })()`),
    v: null,
    // reload the page with extra query (e.g. '?act=open:bu1,viz') and wait `ms` for it to settle
    load: async (q = '', ms = 2500) => { await win.loadURL(url.split('?')[0] + q).catch((e) => log('load note:', e.code)); await sleep(ms); },
  };

  for (const v of variants) {
    page.v = v;
    // pick theme + language through the suite's own storage keys, then (re)load the page
    await win.loadURL(url).catch((e) => log('load note:', e.code));
    await wc.executeJavaScript(`localStorage.setItem('prism.theme', '${v.theme}'); localStorage.setItem('prism.lang', '${v.lang}'); ${job.storage ? job.storage(v) : ''}`);
    await win.loadURL(url).catch((e) => log('load note:', e.code));
    await sleep(job.boot || 2500);
    for (const s of job.shots) {
      if (ONLY && !ONLY.includes(s.id)) continue;
      try {
        if (s.act) await s.act(page);
        await sleep(s.wait || 900);
        const boxes = await wc.executeJavaScript(`(() => {
          const W = innerWidth, H = innerHeight, out = {};
          const hot = ${JSON.stringify(s.hot || {})};
          for (const [id, sel] of Object.entries(hot)) {
            const list = [].concat(sel); let r = null;
            // visible part only: cut by every scrolling / clipping parent
            const vis = (e) => { let b = e.getBoundingClientRect(); b = { left: b.left, top: b.top, right: b.right, bottom: b.bottom };
              for (let p = e.parentElement; p && p !== document.body; p = p.parentElement) { const cs = getComputedStyle(p);
                if (/(auto|scroll|hidden|clip)/.test(cs.overflow + cs.overflowX + cs.overflowY)) { const q = p.getBoundingClientRect();
                  b.left = Math.max(b.left, q.left); b.top = Math.max(b.top, q.top); b.right = Math.min(b.right, q.right); b.bottom = Math.min(b.bottom, q.bottom); } }
              return { left: b.left, top: b.top, right: b.right, bottom: b.bottom, width: b.right - b.left, height: b.bottom - b.top }; };
            for (const q of list) { for (const e of document.querySelectorAll(q.replace(/[*]$/, ''))) { const b = vis(e);
              if (b.width < 6 || b.height < 6 || getComputedStyle(e).visibility === 'hidden' || getComputedStyle(e).display === 'none') continue;
              r = r ? { l: Math.min(r.l, b.left), t: Math.min(r.t, b.top), r: Math.max(r.r, b.right), b: Math.max(r.b, b.bottom) } : { l: b.left, t: b.top, r: b.right, b: b.bottom };
              if (!q.endsWith('*')) break; } }
            if (r) { const l = Math.max(0, r.l), t = Math.max(0, r.t), rr = Math.min(W, r.r), bb = Math.min(H, r.b);
              if (rr - l > 4 && bb - t > 4) out[id] = [l / W, t / H, (rr - l) / W, (bb - t) / H].map((x) => Math.round(x * 10000) / 10000); }
          }
          return out; })()`);
        const img = await wc.capturePage();
        const png = img.toDataURL();
        // encode WebP in the page (Chromium has the encoder)
        const webp = await wc.executeJavaScript(`new Promise((res) => { const im = new Image(); im.onload = () => {
          const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; c.getContext('2d').drawImage(im, 0, 0);
          res(c.toDataURL('image/webp', 0.86)); }; im.src = ${JSON.stringify(png)}; })`);
        const file = `${s.id}.${v.theme}.${v.lang}.webp`;
        fs.writeFileSync(path.join(outDir, file), Buffer.from(webp.split(',')[1], 'base64'));
        data[s.id] = data[s.id] || { size: [W, H], hot: {} };
        data[s.id].size = [W, H];
        data[s.id].hot[`${v.theme}.${v.lang}`] = boxes;
        const missing = Object.keys(s.hot || {}).filter((k) => !boxes[k]);
        log(`${job.app}/${file}`, Object.keys(boxes).length + ' hotspots', missing.length ? 'MISSING: ' + missing.join(',') : '');
        if (s.after) await s.after(page);
      } catch (e) { log('shot failed', s.id, v.theme, v.lang, e.message); }
    }
  }
  win.destroy();
  if (job.app.startsWith('probe-')) { fs.rmSync(outDir, { recursive: true, force: true }); app.quit(); return; } // dev probe writes nothing
  fs.writeFileSync(dataFile, head + JSON.stringify(data, null, 1) + ';\n');
  log('done →', path.relative(ROOT, dataFile));
  app.quit();
}
run().catch((e) => { console.error(e); app.exit(1); });
