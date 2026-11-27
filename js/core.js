(() => {
'use strict';
const Prism = window.Prism = window.Prism || {};
// Shared pieces for every page: language, theme, top bar, Ctrl+K search, reveal, GitHub releases.
const { APPS, byId } = window.PrismData;
const { startBackground } = Prism;

/* ------------------------------------------------------------------ storage */
const get = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch { return d; } };
const set = (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } };
const store = { get, set };

/* ------------------------------------------------------------------ language */
// Same keys as the Prism apps, so a visitor who uses the apps in English gets the site in English too.
let L = new URLSearchParams(location.search).get('lang') || get('prism.lang', (navigator.language || '').startsWith('th') ? 'th' : 'th');
if (L !== 'en') L = 'th';
document.documentElement.lang = L;
const t = (v) => (Array.isArray(v) ? (L === 'en' ? v[1] ?? v[0] : v[0]) : v ?? '');
const langFns = [];
const onLang = (fn) => { langFns.push(fn); fn(); };
function setLang(l) {
  if (l === L) return;
  L = l; set('prism.lang', l); document.documentElement.lang = l;
  document.querySelectorAll('[data-t]').forEach(applyT);
  langFns.forEach((f) => f());
  const sw = document.querySelector('.lang');
  if (sw) { sw.dataset.lang = l; sw.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.l === l)); }
  document.dispatchEvent(new CustomEvent('prism:lang'));
}
// static text in HTML: <span data-t="ไทย|English">
const applyT = (el) => { const [th, en] = el.dataset.t.split('|'); el.textContent = L === 'en' ? en ?? th : th; };

/* ------------------------------------------------------------------ theme */
const isDark = () => document.documentElement.dataset.theme === 'dark';
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  set('prism.theme', dark ? 'dark' : 'light');
  document.querySelectorAll('.theme-btn').forEach((b) => (b.innerHTML = dark ? I.sun : I.moon));
  document.dispatchEvent(new CustomEvent('prism:theme'));
}

/* ------------------------------------------------------------------ icons (Prism line style) */
const S = (d, extra = '') => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra}>${d}</svg>`;
const I = {
  moon: S('<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/>'),
  sun: S('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  search: S('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  arrow: S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  out: S('<path d="M7 17 17 7M9 7h8v8"/>'),
  down: S('<path d="M12 4v12M6 11l6 6 6-6M5 20h14"/>'),
  play: S('<path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" stroke="none"/>'),
  pause: S('<rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor" stroke="none"/>'),
  prev: S('<path d="M15 6l-6 6 6 6"/>'),
  next: S('<path d="M9 6l6 6-6 6"/>'),
  close: S('<path d="M6 6l12 12M18 6 6 18"/>'),
  check: S('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  grid: S('<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'),
  github: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
};

/* ------------------------------------------------------------------ site strings */
const UI = {
  nav: [['แอปทั้งหมด', 'Apps', 'index.html#apps'], ['วิธีเรียนรู้', 'How to learn', 'index.html#learn'], ['ติดตั้ง', 'Install', 'index.html#install']],
  search: ['ค้นหาว่าทำอะไรได้', 'Search what it can do'],
  searchPh: ['พิมพ์สิ่งที่อยากทำ เช่น "อัดเสียงคอม" "ลบพื้นหลัง"', 'Type what you want to do, e.g. "record PC sound", "remove background"'],
  noResult: ['ไม่เจอ ลองคำอื่น เช่น "ลบ" "อัด" "ย้ายไฟล์"', 'Nothing yet — try another word, e.g. "delete", "record", "move"'],
  kinds: { app: ['แอป', 'App'], spot: ['ปุ่ม / พื้นที่', 'Spot'], demo: ['สาธิต', 'Demo'], key: ['คีย์ลัด', 'Shortcut'] },
};

/* ------------------------------------------------------------------ top bar */
function mountNav(active) {
  const el = document.getElementById('nav');
  const render = () => {
    el.className = 'nav glass';
    el.innerHTML = `
      <a class="brand" href="index.html" aria-label="Prism"><span class="mark" aria-hidden="true"><i></i><i></i><i></i></span>Prism <small>by 543</small></a>
      <div class="nav-links">${UI.nav.map(([th, en, href], i) => `<a href="${href}" data-i="${i}">${L === 'en' ? en : th}</a>`).join('')}<span class="pill"></span></div>
      <div class="nav-fill"></div>
      <button class="search-btn" type="button" aria-label="${t(UI.search)}">${I.search}<span class="lbl">${t(UI.search)}</span><span class="kbd">Ctrl K</span></button>
      <div class="lang" data-lang="${L}"><i></i><button data-l="th" class="${L === 'th' ? 'on' : ''}">TH</button><button data-l="en" class="${L === 'en' ? 'on' : ''}">EN</button></div>
      <button class="icon-btn theme-btn" type="button" aria-label="Dark / light">${isDark() ? I.sun : I.moon}</button>`;
    el.querySelector('.search-btn').onclick = () => openPalette();
    el.querySelectorAll('.lang button').forEach((b) => (b.onclick = () => setLang(b.dataset.l)));
    el.querySelector('.theme-btn').onclick = () => setTheme(!isDark());
    // the soft pill under the hovered link
    const links = el.querySelector('.nav-links'), pill = links.querySelector('.pill');
    links.querySelectorAll('a').forEach((a) => a.addEventListener('pointerenter', () => {
      pill.style.opacity = 1; pill.style.width = a.offsetWidth + 'px'; pill.style.transform = `translateX(${a.offsetLeft}px)`;
    }));
    links.addEventListener('pointerleave', () => (pill.style.opacity = 0));
  };
  onLang(render);
}

/* ------------------------------------------------------------------ Ctrl+K palette */
let palette = null, index = null;
async function buildIndex() {
  if (index) return index;
  index = [];
  const guides = APPS.map((a) => (window.PrismGuides || {})[a.id] || null);
  APPS.forEach((a, k) => {
    index.push({ kind: 'app', app: a, title: [a.name, a.name], sub: a.tag, href: `${a.id}.html` });
    const g = guides[k];
    if (!g) return;
    for (const s of g.screens || []) for (const [hid, h] of Object.entries(s.hot || {}))
      index.push({ kind: 'spot', app: a, title: h.t, sub: h.d, where: s.title, href: `${a.id}.html#spot=${s.id}.${hid}`, keys: h.keys });
    for (const d of g.demos || []) index.push({ kind: 'demo', app: a, title: d.title, sub: d.sub, href: `${a.id}.html#demo=${d.id}` });
    for (const kk of g.keys || []) index.push({ kind: 'key', app: a, title: [kk.k, kk.k], sub: kk.d, href: `${a.id}.html#keys` });
  });
  return index;
}
// loose Thai/English match: ignore tone marks + case, every word must appear somewhere
const fold = (s) => String(s || '').toLowerCase().normalize('NFC').replace(/[ั็-๎]/g, '').replace(/\s+/g, ' ');
function score(it, words) {
  const title = fold(t(it.title)), body = fold(`${t(it.sub)} ${t(it.where)} ${it.app.name} ${(it.keys || []).join(' ')} ${it.title[0]} ${it.title[1]} ${(it.sub || [])[0]} ${(it.sub || [])[1]}`);
  let s = 0;
  for (const w of words) {
    if (title.includes(w)) s += title.startsWith(w) ? 6 : 4;
    else if (body.includes(w)) s += 1.5;
    else {
      // Thai is written without spaces ("อัดเสียงในเครื่อง" is one "word"): fall back to how many of its
      // 2-letter pieces appear in the text, so close phrasings still find the right spot
      const grams = (x) => { const g = new Set(); for (let i = 0; i < x.length - 1; i++) if (x[i] !== ' ' && x[i + 1] !== ' ') g.add(x.slice(i, i + 2)); return g; };
      const q = grams(w);
      if (q.size < 3) return 0;
      const tg = grams(title), bg = grams(body);
      let ht = 0, hb = 0;
      for (const g of q) { if (tg.has(g)) ht++; if (bg.has(g)) hb++; }
      const cov = Math.max(ht / q.size, hb / q.size * 0.8);
      if (cov < 0.6) return 0;
      s += cov * (ht / q.size >= 0.6 ? 4 : 1.5);
    }
  }
  return s + (it.kind === 'demo' ? 1 : it.kind === 'app' ? .5 : 0);
}
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const hl = (text, words) => { let h = esc(text); for (const w of words) if (w.length > 1) h = h.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), (m) => `<mark>${m}</mark>`); return h; };

async function openPalette(q = '') {
  if (!palette) {
    palette = document.createElement('div');
    palette.className = 'palette-wrap';
    palette.innerHTML = `<div class="palette" role="dialog" aria-modal="true"><div class="in">${I.search}<input type="text" autocomplete="off" spellcheck="false"><span class="kbd">Esc</span></div><div class="res"></div>
      <div class="foot"><span><span class="kbd">↑</span> <span class="kbd">↓</span> <span data-t="เลือก|choose"></span></span><span><span class="kbd">Enter</span> <span data-t="ไปที่นั่น|go there"></span></span></div></div>`;
    document.body.appendChild(palette);
    palette.querySelectorAll('[data-t]').forEach(applyT);
    const input = palette.querySelector('input'), res = palette.querySelector('.res');
    let sel = 0, hits = [];
    const draw = async () => {
      const all = await buildIndex();
      const words = fold(input.value).trim().split(' ').filter(Boolean);
      hits = words.length ? all.map((it) => [score(it, words), it]).filter(([s]) => s > 0).sort((a, b) => b[0] - a[0]).slice(0, 40).map(([, it]) => it)
        : all.filter((it) => it.kind === 'app' || it.kind === 'demo').slice(0, 24);
      sel = Math.min(sel, Math.max(0, hits.length - 1));
      res.innerHTML = hits.length ? hits.map((it, i) => `<a class="r${i === sel ? ' sel' : ''}" href="${it.href}" data-i="${i}">
          <img src="img/logos/${it.app.logos[0]}.svg" alt="">
          <div><b>${hl(t(it.title), words)}</b><span>${it.where ? esc(t(it.where)) + ' · ' : ''}${hl(t(it.sub), words)}</span></div>
          <small>${t(UI.kinds[it.kind])}</small></a>`).join('') : `<div class="empty">${t(UI.noResult)}</div>`;
    };
    input.addEventListener('input', () => { sel = 0; draw(); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + hits.length) % Math.max(1, hits.length);
        res.querySelectorAll('.r').forEach((r, i) => r.classList.toggle('sel', i === sel));
        res.querySelector('.r.sel')?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && hits[sel]) { e.preventDefault(); go(hits[sel].href); }
    });
    res.addEventListener('click', (e) => { const a = e.target.closest('.r'); if (a) { e.preventDefault(); go(a.getAttribute('href')); } });
    palette.addEventListener('pointerdown', (e) => { if (e.target === palette) closePalette(); });
    palette.draw = draw;
    document.addEventListener('prism:lang', () => { palette.querySelector('input').placeholder = t(UI.searchPh); palette.querySelectorAll('[data-t]').forEach(applyT); draw(); });
  }
  const input = palette.querySelector('input');
  input.placeholder = t(UI.searchPh);
  input.value = q;
  palette.classList.add('show');
  palette.draw();
  setTimeout(() => input.focus(), 20);
}
function closePalette() { palette?.classList.remove('show'); }
// same page → let the page react (hashchange); other page → navigate
function go(href) {
  closePalette();
  const [file, hash] = href.split('#');
  const here = location.pathname.split('/').pop() || 'index.html';
  if (file === here && hash) { location.hash = hash; window.dispatchEvent(new HashChangeEvent('hashchange')); }
  else location.href = href;
}
addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette?.classList.contains('show') ? closePalette() : openPalette(); }
  else if (e.key === 'Escape' && palette?.classList.contains('show')) closePalette();
  else if (e.key === '/' && !/input|textarea/i.test(document.activeElement?.tagName || '')) { e.preventDefault(); openPalette(); }
});

/* ------------------------------------------------------------------ reveal + glass light */
const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
const reveal = (root = document) => root.querySelectorAll('.rv:not(.in)').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
addEventListener('pointermove', (e) => {
  const g = e.target.closest?.('.glass.lit');
  if (!g) return;
  const r = g.getBoundingClientRect();
  g.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  g.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
}, { passive: true });

/* ------------------------------------------------------------------ toast */
let toastEl, toastT;
function toast(msg) {
  if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
  toastEl.innerHTML = `<span class="dot"></span>${esc(msg)}`;
  toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2600);
}

/* ------------------------------------------------------------------ GitHub releases */
// The newest release of an app: version, date and its Setup / Portable files (cached for the visit).
async function release(app) {
  if (!app.repo) return null;
  const key = 'prism.rel.' + app.repo;
  try { const c = JSON.parse(sessionStorage.getItem(key)); if (c && Date.now() - c.at < 30 * 60e3) return c.v; } catch { /* none */ }
  try {
    const r = await fetch(`https://api.github.com/repos/Pangpond543/${app.repo}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } });
    if (!r.ok) throw new Error(r.status);
    const j = await r.json();
    const files = (j.assets || []).map((a) => ({ name: a.name, url: a.browser_download_url, size: a.size }));
    const v = {
      tag: j.tag_name, date: j.published_at, page: j.html_url,
      setup: files.find((f) => /setup/i.test(f.name) && /\.exe$/i.test(f.name)),
      portable: files.find((f) => /portable/i.test(f.name)),
      apk: files.find((f) => /\.apk$/i.test(f.name)),
    };
    try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), v })); } catch { /* full */ }
    return v;
  } catch { return { tag: null, page: `https://github.com/Pangpond543/${app.repo}/releases/latest` }; }
}
const mb = (n) => (n ? `${(n / 1048576).toFixed(n > 1048576 * 20 ? 0 : 1)} MB` : '');
const day = (iso) => (iso ? new Date(iso).toLocaleDateString(L === 'en' ? 'en-GB' : 'th-TH', { day: 'numeric', month: 'short', year: 'numeric' }) : '');

/* ------------------------------------------------------------------ boot */
function boot(active) {
  document.documentElement.classList.add('js');
  setTheme(get('prism.theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') === 'dark');
  const bg = document.getElementById('bg');
  if (bg) startBackground(bg);
  mountNav(active);
  document.querySelectorAll('[data-t]').forEach(applyT);
  reveal();
}

Object.assign(Prism, { store, t, onLang, setLang, isDark, setTheme, I, UI, mountNav, esc, openPalette, closePalette, reveal, toast, release, mb, day, boot, APPS, byId });
Object.defineProperty(Prism, 'L', { get: () => L }); // live: changes when the visitor switches TH/EN
})();
