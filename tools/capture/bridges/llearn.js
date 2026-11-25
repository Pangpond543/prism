// Fake Tauri bridge for Prism LLearn: a made-up library (demo video lesson with English + Thai lines, a reading,
// saved words, 4 months of study days). The video is a plain colour gradient made with ffmpeg (demo/llearn-demo.mp4).
const fs = require('fs');
const path = require('path');
const tauri = require('./tauri.js');
module.exports = (win) => {
  const now = Date.parse('2026-11-25T20:00:00+07:00');
  const day = 864e5;
  const video = 'data:video/mp4;base64,' + fs.readFileSync(path.join(__dirname, '..', 'demo', 'llearn-demo.mp4')).toString('base64');
  const thumb = tauri.thumb;
  const lines = [
    ['Good morning, everyone, and welcome back.', 'อรุณสวัสดิ์ทุกคน และยินดีต้อนรับกลับมาค่ะ'],
    ['Today we are going to talk about my morning routine.', 'วันนี้เราจะมาคุยกันเรื่องกิจวัตรตอนเช้าของฉัน'],
    ['I usually wake up at six thirty.', 'ปกติฉันตื่นนอนตอนหกโมงครึ่ง'],
    ['The first thing I do is open the curtains.', 'สิ่งแรกที่ฉันทำคือเปิดม่าน'],
    ['Sunlight helps me feel awake and ready.', 'แสงแดดช่วยให้ฉันรู้สึกตื่นตัวและพร้อม'],
    ['Then I make a cup of coffee and a simple breakfast.', 'จากนั้นฉันชงกาแฟหนึ่งแก้วและทำอาหารเช้าง่ายๆ'],
    ['While I eat, I write a short plan for the day.', 'ระหว่างกิน ฉันเขียนแผนสั้นๆ สำหรับวันนี้'],
    ['It only takes five minutes, but it changes everything.', 'ใช้เวลาแค่ห้านาที แต่เปลี่ยนทุกอย่างเลย'],
    ['After that, I go for a quick walk around the park.', 'หลังจากนั้น ฉันออกไปเดินเร็วๆ รอบสวน'],
    ['Fresh air is the best way to start the morning.', 'อากาศบริสุทธิ์คือวิธีที่ดีที่สุดในการเริ่มต้นตอนเช้า'],
    ['What does your morning look like?', 'ตอนเช้าของคุณเป็นอย่างไรบ้าง'],
    ['Tell me in the comments below!', 'บอกฉันในคอมเมนต์ด้านล่างนะ'],
  ];
  const cues = lines.map(([t, th], i) => ({ s: 1200 + i * 3600, e: 1200 + i * 3600 + 3300, t, th }));
  const reading = [
    ['Small habits make a big difference.', 'นิสัยเล็กๆ สร้างความแตกต่างที่ยิ่งใหญ่'],
    ['If you read ten pages every day, you will finish more than a dozen books in a year.', 'ถ้าคุณอ่านวันละสิบหน้า คุณจะอ่านหนังสือจบมากกว่าสิบเล่มในหนึ่งปี'],
    ['The secret is not motivation, but making the habit easy to start.', 'เคล็ดลับไม่ใช่แรงจูงใจ แต่คือการทำให้นิสัยนั้นเริ่มได้ง่าย'],
  ].map(([t, th], i) => ({ s: i * 1000, e: i * 1000 + 900, t, th }));
  const src = (o) => ({ added: now - 3 * day, last: now - day, pos: 0, ...o });
  const sources = [
    src({ id: 'f-demo1', kind: 'file', video: 'D:\\Videos\\My Morning Routine (demo).mp4', title: 'My Morning Routine (demo)', lang: 'en', dur: 46000, pos: 9000, last: now - 3600e3, subName: 'English' }),
    src({ id: 't-demo2', kind: 'text', url: '', title: 'Small habits, big difference', lang: 'en', last: now - 5 * 3600e3 }),
    src({ id: 'yt-demo3', kind: 'yt', vid: 'demo3', url: '', title: 'Travel English: At the Airport', channel: 'Prism Demo', lang: 'en', thumb: thumb('#6C8CFF', '#B57BFF', 'Airport English', '12:40'), dur: 760000, pos: 300000, track: 'en', tracks: [{ auto: false, code: 'en', lang: 'en', name: 'English' }], last: now - 2 * day }),
    src({ id: 'yt-demo4', kind: 'yt', vid: 'demo4', url: '', title: '中文听力 · 点咖啡 Ordering coffee', channel: 'Prism Demo', lang: 'zh', thumb: thumb('#F2A65A', '#E0607E', '点咖啡', '08:15'), dur: 495000, pos: 0, track: 'zh', tracks: [{ auto: false, code: 'zh', lang: 'zh', name: 'Chinese' }], last: now - 4 * day }),
    src({ id: 'w-demo5', kind: 'web', url: 'https://example.com/learning-tips', title: '7 tips to learn English faster', lang: 'en', last: now - 6 * day }),
  ];
  const srcData = { 'f-demo1': { cues }, 't-demo2': { cues: reading } };
  // saved words → cards in several review states
  const W = [
    ['routine', '/ruːˈtiːn/', 'กิจวัตร', 'A sequence of actions regularly followed.', 'my morning routine', 'กิจวัตรตอนเช้าของฉัน'],
    ['curtain', '/ˈkɜː.tən/', 'ม่าน', 'A piece of cloth hung to cover a window.', 'open the curtains', 'เปิดม่าน'],
    ['awake', '/əˈweɪk/', 'ตื่น', 'Not asleep; conscious.', 'feel awake and ready', 'รู้สึกตื่นตัวและพร้อม'],
    ['habit', '/ˈhæb.ɪt/', 'นิสัย', 'An action done regularly.', 'Small habits make a big difference.', 'นิสัยเล็กๆ สร้างความแตกต่างที่ยิ่งใหญ่'],
    ['motivation', '/ˌməʊ.tɪˈveɪ.ʃən/', 'แรงจูงใจ', 'Willingness of action.', 'The secret is not motivation', 'เคล็ดลับไม่ใช่แรงจูงใจ'],
    ['dozen', '/ˈdʌz.ən/', 'โหล, สิบสอง', 'A set of twelve.', 'more than a dozen books', 'หนังสือมากกว่าสิบเล่ม'],
    ['breakfast', '/ˈbrek.fəst/', 'อาหารเช้า', 'The first meal of the day.', 'a simple breakfast', 'อาหารเช้าง่ายๆ'],
    ['boarding pass', '/ˈbɔː.dɪŋ pɑːs/', 'บัตรขึ้นเครื่อง', 'A pass for boarding an aircraft.', 'May I see your boarding pass?', 'ขอดูบัตรขึ้นเครื่องหน่อยครับ'],
    ['luggage', '/ˈlʌɡ.ɪdʒ/', 'กระเป๋าเดินทาง', 'Bags for travelling.', 'Is this your luggage?', 'นี่กระเป๋าของคุณไหม'],
    ['delay', '/dɪˈleɪ/', 'ความล่าช้า', 'A period of waiting.', 'a two-hour delay', 'ล่าช้าสองชั่วโมง'],
    ['fresh', '/freʃ/', 'สด, บริสุทธิ์', 'Newly made or obtained.', 'Fresh air is the best way', 'อากาศบริสุทธิ์คือวิธีที่ดีที่สุด'],
    ['咖啡', 'kāfēi', 'กาแฟ', '', '我要一杯咖啡', 'ฉันขอกาแฟหนึ่งแก้ว'],
    ['大杯', 'dà bēi', 'แก้วใหญ่', '', '要大杯的', 'เอาแก้วใหญ่'],
    ['谢谢', 'xièxie', 'ขอบคุณ', '', '谢谢你', 'ขอบคุณนะ'],
  ];
  const words = {};
  const cards = W.map(([head, read, mean, en, ex, exTh], i) => {
    const lang = /[\u4e00-\u9fff]/.test(head) ? 'zh' : 'en';
    const c = now - (20 - i) * day;
    words[lang + ':' + head] = { s: i < 3 ? 2 : 1, t: c };
    const st = i < 5 ? 2 : i < 9 ? 1 : 0;
    return { id: 'demo' + i, c, lang, head, show: head, read, mean, en, ex, exTh,
      srs: { st, due: st ? now + (i % 3 - 1) * day : 0, s: st ? 3 + i : 0, d: 5, reps: st ? 3 : 0, lapses: 0, last: st ? now - 2 * day : 0, ivl: st ? 4 : 0 },
      src: { id: 'f-demo1', kind: 'file', t0: 0, t1: 3000, title: 'My Morning Routine (demo)' } };
  });
  for (const w of ['good', 'morning', 'everyone', 'welcome', 'back', 'today', 'talk', 'wake', 'first', 'thing', 'cup', 'coffee', 'simple', 'write', 'short', 'plan', 'day', 'walk', 'park', 'air', 'best', 'way', 'start', 'tell']) words['en:' + w] = { s: 2, t: now - 40 * day };
  const act = {};
  let seed = 543; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 130; i++) {
    const d = new Date(now - i * day + 7 * 3600e3).toISOString().slice(0, 10);
    if (rnd() < (i < 40 ? 0.85 : 0.5)) act[d] = { m: Math.round(rnd() * 50 + 8), l: Math.round(rnd() * 12), n: Math.round(rnd() * 3) };
  }
  const db = { v: 1, words, cards, sources, act, goal: { min: 20 }, asrQ: [], placed: { en: 'B1' }, ui: { view: 'home', wordsLang: 'all', wordsFilter: 'all' },
    set: { voiceEn: 0, voiceZh: 3, speed: 1, showTh: true, pinyin: true, autoPause: false, subFont: 21, tts: true, newPerDay: 20, aiAuto: true, aiMode: 'best', liveSave: true } };
  // dictionary: tiny made-up entries for the words on screen
  const DICT = {
    routine: ['/ruːˈtiːn/', [['n', ['A sequence of actions regularly followed.', 'A set of dance steps or jokes.']], ['adj', ['Done as part of a regular procedure.']]], ['กิจวัตร', 'งานประจำ'], [['ธรรมดา', 'adj']], 2310],
    morning: ['/ˈmɔː.nɪŋ/', [['n', ['The part of the day from dawn to midday.']]], ['ตอนเช้า', 'เวลาเช้า'], [], 412],
    curtains: ['/ˈkɜː.tənz/', [['n', ['Pieces of cloth hung to cover a window.']]], ['ม่าน', 'ผ้าม่าน'], [], 5120],
  };
  const COMMON = new Set('i the a an and to of in on at is are was be it we you my me your our for with that this what does do look like then while but only takes after go up down so just can will make made around first thing day help helps feel ready below tell us more than if every not best way'.split(' '));
  const map = {
    about_info: { version: '1.1.0', repo: 'Pangpond543/prism-llearn', tauri: '2', test: '', data: '', videos: '' },
    db_load: () => JSON.stringify(db),
    db_save: true,
    src_load: (id) => (srcData[id] ? JSON.stringify(srcData[id]) : null),
    src_save: true,
    media_url: () => ({ ok: true, url: video }),
    dict_en: (q) => { const k = String(q || '').toLowerCase(); const e = DICT[k] || ['', [['n', ['(demo dictionary entry)']]], ['คำแปล'], [], 3000]; return { ok: true, q: k, head: k, lang: 'en', also: null, e }; },
    dict_enmany: (list) => Object.fromEntries((list || []).map((w) => { const l = w.toLowerCase(); return [w, [l === 'curtains' ? 'curtain' : l, COMMON.has(l) ? 40 : 2500]]; })),
    dict_zhmany: (list) => Object.fromEntries((list || []).map((w) => [w, ['', [], 1]])),
    dict_top: [],
    tr_state: { state: 'ready', gpu: true, borrowed: false },
    asr_state: { installed: true, best: true, fast: true, device: 'gpu', jobs: [] },
    tr_text: (a) => ({ ok: true, text: '', ms: 300 }),
    inbox_take: [],
    update_check: { ok: true, hasUpdate: false, current: '1.1.0' },
  };
  tauri(win, map);
};
