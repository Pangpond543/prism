(() => {
// Prism LLearn guide. Spots match tools/capture/jobs/llearn.js (made-up lessons from bridges/llearn.js). Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).llearn = {
  screens: [
    {
      id: 'home', title: ['หน้าแรก', 'Home'],
      hot: {
        add: { t: ['วางลิงก์หรือข้อความ', 'Paste a link or text'], d: ['วางลิงก์ YouTube, Bilibili, TikTok, เว็บบทความ หรือพิมพ์/วางข้อความอังกฤษ-จีน แล้วกด Enter = ได้บทเรียนใหม่ทันที', 'Paste a YouTube, Bilibili, TikTok or article link, or English / Chinese text, then Enter — a new lesson.'], tip: ['กด Ctrl+V ตรงไหนก็ได้ในหน้าต่าง หรือลากลิงก์จากเบราว์เซอร์มาวาง', 'Press Ctrl+V anywhere in the window, or drag a link in from the browser'], keys: ['Ctrl+L', 'Ctrl+V'] },
        go: { t: ['เริ่ม', 'Start'], d: ['เปิดบทเรียนจากสิ่งที่วางไว้', 'Open a lesson from what you pasted.'] },
        file: { t: ['ไฟล์ในเครื่อง', 'File on PC'], d: ['เปิดวิดีโอ / เสียงในเครื่อง (mp4 mkv mp3 …) ใช้ซับที่อยู่ข้างไฟล์ ในไฟล์ หรือให้ AI ทำซับให้', 'Open a video or audio file (mp4, mkv, mp3…): uses subtitles next to it or inside it, or AI writes them.'], keys: ['Ctrl+O'] },
        top: { t: ['ตัวเลขวันนี้', 'Today'], d: ['เรียนต่อเนื่องกี่วัน (เปลวไฟ) · เป้าหมายนาทีต่อวัน (คลิกเปลี่ยนได้) · บัตรที่ต้องทบทวน · คำที่กำลังจำ · คำที่รู้แล้ว', 'Streak (flame) · daily minutes goal (click to change) · cards due · words being learnt · known words.'] },
        heat: { t: ['ตารางการเรียน', 'Learning heatmap'], d: ['ทุกวันทั้งปีแบบ GitHub ยิ่งเรียนมากสียิ่งเข้ม ชี้ = ตัวเลขของวันนั้น คลิก = ดูว่าวันนั้นเรียนคำไหน บทไหน', 'Every day of the year, GitHub-style — darker = more study. Hover for numbers, click to see the words and lessons of that day.'] },
        recent: { t: ['บทเรียนล่าสุด', 'Recent lessons'], d: ['เรียนต่อจากที่ค้างไว้ แถบด้านล่าง = ดูไปถึงไหนแล้ว ไอคอนลูกศร = มีไฟล์ไว้ดูออฟไลน์', 'Continue where you stopped; the bar shows progress, the arrow icon = kept for offline.'] },
        status: { t: ['ตั้งค่า', 'Settings'], d: ['ตัวแปลภาษาและ AI ทำซับพร้อมไหม (ทำงานบนการ์ดจอ) · โหมดซับ · ซับสดจากเสียงในคอม · เสียงอ่านอังกฤษ/จีน · ความเร็วเสียง · บัตรใหม่ต่อวัน', 'Translator and AI subtitles ready (on the graphics card) · subtitle mode · live subtitles · English / Chinese voice · speed · new cards per day.'] },
        dhome: { t: ['หน้าแรก', 'Home'], d: ['หน้านี้', 'This page.'], keys: ['Ctrl+1'] },
        dlearn: { t: ['เรียน', 'Learn'], d: ['บทเรียนที่เปิดอยู่', 'The open lesson.'], keys: ['Ctrl+2'] },
        dreview: { t: ['ทบทวน', 'Review'], d: ['ตัวเลข = บัตรที่ถึงเวลาทบทวน', 'The number = cards due.'], keys: ['Ctrl+3'] },
        dwords: { t: ['คลังคำ', 'Word bank'], d: ['คำที่เก็บไว้ทั้งหมด', 'Every word you kept.'], keys: ['Ctrl+4'] },
        theme: { t: ['ภาษา · หน้าตา · เกี่ยวกับ', 'Language · look · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด แก้ว/คลาสสิก', 'Thai/English, light/dark, glass/classic.'] },
      },
    },
    {
      id: 'learn', title: ['เรียนจากวิดีโอ', 'Learn from a video'],
      hot: {
        video: { t: ['วิดีโอ', 'Video'], d: ['YouTube หรือไฟล์ในเครื่อง กด Space = เล่น/หยุด', 'YouTube or a file on your PC. Space = play / pause.'], keys: ['Space'] },
        cap: { t: ['บรรทัดที่กำลังพูด', 'The line being spoken'], d: ['ซับตัวใหญ่ใต้วิดีโอ คำที่พูดไปแล้วเปลี่ยนสีแบบคาราโอเกะ และมีคำแปลไทยอยู่ข้างใต้ คลิกคำไหนก็ได้เพื่อดูความหมาย', 'Big subtitles under the video, karaoke-style colouring, Thai underneath. Click any word for its meaning.'] },
        ctrl: { t: ['ปุ่มควบคุม', 'Controls'], d: ['บรรทัดก่อน/ถัดไป · วนบรรทัดนี้ (R) · หยุดทีละบรรทัด (A) · ฟังแล้วพิมพ์ (D) · ความเร็ว 0.5–1.5× · คำแปลไทย เปิด/ปิด (T) · ขนาดตัวอักษร · AI ทำซับ / แก้ซับ', 'Previous / next line · repeat line (R) · pause after each line (A) · listen and type (D) · speed 0.5–1.5× · Thai on/off (T) · text size · AI subtitles / edit.'], keys: ['R', 'A', 'D', 'T'] },
        title: { t: ['บทเรียน', 'Lesson'], d: ['ชื่อ แหล่งซับ (เลือก track ได้) และจำนวนคำใหม่ / กำลังจำ / แปลแล้วกี่บรรทัด', 'Title, subtitle source (pick a track), and new words / learning / lines translated.'] },
        lines: { t: ['ทุกบรรทัด + คำแปล', 'Every line + Thai'], d: ['คำสีทอง = คำใหม่ · สีฟ้า = กำลังจำ · ปกติ = รู้แล้ว คลิกเวลาเพื่อเล่นจากบรรทัดนั้น แปลไทยทุกบรรทัดด้วย AI ในเครื่อง (ไม่ใช้เน็ต)', 'Gold = new word · blue = learning · plain = known. Click a time to play from there. Every line is translated by AI on your PC (no internet).'] },
        stats: { t: ['สรุปบทเรียน', 'Lesson summary'], d: ['คำใหม่ กำลังจำ และแปลไปแล้วกี่บรรทัด', 'New words, learning words, lines translated.'] },
        close: { t: ['ปิดบทเรียน', 'Close'], d: ['กลับไปหน้าแรก ตำแหน่งที่ดูค้างไว้ถูกจำไว้', 'Back home; your position is remembered.'] },
      },
    },
    {
      id: 'review', title: ['ทบทวนบัตรคำ', 'Review cards'],
      hot: {
        rv: { t: ['บัตรที่ถึงเวลา', 'Cards due today'], d: ['เห็นคำกับประโยคที่เจอ กด Space ดูความหมาย แล้วให้คะแนน 1–4 ว่าจำได้แค่ไหน โปรแกรมคำนวณวันทบทวนครั้งต่อไปให้ (FSRS) กด P ฟังคลิปตอนที่เจอคำนี้', 'See the word in its sentence, Space shows the meaning, grade 1–4. The next review day is worked out for you (FSRS). P plays the clip where you met the word.'], keys: ['Space', '1', '2', '3', '4', 'P', 'V'] },
      },
    },
    {
      id: 'words', title: ['คลังคำ', 'Word bank'],
      hot: {
        list: { t: ['คำที่เก็บไว้', 'Your words'], d: ['ทุกบัตรพร้อมความหมาย ประโยค และที่มา แก้ความหมายได้ทันที ฟังเสียง หรือกลับไปที่บรรทัดในคลิป', 'Every card with meaning, sentence and source — edit the meaning, listen, or jump back to the line in the clip.'] },
        q: { t: ['ค้นหา', 'Search'], d: ['หาคำหรือความหมาย', 'Find a word or meaning.'] },
        lang: { t: ['ภาษา', 'Language'], d: ['ทั้งหมด / อังกฤษ / จีน', 'All / English / Chinese.'] },
        filter: { t: ['ตัวกรอง', 'Filter'], d: ['ถึงเวลาทบทวน · ยังไม่เคยทบทวน · เพิ่มวันนี้ · รู้แล้ว · ข้าม', 'Due · not reviewed · added today · known · skipped.'] },
        csv: { t: ['ส่งออก CSV', 'Export CSV'], d: ['เปิดใน Excel ได้ (ภาษาไทยไม่เพี้ยน)', 'Opens in Excel (Thai stays readable).'] },
        anki: { t: ['ส่งออกไป Anki', 'Export to Anki'], d: ['ไฟล์สำหรับนำเข้า Anki', 'A file to import into Anki.'] },
        count: { t: ['จำนวนคำ', 'Count'], d: ['มีกี่บัตร', 'How many cards.'] },
      },
    },
  ],

  demos: [
    {
      id: 'yt', title: ['เรียนจากคลิป YouTube', 'Learn from a YouTube clip'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'home', h: 'add', a: 'click', k: 'Ctrl+V', say: ['คัดลอกลิงก์ YouTube แล้วกด Ctrl+V ในหน้าแรก', 'Copy a YouTube link and press Ctrl+V on Home'] },
        { s: 'learn', h: 'lines', a: 'hover', say: ['ได้ซับอังกฤษพร้อมคำแปลไทยทุกบรรทัด — ไม่มีซับ? AI ในเครื่องฟังแล้วเขียนให้', 'English lines with Thai under each one — no subtitles? AI on your PC writes them'] },
        { s: 'learn', h: 'cap', a: 'click', say: ['คลิกคำที่ไม่รู้ ดูความหมายไทย คำอ่าน และกด "เก็บเป็นบัตรคำ" (S)', 'Click a word you don’t know: Thai meaning, reading, then "Keep as card" (S)'] },
        { s: 'learn', h: 'ctrl', a: 'hover', k: 'R', say: ['ฟังไม่ทัน? กด R วนบรรทัดนี้ หรือลดความเร็วเหลือ 0.75×', 'Too fast? R repeats the line, or slow down to 0.75×'] },
      ],
    },
    {
      id: 'review', title: ['ทบทวนคำวันละ 5 นาที', 'Review words, 5 minutes a day'], sub: ['ทบทวน', 'Review'],
      steps: [
        { s: 'home', h: 'top', a: 'hover', say: ['ตัวเลข "บัตรที่ต้องทบทวน" บอกว่าวันนี้มีกี่ใบ', '"Cards to review" tells you how many are due'] },
        { s: 'review', h: 'rv', a: 'key', k: 'Space', say: ['ดูคำ นึกความหมาย แล้วกด Space', 'Look at the word, think of the meaning, press Space'] },
        { s: 'review', h: 'rv', a: 'key', k: '3', say: ['ให้คะแนน 1–4 — คำที่ยากจะกลับมาเร็ว คำที่ง่ายจะเว้นนานขึ้น', 'Grade 1–4 — hard words come back sooner, easy ones later'] },
      ],
    },
    {
      id: 'dictation', title: ['ฝึกฟังแล้วพิมพ์', 'Listen and type'], sub: ['ฝึกฟัง', 'Listening'],
      steps: [
        { s: 'learn', h: 'ctrl', a: 'key', k: 'D', say: ['กด D: เล่นทีละบรรทัดแล้วหยุดรอให้พิมพ์', 'Press D: it plays one line and waits for you to type'] },
        { s: 'learn', h: 'cap', a: 'hover', say: ['Enter = ตรวจทีละคำพร้อมคะแนน คำที่ขาดเป็นสีแดง Tab = ฟังซ้ำ', 'Enter checks word by word with a score; missing words in red. Tab replays'] },
      ],
    },
    {
      id: 'progress', title: ['ดูว่าเรียนไปเท่าไรแล้ว', 'See your progress'], sub: ['สถิติ', 'Stats'],
      steps: [
        { s: 'home', h: 'heat', a: 'hover', say: ['ตารางสีบอกทุกวันที่เรียน คลิกวันไหนก็ดูได้ว่าเรียนคำอะไร', 'The heatmap shows every study day — click one to see its words'] },
        { s: 'words', h: 'list', a: 'hover', say: ['คลังคำเก็บทุกคำพร้อมประโยค ส่งออกไป Excel หรือ Anki ได้', 'The word bank keeps every word with its sentence — export to Excel or Anki'] },
      ],
    },
  ],

  feats: [
    { i: '🎬', t: ['เรียนจากสิ่งที่ชอบดู', 'Learn from what you watch'], d: ['YouTube, Bilibili, TikTok, เว็บบทความ หรือไฟล์วิดีโอในเครื่อง', 'YouTube, Bilibili, TikTok, articles or your own video files.'] },
    { i: '🇹🇭', t: ['คำแปลไทยทุกบรรทัด', 'Thai under every line'], d: ['แปลด้วย AI บนการ์ดจอในเครื่อง ไม่ส่งข้อมูลไปไหน และไม่เสียเงิน', 'Translated by AI on your own graphics card — private and free.'] },
    { i: '✨', t: ['AI ทำซับให้', 'AI writes subtitles'], d: ['คลิปไม่มีซับ AI ฟังแล้วเขียนซับอังกฤษ/จีนพร้อมเวลาให้ แก้ไขได้ ส่งออก .srt ได้', 'No subtitles? AI listens and writes timed English / Chinese lines you can edit and export.'] },
    { i: '👆', t: ['คลิกคำไหนก็รู้ความหมาย', 'Click any word'], d: ['ความหมายไทย คำอ่าน เสียงอ่าน และความหมายที่ตรงกับประโยคนั้นขึ้นก่อน', 'Thai meaning, reading, voice — the meaning used in that sentence comes first.'] },
    { i: '🧠', t: ['ทบทวนแบบฉลาด', 'Smart review'], d: ['บัตรคำแบบ FSRS จำนานขึ้นด้วยเวลาที่น้อยลง พร้อมคลิปตอนที่เจอคำ', 'FSRS cards: remember longer with less time, with the clip where you met the word.'] },
    { i: '🀄', t: ['อังกฤษและจีน', 'English and Chinese'], d: ['ภาษาจีนมีพินอินกำกับ ตัดคำให้อัตโนมัติ และบอกระดับ HSK', 'Chinese gets pinyin, automatic word splitting and HSK levels.'] },
  ],

  keys: [
    { k: 'Ctrl+V / Ctrl+L', d: ['วางลิงก์หรือข้อความเพื่อเริ่มบทเรียน', 'Paste a link or text to start a lesson'] },
    { k: 'Ctrl+O', d: ['เปิดไฟล์วิดีโอ', 'Open a video file'] },
    { k: 'Space', d: ['เล่น / หยุด · เปิดคำตอบตอนทบทวน', 'Play / pause · show the answer in review'] },
    { k: '← →', d: ['บรรทัดก่อน / ถัดไป', 'Previous / next line'] },
    { k: 'R · A · D · T', d: ['วนบรรทัด · หยุดทีละบรรทัด · ฟังแล้วพิมพ์ · คำแปลไทย', 'Repeat line · pause per line · listen and type · Thai'] },
    { k: 'S · K · X', d: ['เก็บเป็นบัตร · รู้แล้ว · ข้าม (ในกล่องคำศัพท์)', 'Keep as card · known · skip (word card)'] },
    { k: '1 – 4', d: ['ให้คะแนนบัตรตอนทบทวน', 'Grade a card in review'] },
    { k: 'Ctrl+Shift+L', d: ['ซับสดจากเสียงในคอม', 'Live subtitles from the PC’s sound'] },
  ],

  faq: [
    { q: ['เสียเงินไหม? ต้องใช้เน็ตไหม?', 'Does it cost anything? Need internet?'], a: ['ฟรีทั้งหมด การแปล AI ทำซับ และพจนานุกรมทำงานในเครื่อง ใช้เน็ตแค่ตอนเปิดคลิปหรือเว็บ', 'Free. Translation, AI subtitles and dictionaries run on your PC; internet is only for opening clips and pages.'] },
    { q: ['เครื่องต้องแรงแค่ไหน?', 'How strong a PC do I need?'], a: ['มีการ์ดจอที่รองรับ Vulkan จะเร็วที่สุด ถ้าไม่มีก็ใช้ CPU ได้แต่ช้ากว่า', 'A graphics card with Vulkan is fastest; without one it falls back to the CPU, just slower.'] },
    { q: ['คลิปไม่มีซับทำยังไง?', 'What if a clip has no subtitles?'], a: ['AI ในเครื่องจะฟังเสียงแล้วเขียนซับให้เอง บรรทัดค่อยๆ ขึ้นมาระหว่างทำ', 'AI on your PC listens and writes them; lines appear as it works.'] },
    { q: ['ย้ายคำศัพท์ไปแอปอื่นได้ไหม?', 'Can I take my words elsewhere?'], a: ['ได้ ส่งออกเป็น CSV (Excel) หรือไฟล์นำเข้า Anki ในหน้าคลังคำ', 'Yes — export CSV (Excel) or an Anki import file from the Word bank.'] },
  ],
};
})();
