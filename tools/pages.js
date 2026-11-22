// Writes one small HTML page per app from the same template: node tools/pages.js
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const apps = [
  ['size', 'Prism Size', 'แผนที่ดิสก์แบบแก้ว — คู่มือแบบชี้แล้วรู้ + ดาวน์โหลด'],
  ['cam', 'Prism Cam', 'สตูดิโอกล้องแก้ว + กล้องเสมือน — คู่มือแบบชี้แล้วรู้ + ดาวน์โหลด'],
  ['media', 'Prism Player · Studio', 'เล่นวิดีโอ ตัดต่อ ทำ GIF — คู่มือแบบชี้แล้วรู้'],
  ['rec', 'Prism Rec', 'อัดหน้าจอด้วยแถบแก้วลอย — คู่มือแบบชี้แล้วรู้'],
  ['voiceopen', 'Prism VoiceOpen', 'พูดแล้วเปิดโปรแกรม — คู่มือแบบชี้แล้วรู้'],
  ['code', 'Prism Code', 'เรียน Python โดยดูโค้ดวิ่ง — คู่มือแบบชี้แล้วรู้ + ดาวน์โหลด'],
];
// Plain (non-module) scripts, in order — so the pages also work when opened by double-click (file://),
// where browsers refuse ES modules. index.html carries the same list (shots = cam, page = js/home.js).
const scripts = (shotsId, page) => ['data/apps.js', ...apps.map(([id]) => `data/guide/${id}.js`), `data/shots/${shotsId}.js`,
  'js/bg.js', 'js/core.js', 'js/guide.js', page, 'js/footer.js'].map((src) => `<script defer src="${src}"></script>`).join('\n');
for (const [id, name, desc] of apps) {
  const html = `<!doctype html>
<html lang="th" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${name} · Prism</title>
<meta name="description" content="${desc}">
<link rel="icon" href="img/logos/${id === 'media' ? 'player' : id}.svg">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css">
<script>try{document.documentElement.dataset.theme=localStorage.getItem('prism.theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}</script>
</head>
<body data-app="${id}">
<canvas id="bg" aria-hidden="true"></canvas>
<div class="page">
  <header id="nav"></header>
  <main id="main"></main>
  <footer id="foot"></footer>
</div>
${scripts(id, 'js/app-page.js')}
</body>
</html>
`;
  fs.writeFileSync(path.join(root, id + '.html'), html);
  console.log('wrote', id + '.html');
}
