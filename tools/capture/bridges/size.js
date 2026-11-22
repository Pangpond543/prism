// Fake window.prism for Prism Size: answers the page with a made-up demo drive (D:\), so the website
// screenshots never show anyone's real files, user name or installed programs.
module.exports = (win) => {
  let seed = 543;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const now = Math.floor(Date.now() / 1000), DAY = 86400;
  const GB = 1024 ** 3, MB = 1024 ** 2;
  const files = [], ext = new Map(), age = [0, 0, 0, 0, 0, 0], agen = [0, 0, 0, 0, 0, 0];
  const bucket = (m) => { const a = (now - m) / DAY; return a < 30 ? 0 : a < 180 ? 1 : a < 365 ? 2 : a < 730 ? 3 : a < 1825 ? 4 : 5; };
  let nDirs = 0;
  // spec: [name, [subdirs…], [[file, size, daysOld], …]]
  function build(spec, parent) {
    const [name, subs = [], fl = []] = spec;
    const full = parent ? (parent.endsWith('\\') ? parent + name : parent + '\\' + name) : name;
    const node = { n: name, s: 0, c: 0, m: 0, rc: 0, rs: 0, d: [], f: [] };
    nDirs++;
    for (const sub of subs) { const ch = build(sub, full); node.d.push(ch); node.s += ch.s; node.c += ch.c; node.m = Math.max(node.m, ch.m); }
    for (const [fn, size, days] of fl) {
      const m = now - Math.round(days * DAY);
      node.f.push([fn, Math.round(size), m]); node.s += size; node.c++; node.m = Math.max(node.m, m);
      files.push([full + '\\' + fn, Math.round(size), m]);
      const x = fn.includes('.') ? fn.split('.').pop().toLowerCase() : '';
      const r = ext.get(x); if (r) { r[0]++; r[1] += size; } else ext.set(x, [1, size]);
      const b = bucket(m); age[b] += size; agen[b]++;
    }
    node.f.sort((a, b) => b[1] - a[1]); node.d.sort((a, b) => b.s - a.s);
    node.s = Math.round(node.s);
    return node;
  }
  const many = (pre, ex, n, min, max, maxDays) => Array.from({ length: n }, (_, i) => [`${pre} ${String(i + 1).padStart(3, '0')}.${ex}`, min + rnd() * (max - min), rnd() * maxDays]);
  const spec = ['D:\\', [
    ['Videos', [
      ['Trips', [], [['Japan 2026 - 4K.mp4', 18.4 * GB, 40], ['Chiang Mai vlog.mp4', 6.1 * GB, 160], ['Beach drone.mov', 3.2 * GB, 220]]],
      ['Recordings', [], many('Prism Rec', 'mp4', 14, 120 * MB, 1.8 * GB, 90)],
      ['Edits', [], [['Final cut v3.mp4', 2.4 * GB, 12], ['Short for TikTok.mp4', 380 * MB, 5], ['Intro.gif', 22 * MB, 8]]],
    ], [['Movie night.mkv', 9.6 * GB, 400]]],
    ['Games', [
      ['Open World Saga', [['data', [], many('pak', 'pak', 18, 900 * MB, 3.6 * GB, 300)]], [['game.exe', 140 * MB, 300]]],
      ['Racer X', [], many('track', 'bin', 10, 400 * MB, 2.2 * GB, 500)],
      ['Pixel Farm', [], [['assets.pak', 1.1 * GB, 60], ['save.dat', 4 * MB, 1]]],
    ]],
    ['Photos', [
      ['2025', [], many('IMG', 'jpg', 220, 2 * MB, 9 * MB, 700)],
      ['2026', [], many('IMG', 'heic', 260, 1.5 * MB, 6 * MB, 200)],
      ['RAW', [], many('DSC', 'arw', 60, 24 * MB, 48 * MB, 380)],
    ]],
    ['Projects', [
      ['Website', [['node_modules', [], many('pkg', 'js', 400, 10e3, 2 * MB, 90)], ['src', [], many('page', 'tsx', 40, 2e3, 40e3, 20)]]],
      ['Game jam', [], [['build.zip', 820 * MB, 30], ['art.psd', 640 * MB, 33]]],
      ['Python homework', [], many('lab', 'py', 30, 1e3, 12e3, 60)],
    ]],
    ['Downloads', [], [['Windows-ISO.iso', 6.3 * GB, 520], ['setup-old.exe', 410 * MB, 900], ['drivers.zip', 1.2 * GB, 610], ['wallpaper pack.zip', 380 * MB, 45], ...many('file', 'pdf', 40, 200e3, 8 * MB, 400)]],
    ['Music', [['Albums', [], many('track', 'flac', 120, 20 * MB, 60 * MB, 800)]], many('song', 'mp3', 160, 3 * MB, 9 * MB, 600)],
    ['Documents', [['University', [], many('report', 'docx', 60, 100e3, 6 * MB, 300)]], many('note', 'pdf', 50, 100e3, 12 * MB, 500)],
    ['Backups', [], [['phone-backup-2024.zip', 22 * GB, 690], ['old-laptop.img', 31 * GB, 1400]]],
  ]];
  const root = build(spec, null);
  for (const st = [root]; st.length;) { const n = st.pop(); if (n.f.length > 24) { for (const f of n.f.slice(24)) { n.rc++; n.rs += f[1]; } n.f.length = 24; } st.push(...n.d); }
  files.sort((a, b) => b[1] - a[1]);
  const result = {
    t: 'r', root, ext: [...ext].map(([k, v]) => [k, v[0], Math.round(v[1])]).sort((a, b) => b[2] - a[2]),
    age: age.map(Math.round), agen, top: files.slice(0, 300), files: files.length, dirs: nDirs, bytes: root.s, errors: 0, ms: 1840, engine: 'rust', savedAt: Date.now(),
  };
  const handlers = {
    'sys:info': () => ({ home: 'C:\\Users\\Demo', quick: [
      { label: 'โฟลเดอร์ผู้ใช้', path: 'C:\\Users\\Demo', icon: 'home' }, { label: 'เดสก์ท็อป', path: 'C:\\Users\\Demo\\Desktop', icon: 'desktop' },
      { label: 'ดาวน์โหลด', path: 'C:\\Users\\Demo\\Downloads', icon: 'download' }, { label: 'เอกสาร', path: 'C:\\Users\\Demo\\Documents', icon: 'doc' },
      { label: 'Program Files', path: 'C:\\Program Files', icon: 'apps' }],
      rust: true, host: 'DEMO-PC', version: '1.0.0', env: { autoscan: (() => { try { return localStorage.getItem('pw.autoscan') || ''; } catch { return ''; } })(), view: '', act: '', nocache: true } }),
    'drives:list': () => [{ root: 'C:\\', total: 512 * GB, free: 151 * GB, used: 361 * GB }, { root: 'D:\\', total: 1000 * GB, free: 1000 * GB - root.s, used: root.s }],
    'cache:list': () => [],
    'scan:start': () => new Promise((r) => setTimeout(() => r(JSON.parse(JSON.stringify(result))), 400)),
    'about:info': () => ({ version: '1.0.0', repo: 'Pangpond543/prism-size' }),
    'update:check': () => ({ ok: true, latest: false }),
  };
  win.prism = {
    invoke: (ch, ...a) => Promise.resolve(handlers[ch] ? handlers[ch](...a) : (/list/.test(ch) ? [] : null)),
    on: () => () => {},
  };
};
