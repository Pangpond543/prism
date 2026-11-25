// Fake Tauri bridge for Prism Shot: a made-up capture history (pictures are SVGs drawn here — no real screen),
// demo OCR / translation results, and events (window.__pwFire('quick:show', …) drives the result card page).
const tauri = require('./tauri.js');

const enc = (s) => 'data:image/svg+xml;utf8,' + encodeURIComponent(s);
const F = "font-family='Segoe UI, Arial, sans-serif'";
const PICS = {
  article: [1200, 720, `<rect width='1200' height='720' fill='#fbfaf7'/><rect width='1200' height='64' fill='#1f2937'/><text x='40' y='42' ${F} font-size='24' fill='#fff' font-weight='700'>Daily Notes</text>
    <text x='60' y='150' ${F} font-size='44' font-weight='700' fill='#111'>How to build a morning routine</text>
    <text x='60' y='196' ${F} font-size='20' fill='#6b7280'>5 min read · Updated November 2026</text>
    ${['A good morning routine does not need to be long.', 'Start with one small habit, such as opening the curtains', 'or drinking a glass of water right after you wake up.', 'Write a short plan for the day while you eat breakfast.', 'It only takes five minutes, but it helps you focus on', 'what really matters before the day gets busy.'].map((l, i) => `<text x='60' y='${270 + i * 46}' ${F} font-size='28' fill='#1f2937'>${l}</text>`).join('')}
    <rect x='60' y='560' width='220' height='56' rx='28' fill='#2563eb'/><text x='104' y='596' ${F} font-size='22' fill='#fff' font-weight='600'>Read more</text>`],
  menu: [900, 700, `<rect width='900' height='700' fill='#2b2118'/><text x='450' y='90' ${F} font-size='54' fill='#f5e6c8' text-anchor='middle' font-weight='700'>咖啡菜单</text>
    ${[['拿铁', 'Latte', '28'], ['美式咖啡', 'Americano', '22'], ['卡布奇诺', 'Cappuccino', '28'], ['抹茶拿铁', 'Matcha latte', '32'], ['热巧克力', 'Hot chocolate', '26']].map(([z, e, p], i) => `<text x='120' y='${200 + i * 92}' ${F} font-size='40' fill='#f5e6c8'>${z}</text><text x='120' y='${234 + i * 92}' ${F} font-size='20' fill='#bfa98a'>${e}</text><text x='780' y='${214 + i * 92}' ${F} font-size='36' fill='#f5e6c8' text-anchor='end'>¥${p}</text>`).join('')}`],
  chat: [1000, 640, `<rect width='1000' height='640' fill='#eef2ff'/><rect x='60' y='60' width='560' height='90' rx='26' fill='#fff'/><text x='92' y='116' ${F} font-size='26' fill='#111'>Are we still meeting at 3 pm?</text>
    <rect x='380' y='190' width='560' height='90' rx='26' fill='#6366f1'/><text x='412' y='246' ${F} font-size='26' fill='#fff'>Yes! See you at the coffee shop.</text>
    <rect x='60' y='320' width='640' height='90' rx='26' fill='#fff'/><text x='92' y='376' ${F} font-size='26' fill='#111'>Great, I will bring the slides.</text>`],
  chart: [1100, 660, `<rect width='1100' height='660' fill='#0f172a'/><text x='50' y='70' ${F} font-size='30' fill='#e2e8f0' font-weight='700'>Weekly study time</text>
    ${[120, 200, 160, 260, 220, 320, 180].map((h, i) => `<rect x='${80 + i * 140}' y='${560 - h}' width='80' height='${h}' rx='10' fill='${['#60a5fa', '#818cf8', '#a78bfa', '#f472b6', '#fb923c', '#facc15', '#34d399'][i]}'/><text x='${120 + i * 140}' y='600' ${F} font-size='20' fill='#94a3b8' text-anchor='middle'>${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</text>`).join('')}`],
  error: [880, 420, `<rect width='880' height='420' fill='#f3f4f6'/><rect x='40' y='40' width='800' height='340' rx='14' fill='#fff' stroke='#d1d5db'/><circle cx='110' cy='150' r='34' fill='#ef4444'/><text x='110' y='164' ${F} font-size='40' fill='#fff' text-anchor='middle' font-weight='700'>!</text>
    <text x='170' y='140' ${F} font-size='28' fill='#111' font-weight='600'>The file could not be saved</text><text x='170' y='180' ${F} font-size='22' fill='#4b5563'>The disk is full. Free up some space and try again.</text>
    <rect x='640' y='290' width='160' height='50' rx='8' fill='#2563eb'/><text x='720' y='323' ${F} font-size='22' fill='#fff' text-anchor='middle'>OK</text>`],
  qr: [700, 700, `<rect width='700' height='700' fill='#fff'/>${Array.from({ length: 21 * 21 }, (_, i) => { const x = i % 21, y = (i / 21) | 0; const f = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13); const on = f ? (x % 6 === 0 || y % 6 === 0 || (x % 7 > 1 && x % 7 < 5 && y % 7 > 1 && y % 7 < 5) || (x > 13 && ((x - 14) % 6 === 0 || (x > 15 && x < 19 && y > 1 && y < 5)))) : ((x * 7 + y * 13 + x * y) % 3 === 0); return on ? `<rect x='${70 + x * 27}' y='${70 + y * 27}' width='27' height='27'/>` : ''; }).join('')}`],
};
const svg = (k) => { const [w, h, body] = PICS[k]; return enc(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${body}</svg>`); };

module.exports = (win) => {
  const now = Date.parse('2026-11-25T20:00:00+07:00');
  const H = [
    ['article', 'region', 'Daily Notes — How to build a morning routine', 'msedge', 'en', 'How to build a morning routine\nA good morning routine does not need to be long.', 9, true],
    ['menu', 'region', '咖啡菜单 — Photos', 'photos', 'zh', '咖啡菜单\n拿铁 ¥28\n美式咖啡 ¥22', 40],
    ['chat', 'window', 'Messages', 'chat', 'en', 'Are we still meeting at 3 pm?\nYes! See you at the coffee shop.', 95],
    ['chart', 'full', 'Study dashboard', 'msedge', 'en', 'Weekly study time', 300],
    ['error', 'window', 'Save As', 'notepad', 'en', 'The file could not be saved\nThe disk is full. Free up some space and try again.', 1500],
    ['qr', 'region', 'Event poster', 'msedge', '', '', 3000],
  ];
  const items = H.map(([k, kind, title, app, lang, text, minAgo, fav], i) => ({
    id: 'demo' + k, kind, title, app, lang, text, read: !!text, fav: !!fav, edited: false, w: PICS[k][0], h: PICS[k][1],
    t: now - minAgo * 60e3, path: `D:\\Pictures\\Prism Shot\\2026-11\\Shot 2026-11-25 ${String(19 - (i >> 1)).padStart(2, '0')}.${String(10 + i * 7).padStart(2, '0')}.00.png`,
  }));
  win.__pwPic = (id) => svg(String(id).replace(/^demo/, ''));
  const S = {
    autostart: true, copy_on_save: true, cursor: false, dark: false, delay: 3, enter_action: 'copy', fade: true, format: 'png', history: true,
    hotkeys: { delay: '', full: 'Ctrl+Alt+F', hover: 'Ctrl+Alt+E', last: 'Ctrl+Alt+L', lens: 'Ctrl+Alt+G', ocr: 'Ctrl+Alt+X', pinclip: 'Ctrl+Alt+V', pins: 'Ctrl+Alt+B', qr: 'Ctrl+Alt+Q', scroll: 'Ctrl+Alt+J', shot: 'Ctrl+Alt+A', translate: 'Ctrl+Alt+T', window: 'Ctrl+Alt+W' },
    hover_delay: 450, jpg_quality: 92, keep_days: 0, lang: 'th', last_region: [100, 100, 800, 400], ll_share: true, magnifier: true, ocr_index: true, ocr_keep_lines: true,
    ocr_langs: 'auto', outDir: 'D:\\Pictures\\Prism Shot', out_dir: '', pin_opacity: 1, pin_shadow: true, scroll_max: 30000, scroll_method: 'auto', startup_asked: true,
    tr_gpu: true, tr_target: 'th', window_shadow: true,
  };
  // events: the page listens; the capture job fires
  const L = {};
  win.__pwFire = (ev, payload) => (L[ev] || []).forEach((f) => f({ event: ev, payload }));
  tauri(win, {
    about_info: { version: '1.0.0', repo: 'Pangpond543/prism-shot', tauri: '2', test: '' },
    settings_get: () => S,
    settings_set: (a) => Object.assign(S, a || {}),
    hist_list: () => ({ dir: S.outDir, items: JSON.parse(JSON.stringify(items)) }),
    ocr_status: { available: true, loaded: true, error: '' },
    tr_state: { state: 'ready', shared: true, gpu: true, borrowed: false, downloading: null, model: '' },
    ll_status: { installed: true, running: true, dict: true, inbox: 0 },
    ll_mark: [],
    hotkeys_status: Object.fromEntries(Object.keys(S.hotkeys).map((k) => [k, true])),
    edit_state_load: null,
    update_check: { ok: true, hasUpdate: false, current: '1.0.0' },
  });
  win.__TAURI__.event.listen = async (ev, f) => { (L[ev] = L[ev] || []).push(f); return () => {}; };
};
module.exports.svg = svg;
