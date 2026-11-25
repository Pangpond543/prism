// Prism Shot — the result card (quick.html) over a made-up captured picture: translate and hover-translate.
// Same app id as jobs/shot.js, so its shots are added to data/shots/shot.js.
const base = require('./shot.js');
const PORT = 18977; // served by jobs/shot.js (required above)
const stage = (pic, x, y) => `document.documentElement.style.background = 'url(http://127.0.0.1:${PORT}/${pic}) left top / 1480px auto no-repeat #fbfaf7';
  document.body.style.background = 'transparent';
  const c = document.getElementById('card'); c.style.position = 'absolute'; c.style.left = '${x}px'; c.style.top = '${y}px';`;
const blocks = [
  ['How to build a morning routine', 'วิธีสร้างกิจวัตรตอนเช้า'],
  ['A good morning routine does not need to be long.', 'กิจวัตรตอนเช้าที่ดีไม่จำเป็นต้องยาว'],
  ['Start with one small habit, such as opening the curtains or drinking a glass of water right after you wake up.', 'เริ่มจากนิสัยเล็กๆ อย่างเดียว เช่น เปิดม่าน หรือดื่มน้ำหนึ่งแก้วทันทีหลังตื่นนอน'],
  ['Write a short plan for the day while you eat breakfast.', 'เขียนแผนสั้นๆ สำหรับวันนี้ระหว่างกินอาหารเช้า'],
].map(([text, tr]) => ({ text, tr, lang: 'en', to: 'th' }));
module.exports = {
  ...base,
  query: 'quick.html',
  boot: 2500,
  shots: [
    {
      id: 'card', wait: 1500, act: async (p) => {
        await p.js(`${stage('article', 840, 120)} window.__pwFire('quick:show', ${JSON.stringify({ mode: 'translate', lang: 'en', done: true, blocks })});`);
      },
      hot: { card: '#card', blocks: '#card .qtr', acts: '#card .qacts' },
    },
    {
      id: 'hover', wait: 1500, act: async (p) => {
        await p.js(`${stage('article', 470, 470)} window.__pwFire('quick:show', ${JSON.stringify({ mode: 'hover', lang: 'en', to: 'th', src: 'Write a short plan for the day while you eat breakfast.', tr: 'เขียนแผนสั้นๆ สำหรับวันนี้ระหว่างกินอาหารเช้า' })});`);
      },
      hot: { card: '#card' },
    },
  ],
};
