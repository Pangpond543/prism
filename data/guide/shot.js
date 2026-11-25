(() => {
// Prism Shot guide. Spots match tools/capture/jobs/shot.js + shotcard.js (made-up pictures drawn in bridges/shot.js). Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).shot = {
  screens: [
    {
      id: 'home', title: ['หน้าหลัก', 'Home'],
      hot: {
        big: { t: ['จับภาพ', 'Capture'], d: ['จอหยุดนิ่งทันที ลากเลือกพื้นที่ หรือคลิกเลือกทั้งหน้าต่าง แล้วมีแถบปุ่มให้เลือกว่าจะทำอะไรต่อ', 'The screen freezes at once: drag an area or click a window, then a bar asks what to do next.'], keys: ['Ctrl+Alt+A'] },
        acts: { t: ['ทางลัดทุกโหมด', 'Every mode'], d: ['อ่านข้อความ · แปล · แปลบนภาพ · แปลตามเมาส์ · QR · ภาพยาว (เลื่อนจอ) · ทั้งจอ · หน้าต่าง · หน่วงเวลา — แต่ละอันมีคีย์ลัดของตัวเอง เปลี่ยนได้', 'Read text · translate · translate on picture · hover translate · QR · scrolling · full screen · window · timer — each with its own changeable hotkey.'] },
        ocr: { t: ['ตัวอ่านข้อความ', 'Text reader'], d: ['อ่านไทย อังกฤษ จีน ในภาพได้ในเครื่อง ไม่ต้องใช้เน็ต', 'Reads Thai, English and Chinese on your PC — no internet.'] },
        tr: { t: ['ตัวแปลภาษา', 'Translator'], d: ['AI แปลบนการ์ดจอในเครื่อง ใช้ร่วมกับ Prism LLearn ได้ ไม่ต้องโหลดซ้ำ', 'AI translation on your graphics card, shared with Prism LLearn — no second download.'] },
        ll: { t: ['เชื่อมกับ LLearn', 'LLearn link'], d: ['คลิกคำในภาพดูความหมาย แล้วเก็บเป็นบัตรคำใน Prism LLearn ได้', 'Click words in a capture for their meaning and keep them as Prism LLearn cards.'] },
        target: { t: ['แปลเป็นภาษาอะไร', 'Translate into'], d: ['ไทย (ข้อความไทยจะแปลเป็นอังกฤษให้) หรืออังกฤษ', 'Thai (Thai text becomes English) or English.'] },
        recent: { t: ['ภาพล่าสุด', 'Recent captures'], d: ['คลิกเพื่อแก้ไข คัดลอก หรือปักบนจอ', 'Click to edit, copy or pin.'] },
        dhome: { t: ['หน้าหลัก', 'Home'], d: ['หน้านี้', 'This page.'] },
        dhist: { t: ['ภาพที่จับไว้', 'Captures'], d: ['ทุกภาพ ค้นหาจากข้อความในภาพได้', 'Every capture, searchable by the text inside.'] },
        dedit: { t: ['แก้ไขภาพ', 'Editor'], d: ['ลูกศร กรอบ ข้อความ ตัวเลขขั้นตอน เบลอ', 'Arrows, boxes, text, step numbers, blur.'] },
        dset: { t: ['ตั้งค่า', 'Settings'], d: ['โฟลเดอร์ภาพ คีย์ลัด รูปแบบไฟล์ การอ่าน/แปล', 'Folder, hotkeys, file format, reading / translating.'] },
        theme: { t: ['ภาษา · หน้าตา · เกี่ยวกับ', 'Language · look · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด แก้ว/คลาสสิก', 'Thai/English, light/dark, glass/classic.'] },
      },
    },
    {
      id: 'card', title: ['แปลข้อความในภาพ', 'Translate what you captured'],
      hot: {
        card: { t: ['การ์ดคำแปล', 'Translation card'], d: ['ขึ้นข้างพื้นที่ที่เลือก ทีละย่อหน้า: ต้นฉบับตัวเล็ก คำแปลตัวใหญ่ คำแปลค่อยๆ ขึ้นมาระหว่าง AI ทำงาน', 'Appears next to your area, paragraph by paragraph: small original, big translation, filling in as the AI works.'], keys: ['Ctrl+Alt+T'] },
        blocks: { t: ['คลิกคำดูความหมาย', 'Click a word'], d: ['คำอังกฤษ/จีนคลิกได้ ดูคำอ่าน ความหมายไทย ฟังเสียง แล้ว "เก็บเข้า LLearn"', 'English / Chinese words are clickable: reading, Thai meaning, voice, then "keep in LLearn".'] },
        acts: { t: ['ปุ่มบนการ์ด', 'Card buttons'], d: ['คัดลอกคำแปล · คัดลอกต้นฉบับ · เรียนใน LLearn (ข้อความนี้กลายเป็นบทเรียน) · ปักภาพไว้บนจอ', 'Copy translation · copy original · learn in LLearn (the text becomes a lesson) · pin the picture.'] },
      },
    },
    {
      id: 'hover', title: ['แปลตามเมาส์', 'Hover translate'],
      hot: {
        card: { t: ['ชี้ค้างไว้ = แปล', 'Rest the pointer = translate'], d: ['เปิดโหมดนี้แล้ววางเมาส์บนข้อความไหนก็ได้ ~0.5 วินาที ย่อหน้านั้นถูกกรอบไว้ และฟองคำแปลขึ้นมา เลื่อนเมาส์ออกก็หายไป', 'Turn it on, rest the pointer on any text for ~0.5 s: that paragraph is outlined and a bubble shows its translation. Move away and it goes.'], keys: ['Ctrl+Alt+E', 'Esc'] },
      },
    },
    {
      id: 'history', title: ['ภาพที่จับไว้', 'Captures'],
      hot: {
        list: { t: ['ทุกภาพแยกตามวัน', 'Every capture, by day'], d: ['เป็นไฟล์ภาพธรรมดาในโฟลเดอร์ Pictures\\Prism Shot ปุ่มบนการ์ด: แก้ไข คัดลอก ปักบนจอ คัดลอกข้อความ ชอบ ⌄ เพิ่มเติม', 'Normal picture files in Pictures\\Prism Shot. Card buttons: edit, copy, pin, copy text, favourite, ⌄ more.'] },
        search: { t: ['ค้นจากข้อความในภาพ', 'Search the text in pictures'], d: ['พิมพ์คำที่อยู่ในภาพ ชื่อหน้าต่าง หรือชื่อแอป ก็เจอ (โปรแกรมอ่านข้อความในภาพเก็บไว้ตอนเครื่องว่าง)', 'Type words that appear in a picture, a window title or app name (text is read in the background when the PC is idle).'] },
        filters: { t: ['ตัวกรอง', 'Filters'], d: ['วันนี้ · มีข้อความ · รายการโปรด · ภาพยาว · แก้ไขแล้ว', 'Today · has text · favourites · long shots · edited.'] },
        imp: { t: ['เพิ่มรูป', 'Add pictures'], d: ['นำรูปจากเครื่องเข้ามาอ่าน/แปล/แก้ไข (หรือลากมาวาง / Ctrl+V)', 'Bring your own pictures in to read, translate or edit (or drop / Ctrl+V).'] },
        folder: { t: ['เปิดโฟลเดอร์', 'Open folder'], d: ['เปิดโฟลเดอร์ภาพใน File Explorer', 'Open the pictures folder in File Explorer.'] },
        count: { t: ['จำนวนภาพ', 'Count'], d: ['มีกี่ภาพ', 'How many captures.'] },
      },
    },
    {
      id: 'edit', title: ['แก้ไขภาพ', 'Editor'],
      hot: {
        editor: { t: ['ตัวแก้ไขภาพ', 'The editor'], d: ['แถบบน: เลือก ครอป ลูกศร เส้น กรอบ วงรี ปากกา ไฮไลต์ ข้อความ ตัวเลขขั้นตอน เบลอ พิกเซล สปอตไลต์ + สี/ความหนา · แผงขวา: อ่านข้อความ · ซ่อนข้อมูลส่วนตัว (เบลออีเมล เบอร์โทร เลขบัตร ให้อัตโนมัติ) · แปลบนภาพ · ทำภาพให้สวย (พื้นหลัง ขอบมน เงา) · QR · แถบล่าง: คัดลอก ปักบนจอ บันทึก', 'Top: select, crop, arrow, line, box, ellipse, pen, highlighter, text, step numbers, blur, pixelate, spotlight + colour / size · right: read text · hide private info (auto-blur e-mails, phone and card numbers) · translate on picture · beautify (background, round corners, shadow) · QR · bottom: copy, pin, save.'], keys: ['Ctrl+Z', 'Ctrl+S'] },
      },
    },
    {
      id: 'settings', title: ['ตั้งค่า', 'Settings'],
      hot: {
        dir: { t: ['เก็บภาพที่ไหน', 'Where pictures go'], d: ['ค่าเริ่มต้น Pictures\\Prism Shot แยกโฟลเดอร์ตามเดือน เปลี่ยนได้', 'Pictures\\Prism Shot by default, one folder per month — changeable.'] },
        pick: { t: ['เลือกโฟลเดอร์', 'Pick a folder'], d: ['เลือกโฟลเดอร์อื่น', 'Choose another folder.'] },
      },
    },
  ],

  demos: [
    {
      id: 'translate', title: ['แปลข้อความบนจอเป็นไทย', 'Translate text on screen into Thai'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'home', h: 'acts', a: 'key', k: 'Ctrl+Alt+T', say: ['กด Ctrl+Alt+T แล้วลากครอบข้อความที่อยากรู้', 'Press Ctrl+Alt+T and drag over the text'] },
        { s: 'card', h: 'card', a: 'hover', say: ['การ์ดคำแปลขึ้นข้างๆ ทีละย่อหน้า', 'The translation card appears beside it, paragraph by paragraph'] },
        { s: 'card', h: 'blocks', a: 'click', say: ['คลิกคำที่ไม่รู้ ดูความหมายแล้วเก็บเข้า LLearn ได้', 'Click an unknown word for its meaning, and keep it in LLearn'] },
        { s: 'card', h: 'acts', a: 'click', say: ['คัดลอกคำแปล หรือปักภาพไว้บนจอ', 'Copy the translation or pin the picture on screen'] },
      ],
    },
    {
      id: 'ocr', title: ['คัดลอกข้อความจากภาพ', 'Copy text out of a picture'], sub: ['อ่านข้อความ', 'Read text'],
      steps: [
        { s: 'home', h: 'acts', a: 'key', k: 'Ctrl+Alt+X', say: ['กด Ctrl+Alt+X แล้วลากครอบ — ข้อความถูกคัดลอกให้ทันที', 'Press Ctrl+Alt+X and drag — the text is copied at once'] },
        { s: 'history', h: 'search', a: 'click', say: ['ภายหลังค้นหาภาพจากคำที่อยู่ในภาพได้', 'Later, find the picture by any word inside it'] },
      ],
    },
    {
      id: 'hover', title: ['อ่านเว็บอังกฤษแบบชี้แล้วแปล', 'Point at English to translate'], sub: ['แปลตามเมาส์', 'Hover'],
      steps: [
        { s: 'home', h: 'acts', a: 'key', k: 'Ctrl+Alt+E', say: ['เปิดโหมดแปลตามเมาส์', 'Turn on hover translate'] },
        { s: 'hover', h: 'card', a: 'hover', say: ['วางเมาส์บนประโยคไหนก็ได้ ฟองคำแปลขึ้นมาเอง กด Esc เพื่อปิดโหมด', 'Rest the pointer on any sentence — the bubble appears. Esc turns it off'] },
      ],
    },
    {
      id: 'annotate', title: ['ทำภาพสอนการใช้งาน', 'Make a how-to picture'], sub: ['แก้ไขภาพ', 'Editor'],
      steps: [
        { s: 'history', h: 'list', a: 'click', say: ['เลือกภาพแล้วกดแก้ไข', 'Pick a capture and press edit'] },
        { s: 'edit', h: 'editor', a: 'hover', say: ['ใส่ลูกศร กรอบ ตัวเลขขั้นตอน เบลอข้อมูลส่วนตัว แล้วกด "สวยงาม" ใส่พื้นหลัง — คัดลอกไปวางในแชทได้เลย', 'Add arrows, boxes, step numbers, blur private bits, then "Beautify" — copy it into a chat'] },
      ],
    },
  ],

  feats: [
    { i: '🔤', t: ['อ่านข้อความในภาพ', 'Reads text in pictures'], d: ['ไทย อังกฤษ จีน ในเครื่องทั้งหมด แม้ตัวหนังสือเล็กบนจอ', 'Thai, English and Chinese, fully offline — even tiny UI text.'] },
    { i: '🌏', t: ['แปลได้ 4 แบบ', '4 ways to translate'], d: ['การ์ดคำแปล · แปลทับบนภาพเดิม · แปลตามเมาส์ · แปลในตัวแก้ไข', 'Translation card · translation drawn on the picture · hover translate · in the editor.'] },
    { i: '📌', t: ['ปักภาพบนจอ', 'Pin on screen'], d: ['ภาพลอยอยู่บนสุด ซูม ปรับความใส ทะลุคลิกได้ เหมาะกับดูข้อมูลขณะทำงาน', 'Floating pictures you can zoom, fade and click through — handy while you work.'] },
    { i: '📜', t: ['ภาพยาวทั้งหน้าเว็บ', 'Scrolling capture'], d: ['เลื่อนหน้าให้เองแล้วต่อภาพเป็นรูปเดียว', 'Scrolls the page for you and stitches one long picture.'] },
    { i: '🛡', t: ['ซ่อนข้อมูลส่วนตัว', 'Hide private info'], d: ['หาและเบลออีเมล เบอร์โทร เลขบัตร เลขบัญชี เลขบัตรประชาชนให้อัตโนมัติ', 'Finds and blurs e-mails, phone, card, bank and ID numbers for you.'] },
    { i: '🎓', t: ['ต่อกับ Prism LLearn', 'Works with Prism LLearn'], d: ['เก็บคำศัพท์จากภาพเป็นบัตรคำ หรือเปิดข้อความเป็นบทเรียน', 'Keep words from pictures as cards, or open the text as a lesson.'] },
  ],

  keys: [
    { k: 'Ctrl+Alt+A', d: ['จับภาพพื้นที่ / หน้าต่าง', 'Capture an area / window'] },
    { k: 'Ctrl+Alt+X', d: ['อ่านข้อความ (คัดลอกทันที)', 'Read text (copied at once)'] },
    { k: 'Ctrl+Alt+T', d: ['แปล', 'Translate'] },
    { k: 'Ctrl+Alt+G', d: ['แปลบนภาพ', 'Translate on the picture'] },
    { k: 'Ctrl+Alt+E', d: ['แปลตามเมาส์ เปิด/ปิด', 'Hover translate on / off'] },
    { k: 'Ctrl+Alt+Q · Ctrl+Alt+J', d: ['QR · ภาพยาว', 'QR · scrolling capture'] },
    { k: 'Ctrl+Alt+F · Ctrl+Alt+W · Ctrl+Alt+L', d: ['ทั้งจอ · หน้าต่าง · พื้นที่เดิมอีกครั้ง', 'Full screen · window · same area again'] },
    { k: 'Ctrl+Alt+V · Ctrl+Alt+B', d: ['ปักภาพจากคลิปบอร์ด · ซ่อน/แสดงภาพที่ปักทั้งหมด', 'Pin the clipboard picture · hide / show all pins'] },
  ],

  faq: [
    { q: ['ต้องใช้เน็ตไหม? เสียเงินไหม?', 'Need internet? Any cost?'], a: ['ไม่ต้องและฟรี การอ่านข้อความและการแปลทำในเครื่องทั้งหมด', 'No and free — reading and translating run on your PC.'] },
    { q: ['ภาพเก็บไว้ที่ไหน?', 'Where are pictures kept?'], a: ['เป็นไฟล์ภาพธรรมดาใน Pictures\\Prism Shot แยกตามเดือน ลบแล้วไปถังขยะ', 'Normal files in Pictures\\Prism Shot, one folder per month; deleting goes to the Recycle Bin.'] },
    { q: ['คีย์ลัดชนกับโปรแกรมอื่น', 'A hotkey clashes with another app'], a: ['เปลี่ยนได้ทุกปุ่มในหน้าตั้งค่า และโปรแกรมจะบอกถ้าคีย์ไหนถูกแอปอื่นใช้อยู่', 'Change any of them in Settings; Shot warns when another app already uses a key.'] },
    { q: ['ต้องมี Prism LLearn ไหม?', 'Do I need Prism LLearn?'], a: ['ไม่จำเป็น แต่ถ้ามี จะใช้ตัวแปลร่วมกัน (ไม่ต้องโหลดซ้ำ) และเก็บคำศัพท์เข้า LLearn ได้', 'No, but with it both share one translator (no second download) and you can keep words in LLearn.'] },
  ],
};
})();
