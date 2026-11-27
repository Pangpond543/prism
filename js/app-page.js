(async () => {
'use strict';
const Prism = window.Prism = window.Prism || {};
// One page per app: hero + download, the interactive guide, "what do you want to do?" demos, features, keys, FAQ.
const { boot, byId, t, I, esc, onLang, release, mb, day, reveal, mountGuide } = Prism;

const id = document.body.dataset.app;
const app = byId[id];
boot(id);

const S = {
  learn: ['ลองชี้ดูเลย', 'Point and learn'],
  learnH: ['ชี้ตรงไหนก็รู้ว่าทำอะไร', 'Point anywhere to see what it does'],
  learnP: ['นี่คือหน้าจอจริงของโปรแกรม เอาเมาส์ไปชี้ (หรือแตะบนมือถือ) ส่วนไหนก็ได้ จะมีกรอบเรืองแสงพร้อมคำอธิบายว่าตรงนั้นทำอะไร กดค้างไว้ไม่ให้หายได้ด้วยการคลิก',
    'This is the real app. Point at (or tap) any part: it lights up and a box explains what it does. Click to keep the box open.'],
  demosH: ['อยากทำอะไร? ดูเมาส์ทำให้ดู', 'What do you want to do? Watch it done'],
  demosP: ['กดเรื่องที่อยากรู้ แล้วเมาส์สาธิตจะเลื่อนไปกดให้ดูทีละขั้นบนหน้าจอจริง พร้อมบอกว่ากำลังทำอะไร (กด ← → เพื่อย้อน/ข้าม, Esc เพื่อหยุด)',
    'Pick a task and a demo cursor does it on the real screens, step by step, telling you what it is doing (← → to step, Esc to stop).'],
  featH: ['ทำอะไรได้บ้าง', 'Everything it can do'],
  keysH: ['คีย์ลัด', 'Keyboard shortcuts'],
  faqH: ['คำถามที่พบบ่อย', 'Questions people ask'],
  dl: ['ดาวน์โหลด', 'Download'], setup: ['ตัวติดตั้ง', 'Installer'], portable: ['แบบพกพา', 'Portable'],
  android: ['แอป Android (APK)', 'Android app (APK)'],
  androidP: ['มือถือ/แท็บเล็ต: โหลดไฟล์ .apk ในมือถือ แล้วกดติดตั้ง (ครั้งแรกให้อนุญาต "ติดตั้งจากแหล่งที่ไม่รู้จัก") อัปเดตเองได้จากปุ่ม … → ข้อมูล', 'Phone / tablet: download the .apk on the phone and tap it to install (allow "install unknown apps" the first time). It updates itself from … → Info.'],
  soon: ['กำลังเตรียมปล่อยให้โหลด', 'Download coming soon'],
  soonP: ['ตอนนี้ยังไม่ได้อัปขึ้น GitHub — ระหว่างนี้ลองเรียนวิธีใช้จากคู่มือด้านล่างได้เลย', 'Not on GitHub yet — meanwhile you can already learn it with the guide below.'],
  ver: ['เวอร์ชันล่าสุด', 'Latest'], free: ['ฟรี · Windows 10/11 · ไม่ต้องสมัครบัญชี', 'Free · Windows 10/11 · no account'],
  smart: ['ถ้า Windows ขึ้นจอฟ้า "Windows protected your PC" ให้กด More info → Run anyway (เพราะโปรแกรมยังไม่มีลายเซ็นดิจิทัล)', 'If Windows shows a blue "Windows protected your PC" screen, click More info → Run anyway (the app is not code-signed yet).'],
  sub: [['ลองชี้ดู', 'Explore', 'learn'], ['สาธิต', 'Demos', 'demos'], ['ความสามารถ', 'Features', 'features'], ['คีย์ลัด', 'Keys', 'keys'], ['ถามตอบ', 'FAQ', 'faq']],
  allApps: ['แอปอื่นในชุด Prism', 'More Prism apps'],
};

const guide = window.PrismGuides[id];
const shots = (window.PrismShots || {})[id] || {};

const main = document.getElementById('main');
main.innerHTML = `
  <section class="app-hero"><div class="wrap">
    <div class="app-hero-grid">
      <div class="logos">${app.logos.map((k) => `<img src="img/logos/${k}.svg" alt="">`).join('')}</div>
      <div><h1 class="rv">${esc(app.name)} <small>by 543</small></h1><p class="tag rv" id="h-tag"></p><div class="chips rv">${app.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div></div>
      <div class="dl-card glass lit rv" id="dl"></div>
    </div>
    <p class="app-long rv" id="h-long"></p>
  </div></section>
  <nav class="subnav glass" id="subnav"></nav>
  <section id="learn"><div class="wrap">
    <div class="eyebrow rv" id="s-learn"></div><h2 class="title rv" id="s-learnH"></h2><p class="lead rv" id="s-learnP"></p>
    <div class="explorer" id="explorer"></div>
  </div></section>
  <section id="demos"><div class="wrap">
    <h2 class="title rv" id="s-demosH"></h2><p class="lead rv" id="s-demosP"></p>
    <div class="demos" id="demo-list"></div>
  </div></section>
  <section id="features"><div class="wrap"><h2 class="title rv" id="s-featH"></h2><div class="feat-grid" id="feats"></div></div></section>
  <section id="keys"><div class="wrap"><h2 class="title rv" id="s-keysH"></h2><div class="keys-grid" id="key-list"></div></div></section>
  <section id="faq"><div class="wrap"><h2 class="title rv" id="s-faqH"></h2><div class="faq" id="faq-list"></div></div></section>`;

const $ = (s) => document.getElementById(s);
async function drawDownload() {
  const el = $('dl');
  if (!app.repo) {
    el.innerHTML = `<div class="ver"><span class="dot wip"></span>${t(S.soon)}</div><p class="note">${t(S.soonP)}</p>
      <div class="row"><button class="btn" disabled>${I.down}${t(S.dl)}</button></div>`;
    return;
  }
  el.innerHTML = `<div class="ver"><span class="dot"></span>${t(S.ver)} <b>…</b></div><div class="row"><a class="btn primary" href="https://github.com/Pangpond543/${app.repo}/releases/latest" target="_blank" rel="noopener">${I.down}${t(S.dl)}</a></div>`;
  const r = await release(app);
  if (!r) return;
  el.innerHTML = `<div class="ver"><span class="dot"></span>${t(S.ver)} <b>${esc(r.tag || '')}</b>${r.date ? ` · ${day(r.date)}` : ''}</div>
    <div class="row">${r.setup ? `<a class="btn primary" href="${r.setup.url}">${I.down}${t(S.setup)} <small>${mb(r.setup.size)}</small></a>` : `<a class="btn primary" href="${r.page}" target="_blank" rel="noopener">${I.down}${t(S.dl)}</a>`}
      ${r.portable ? `<a class="btn" href="${r.portable.url}">${t(S.portable)} <small>${mb(r.portable.size)}</small></a>` : ''}</div>
    <p class="note">${t(S.free)}<br>${t(S.smart)}</p>`;
  if (app.android) {
    const a = await release({ repo: app.android });
    const url = a?.apk?.url || a?.page || `https://github.com/Pangpond543/${app.android}/releases/latest`;
    el.insertAdjacentHTML('beforeend', `<div class="row"><a class="btn" href="${url}">${I.down}${t(S.android)}${a?.tag ? ` <small>${esc(a.tag)}${a.apk ? ' · ' + mb(a.apk.size) : ''}</small>` : ''}</a></div>
      <p class="note">${t(S.androidP)}</p>`);
  }
}

function drawText() {
  document.title = `${app.name} — ${t(['คู่มือและดาวน์โหลด', 'Guide & download'])} · Prism`;
  $('h-tag').textContent = t(app.tag); $('h-long').textContent = t(app.long);
  for (const k of ['learn', 'learnH', 'learnP', 'demosH', 'demosP', 'featH', 'keysH', 'faqH']) $('s-' + k).textContent = t(S[k]);
  $('subnav').innerHTML = S.sub.filter(([, , h]) => (h !== 'keys' || guide.keys?.length) && (h !== 'faq' || guide.faq?.length) && (h !== 'features' || guide.feats?.length))
    .map(([th, en, h]) => `<a href="#${h}">${Prism.L === 'en' ? en : th}</a>`).join('');
  $('feats').innerHTML = (guide.feats || []).map((f, i) => `<div class="feat glass lit rv" style="--i:${i % 6}"><h3><i>${f.i || '✦'}</i>${esc(t(f.t))}</h3><p>${esc(t(f.d))}</p></div>`).join('');
  $('key-list').innerHTML = (guide.keys || []).map((k, i) => `<div class="key-row glass rv" style="--i:${i % 8}"><span class="kk">${k.k.split(' / ').map((x) => `<span class="kbd">${esc(x)}</span>`).join('')}</span><span>${esc(t(k.d))}</span></div>`).join('');
  $('faq-list').innerHTML = (guide.faq || []).map((f) => `<details class="glass rv"><summary>${esc(t(f.q))}</summary><p>${esc(t(f.a))}</p></details>`).join('');
  ['keys', 'faq', 'features'].forEach((s) => ($(s).style.display = (s === 'features' ? guide.feats : guide[s])?.length ? '' : 'none'));
  drawDownload();
  reveal(main);
}
onLang(drawText);

// sub nav: which section is on screen
const subLinks = () => [...document.querySelectorAll('#subnav a')];
addEventListener('scroll', () => {
  let cur = null;
  for (const a of subLinks()) { const s = document.querySelector(a.getAttribute('href')); if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = a; }
  subLinks().forEach((a) => a.classList.toggle('on', a === cur));
}, { passive: true });

mountGuide({ app, guide, shots, explorerEl: $('explorer'), demosEl: $('demo-list') });
document.documentElement.style.setProperty('--app-c', app.c[1]);
})();
