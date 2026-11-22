(() => {
// Prism VoiceOpen guide. Spots match tools/capture/jobs/voiceopen.js + voglow.js (glow re-drawn on a demo desktop). Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).voiceopen = {
  screens: [
    {
      id: 'glow', title: ['กดคีย์แล้วพูด', 'Hold the key and talk'],
      hot: {
        glow: { t: ['ขอบจอเรืองแสง', 'Glowing screen edge'], d: ['กด Ctrl+Space ค้างไว้ ขอบจอทุกด้านจะเรืองแสงไล่สี ความหนาขยับตามเสียงพูด แปลว่า "กำลังฟังอยู่" (แสงนี้ไม่ติดไปในการอัดหน้าจอ)', 'Hold Ctrl+Space and every screen edge glows; its thickness follows your voice — it means "I’m listening" (it never shows up in screen recordings).'], keys: ['Ctrl+Space'] },
        cap: { t: ['ป้ายบอกสถานะ', 'Caption'], d: ['บอกว่ากำลังฟัง กำลังคิด หรือทำอะไรไปแล้ว ถ้าฟังไม่ออกจะบอกว่าได้ยินว่าอะไรและใกล้กับคำสั่งไหน', 'Shows listening, thinking or what it did; if it didn’t understand, it shows what it heard and the closest command.'], keys: ['Esc'] },
        lv: { t: ['ระดับเสียง', 'Voice level'], d: ['แท่งขยับตามเสียงพูด ถ้าไม่ขยับ = ไมค์ไม่ได้ยิน', 'Bars move with your voice — if they don’t, the mic isn’t hearing you.'] },
      },
    },
    {
      id: 'home', title: ['หน้าหลัก + คำสั่งเสียง', 'Home + voice commands'],
      hot: {
        mic: { t: ['ปุ่มไมค์ใหญ่', 'The big mic'], d: ['คลิกเพื่อพูดคำสั่งโดยไม่ต้องกดคีย์', 'Click to speak a command without the key.'] },
        key: { t: ['คีย์พูด', 'Talk key'], d: ['ค่าเริ่มต้น Ctrl+Space ใช้ได้ทุกที่ แม้หน้าต่างโปรแกรมปิดอยู่', 'Ctrl+Space by default — works anywhere, even when the window is closed.'], keys: ['Ctrl+Space'] },
        modes: { t: ['วิธีกด', 'How you press'], d: ['กดค้างหรือแตะ (ค่าเริ่มต้น): ค้างไว้ = ฟังจนกว่าจะปล่อย · แตะครั้งเดียว = ฟังจนกว่าคุณจะหยุดพูด หรือเลือกแบบใดแบบหนึ่ง', 'Hold or tap (default): hold = listen until release · tap = listen until you stop talking — or pick just one.'] },
        quick: { t: ['สวิตช์ด่วน', 'Quick switches'], d: ['คำปลุก เสียงแจ้ง และเปิดพร้อม Windows', 'Wake word, sound cues and start with Windows.'] },
        title: { t: ['สถานะ', 'Status'], d: ['บอกว่าพร้อมฟังหรือกำลังฟัง', 'Ready or listening.'] },
        last: { t: ['ผลล่าสุด', 'Last result'], d: ['คำสั่งล่าสุดที่ทำไป (โชว์ 1 ชั่วโมง)', 'The last command that ran (shown for an hour).'] },
        engine: { t: ['ตัวฟังเสียง', 'Speech engine'], d: ['whisper.cpp ทำงานในเครื่อง 100% ไม่ส่งเสียงขึ้นเน็ต โหลดเมื่อเริ่มฟังและค้างไว้ 10 นาที', 'whisper.cpp runs 100 % on your PC — no audio is sent anywhere. Loads when you talk, stays for 10 minutes.'] },
        kmic: { t: ['ไมโครโฟน', 'Microphone'], d: ['ไมค์ที่ใช้อยู่', 'The mic in use.'] },
        cmds: { t: ['การ์ดคำสั่ง', 'Command cards'], d: ['แต่ละการ์ดคือหนึ่งคำสั่ง: คำที่พูดได้ (ในเครื่องหมายคำพูด) ใช้ไปกี่ครั้ง และสวิตช์เปิด/ปิด', 'Each card is a command: the phrases you can say (in quotes), how often it’s used, and an on/off switch.'] },
        card: { t: ['ปุ่มบนการ์ด', 'Card buttons'], d: ['▶ ลองทำเลย · ✎ แก้ไข · ⧉ ทำสำเนา · 🗑 ลบ (มีปุ่มย้อนกลับ) · ป้ายไมค์ = สอนด้วยเสียงไว้กี่ครั้ง', '▶ run now · ✎ edit · ⧉ duplicate · 🗑 delete (with undo) · mic badge = voice samples taught.'] },
        search: { t: ['ค้นหาคำสั่ง', 'Search commands'], d: ['หาคำสั่งจากชื่อหรือคำที่พูด', 'Find by name or phrase.'], keys: ['Ctrl+F'] },
        add: { t: ['เพิ่มคำสั่ง', 'Add a command'], d: ['สร้างคำสั่งใหม่: ตั้งคำที่จะพูด แล้วเลือกว่าให้ทำอะไร', 'Make a new command: choose what to say and what it does.'], keys: ['Ctrl+N'] },
        talk: { t: ['พูดเลย', 'Talk now'], d: ['ปุ่มพูดบนแถบด้านบน', 'Talk button in the title bar.'] },
        dhome: { t: ['คำสั่งเสียง', 'Commands'], d: ['หน้ารวมคำสั่ง', 'All your commands.'] },
        dhist: { t: ['ประวัติ', 'History'], d: ['สิ่งที่โปรแกรมได้ยิน 80 ครั้งล่าสุด', 'The last 80 things it heard.'] },
        dset: { t: ['ตั้งค่า', 'Settings'], d: ['คีย์ ไมค์ ภาษา ความเข้มงวด แสงขอบจอ คำปลุก', 'Key, mic, language, strictness, glow, wake word.'] },
        dkeys: { t: ['คีย์ลัด', 'Shortcuts'], d: ['คีย์ลัดทั้งหมด', 'All shortcuts.'] },
        dadd: { t: ['+ เพิ่มคำสั่ง', '+ Add'], d: ['เพิ่มคำสั่งจากแถบซ้าย', 'Add a command from the dock.'] },
        theme: { t: ['ภาษา · โหมดมืด · เกี่ยวกับ', 'Language · dark mode · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด ปุ่ม ⓘ ดูเวอร์ชัน', 'Switch Thai/English and light/dark; ⓘ shows the version.'] },
      },
    },
    {
      id: 'editor', title: ['สร้าง / แก้คำสั่ง', 'Make / edit a command'],
      hot: {
        left: { t: ['ชื่อ · คำที่พูด · สอนด้วยเสียง', 'Name · phrases · teach by voice'], d: ['ใส่คำที่จะพูดได้หลายแบบ (พิมพ์แล้วกด Enter) ไม่ต้องพูดเป๊ะ โปรแกรมเข้าใจแม้พูดยาวกว่า เช่น "ช่วยเปิดยูทูบหน่อยครับ" · "สอนด้วยเสียง" ให้พูด 2–3 ครั้ง เพื่อให้จำเสียงคุณได้แม่นแม้สำเนียงแปลก', 'Add several phrases (type, Enter). You don’t need to be exact — "could you open YouTube please" still works. "Teach by voice": say it 2–3 times so it recognises your accent.'] },
        right: { t: ['ให้ทำอะไร', 'What it does'], d: ['ทำได้หลายอย่างตามลำดับ: เปิดโปรแกรม ลิงก์ ค้นหา โฟลเดอร์ ไฟล์ ควบคุมเครื่อง (เสียง ล็อกจอ แคปจอ) แอป Prism พิมพ์ข้อความ กดคีย์ และรอ', 'Several steps in order: open an app, link, search, folder, file, PC control (volume, lock, snip), a Prism app, type text, press keys, wait.'], tip: ['ลากโปรแกรม ไฟล์ หรือลิงก์มาวางในหน้าต่างนี้ได้เลย', 'Drag a program, file or link into this window'] },
        try: { t: ['ลองทำ', 'Try it'], d: ['ทดสอบคำสั่งก่อนบันทึก', 'Test before saving.'] },
        save: { t: ['บันทึก', 'Save'], d: ['บันทึกคำสั่ง', 'Save the command.'], keys: ['Ctrl+S', 'Ctrl+Enter'] },
        head: { t: ['ตัวแก้คำสั่ง', 'Command editor'], d: ['เปิดได้จากปุ่ม ✎ หรือดับเบิลคลิกการ์ด · Esc = ปิด (จะถามก่อนถ้ายังไม่ได้บันทึก)', 'Open with ✎ or double-click a card · Esc closes (asks first if unsaved).'], keys: ['Esc'] },
      },
    },
    {
      id: 'glowok', title: ['เข้าใจแล้ว!', 'Understood!'],
      hot: {
        glow: { t: ['แสงเขียว', 'Green sweep'], d: ['เข้าใจคำสั่ง = ขอบจอวิ่งเป็นสีเขียว แล้วสิ่งที่ตั้งไว้ก็ทำงาน (ไม่เข้าใจ = สีส้ม)', 'Understood = a green sweep, then the command runs (not understood = amber).'] },
        cap: { t: ['ผลลัพธ์', 'Result'], d: ['บอกชื่อคำสั่งที่ทำ และได้ยินว่าอะไร ใช้เวลาประมาณ 1.5 วินาทีหลังหยุดพูด', 'Shows the command and what it heard — about 1.5 s after you stop talking.'] },
      },
    },
    {
      id: 'history', title: ['ประวัติ', 'History'],
      hot: {
        hist: { t: ['สิ่งที่ได้ยิน', 'What it heard'], d: ['ทุกครั้งที่พูด: ได้ยินว่าอะไร ทำคำสั่งไหน ใช้เวลากี่วินาที', 'Every time you talk: what it heard, which command ran, how long it took.'] },
        row: { t: ['ทำซ้ำ', 'Run again'], d: ['กด ▶ เพื่อทำคำสั่งเดิมอีกครั้ง', 'Press ▶ to run it again.'] },
        fail: { t: ['ฟังไม่ออก → สอนเลย', 'Misheard → teach it'], d: ['ถ้าโปรแกรมได้ยินเพี้ยน กด "เพิ่มเป็นคำของคำสั่ง…" แล้วเลือกคำสั่งที่ตั้งใจ ครั้งหน้าจะเข้าใจทันที', 'If it misheard, press "Add as a phrase of…" and pick the command you meant — next time it understands.'] },
        clear: { t: ['ล้างประวัติ', 'Clear'], d: ['ลบประวัติทั้งหมด', 'Delete the history.'] },
      },
    },
    {
      id: 'settings', title: ['ตั้งค่า', 'Settings'],
      hot: {
        key: { t: ['คีย์และวิธีกด', 'Key & mode'], d: ['เปลี่ยนคีย์พูด วิธีกด และฟังนานสุดกี่วินาที', 'Change the talk key, press mode and max listening time.'] },
        mic: { t: ['ไมโครโฟน', 'Microphone'], d: ['เลือกไมค์และความดัง', 'Pick the mic and its gain.'] },
        mictest: { t: ['ทดสอบไมค์', 'Mic test'], d: ['พูดแล้วดูแถบระดับเสียง', 'Talk and watch the meter.'] },
        engine: { t: ['ภาษาและตัวฟังเสียง', 'Language & engine'], d: ['ไทย / อังกฤษ / อัตโนมัติ และให้ค้างตัวฟังไว้ 2 นาที / 10 นาที / ตลอด (เร็วขึ้นแต่ใช้แรมมากขึ้น)', 'Thai / English / auto, and keep the engine loaded 2 min / 10 min / always (faster, more RAM).'] },
        warm: { t: ['โหลดตอนนี้', 'Load now'], d: ['โหลดตัวฟังเสียงล่วงหน้า คำสั่งแรกจะตอบเร็วขึ้น', 'Preload the engine so the first command is quicker.'] },
        c1: { t: ['การพูดคำสั่ง', 'Talking'], d: ['คีย์ วิธีกด และความเข้มงวด (ค่าเริ่มต้น 72%) — ต่ำไปจะทำคำสั่งผิดบ่อย', 'Key, mode and strictness (72 % default) — too low runs wrong commands.'] },
        c2: { t: ['ไมโครโฟน', 'Microphone'], d: ['เลือกไมค์ ความดัง และทดสอบ', 'Mic, gain and test.'] },
        c3: { t: ['ตัวฟังเสียง', 'Speech engine'], d: ['ภาษา และความแม่นของการ "สอนด้วยเสียง"', 'Language and teach-by-voice tolerance.'] },
        c4: { t: ['แสงขอบจอ', 'Screen glow'], d: ['สี (Prism / ออโรร่า / พระอาทิตย์ตก / ทะเล / ขาว) ขนาด และทุกจอหรือเฉพาะจอที่มีเมาส์', 'Colour (Prism, aurora, sunset, ocean, white), size, all monitors or just the one with the mouse.'] },
      },
    },
    {
      id: 'settings2', title: ['ตั้งค่า (ต่อ)', 'Settings (more)'],
      hot: {
        glow: { t: ['ตัวอย่างแสง', 'Glow preview'], d: ['ดูตัวอย่างสีแสงที่เลือก', 'Preview the chosen glow.'] },
        demo: { t: ['ดูของจริงบนจอ', 'Show it for real'], d: ['ให้ขอบจอเรืองแสงจริง ๆ สักครู่', 'Light up the real screen edges for a moment.'] },
        wake: { t: ['คำปลุก', 'Wake word'], d: ['สอนคำปลุก 3 ครั้ง แล้วพูดคำนั้นแทนการกดคีย์ได้ (ปิดไว้เป็นค่าเริ่มต้น เพราะ Windows จะแสดงว่าใช้ไมค์ตลอด)', 'Teach a wake word 3 times and say it instead of pressing the key (off by default — Windows shows the mic in use the whole time).'] },
        c5: { t: ['คำปลุก', 'Wake word'], d: ['ปรับความไวของคำปลุก', 'Wake word sensitivity.'] },
        c6: { t: ['เสียงและการเริ่มต้น', 'Sounds & startup'], d: ['เสียงแจ้ง ป้ายบอกสถานะ เปิดพร้อม Windows และคืนคำสั่งตัวอย่าง', 'Sound cues, caption, start with Windows and restore starter commands.'] },
      },
    },
    {
      id: 'keys', title: ['คีย์ลัด', 'Shortcuts'],
      hot: {
        global: { t: ['คีย์ลัดทั้งเครื่อง', 'Global keys'], d: ['ใช้ได้ทุกที่: พูด เปิดหน้าต่าง ทำคำสั่งล่าสุดซ้ำ', 'Work anywhere: talk, open the window, repeat the last command.'] },
        local: { t: ['คีย์ลัดในโปรแกรม', 'In-app keys'], d: ['ค้นหา เพิ่ม บันทึก และอื่น ๆ', 'Search, add, save and more.'] },
        reset: { t: ['คืนค่าเดิม', 'Reset'], d: ['กลับไปใช้คีย์ลัดเริ่มต้น', 'Back to defaults.'] },
      },
    },
  ],

  demos: [
    {
      id: 'first', title: ['พูดเปิด YouTube ครั้งแรก', 'Open YouTube by voice'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'home', h: 'key', a: 'hover', say: ['คีย์พูดคือ Ctrl+Space (เปลี่ยนได้)', 'The talk key is Ctrl+Space (you can change it)'] },
        { s: 'glow', h: 'glow', a: 'key', k: 'Ctrl+Space', say: ['กด Ctrl+Space ค้างไว้ — ขอบจอเรืองแสง แปลว่ากำลังฟัง', 'Hold Ctrl+Space — the screen edge glows: it’s listening'] },
        { s: 'glow', h: 'cap', a: 'hover', say: ['พูด "เปิดยูทูป" แล้วปล่อยปุ่ม', 'Say "open YouTube" and let go'] },
        { s: 'glowok', h: 'glow', a: 'hover', say: ['ขอบจอเป็นสีเขียว = เข้าใจแล้ว YouTube เปิดขึ้นมา', 'Green edge = understood — YouTube opens'] },
        { s: 'glowok', h: 'cap', a: 'hover', say: ['พูดยาวกว่านี้ก็ได้ เช่น "ช่วยเปิดยูทูบหน่อยครับ" ก็เข้าใจ', 'Longer is fine too — "could you open YouTube please" works'] },
      ],
    },
    {
      id: 'search', title: ['ค้นหาด้วยเสียง', 'Search by voice'], sub: ['ค้นหา', 'Search'],
      steps: [
        { s: 'home', h: 'cmds', a: 'hover', say: ['คำสั่ง "ค้นหาใน YouTube" มีคำว่า "หายูทูป"', 'The "Search YouTube" command uses the phrase "หายูทูป" (search YouTube)'] },
        { s: 'glow', h: 'glow', a: 'key', k: 'Ctrl+Space', say: ['กดค้างแล้วพูด "หายูทูป แมวน่ารัก"', 'Hold and say "search YouTube cute cats"'] },
        { s: 'history', h: 'row', a: 'hover', say: ['คำที่พูดต่อท้ายกลายเป็นคำค้นให้เอง', 'Whatever follows becomes the search words'] },
      ],
    },
    {
      id: 'make', title: ['สร้างคำสั่ง "โหมดทำงาน" (หลายอย่างในคำเดียว)', 'Make a "work mode" command (many things, one word)'], sub: ['สร้างเอง', 'Build your own'],
      steps: [
        { s: 'home', h: 'add', a: 'click', k: 'Ctrl+N', say: ['กด "เพิ่มคำสั่ง"', 'Click "Add command"'], then: 'editor' },
        { s: 'editor', h: 'left', a: 'click', say: ['ตั้งชื่อ และใส่คำที่จะพูด เช่น "เริ่มทำงาน" (กด Enter)', 'Name it and add a phrase, e.g. "start work" (Enter)'] },
        { s: 'editor', h: 'right', a: 'click', say: ['เพิ่มสิ่งที่ให้ทำ: เปิด VS Code → เปิดปฏิทิน → ปิดเสียง (ทำตามลำดับ)', 'Add steps: open VS Code → open the calendar → mute (in order)'] },
        { s: 'editor', h: 'try', a: 'click', say: ['กด "ลองทำ" เพื่อทดสอบ', 'Press "Try it" to test'] },
        { s: 'editor', h: 'save', a: 'click', k: 'Ctrl+S', say: ['บันทึก แล้วพูด "เริ่มทำงาน" ได้เลย', 'Save — now just say "start work"'] },
      ],
    },
    {
      id: 'fix', title: ['โปรแกรมฟังเพี้ยน แก้ยังไง', 'It misheard me — fix it'], sub: ['แก้ปัญหา', 'Troubleshoot'],
      steps: [
        { s: 'history', h: 'hist', a: 'hover', say: ['เปิด "ประวัติ" ดูว่าโปรแกรมได้ยินว่าอะไร', 'Open "History" to see what it heard'] },
        { s: 'history', h: 'fail', a: 'click', say: ['แถวที่ไม่เข้าใจ กด "เพิ่มเป็นคำของคำสั่ง…" แล้วเลือกคำสั่งที่ตั้งใจ', 'On the failed row press "Add as a phrase of…" and pick the command you meant'] },
        { s: 'editor', h: 'left', a: 'click', say: ['หรือ "สอนด้วยเสียง" พูด 2–3 ครั้ง ให้จำสำเนียงคุณได้', 'Or "Teach by voice": say it 2–3 times so it learns your accent'] },
      ],
    },
  ],

  feats: [
    { i: '🔒', t: ['ออฟไลน์ 100%', '100 % offline'], d: ['ฟังเสียงด้วย whisper.cpp ในเครื่อง เสียงของคุณไม่ออกไปไหน', 'whisper.cpp on your PC — your voice never leaves it.'] },
    { i: '🇹🇭', t: ['เข้าใจภาษาไทยแม้ไม่เป๊ะ', 'Forgiving Thai'], d: ['ไม่สนวรรณยุกต์ ตัวสะกดเสียงเหมือน และคำต่อท้าย พูดเป็นประโยคยาวก็ยังเจอคำสั่ง', 'Ignores tone marks, sound-alike spellings and extra words — full sentences still match.'] },
    { i: '🗣', t: ['สอนด้วยเสียงตัวเอง', 'Learns your voice'], d: ['พูด 2–3 ครั้ง แล้วคำที่ใกล้มากจะทำทันทีโดยไม่ต้องรอ', 'Say it 2–3 times; very close matches then run instantly.'] },
    { i: '✨', t: ['ขอบจอเรืองแสง', 'Glowing edges'], d: ['รู้ทันทีว่ากำลังฟัง คิด เข้าใจ หรือไม่เข้าใจ และไม่ติดไปในการอัดจอ', 'See at once if it’s listening, thinking, done or confused — never in screen recordings.'] },
    { i: '🧩', t: ['คำเดียวทำได้หลายอย่าง', 'One phrase, many actions'], d: ['เปิดโปรแกรม เว็บ โฟลเดอร์ ปรับเสียง พิมพ์ กดคีย์ ต่อกันเป็นชุด', 'Chain apps, sites, folders, volume, typing and key presses.'] },
    { i: '🎬', t: ['สั่งแอป Prism อื่นได้', 'Drives other Prism apps'], d: ['สั่ง Prism Rec ให้อัด/บันทึกย้อนหลัง หรือเปิด Size/Cam/Player/Studio', 'Tell Prism Rec to record or save a replay, or open Size/Cam/Player/Studio.'] },
  ],

  keys: [
    { k: 'Ctrl+Space', d: ['กดค้าง = พูด / แตะ = พูดจนหยุด', 'Hold = talk / tap = talk until you stop'] },
    { k: 'Esc', d: ['ยกเลิกตอนกำลังฟัง', 'Cancel while listening'] },
    { k: 'Ctrl+Alt+O', d: ['เปิดหน้าต่างโปรแกรม', 'Open the window'] },
    { k: 'Ctrl+N', d: ['เพิ่มคำสั่ง', 'Add a command'] },
    { k: 'Ctrl+F', d: ['ค้นหาคำสั่ง', 'Search commands'] },
    { k: 'Ctrl+S / Ctrl+Enter', d: ['บันทึกคำสั่ง (ในตัวแก้)', 'Save (in the editor)'] },
    { k: 'Ctrl+V', d: ['วางลิงก์ลงตัวแก้', 'Paste a link into the editor'] },
  ],

  faq: [
    { q: ['เสียงของฉันถูกส่งขึ้นอินเทอร์เน็ตไหม?', 'Is my voice uploaded?'], a: ['ไม่ ตัวฟังเสียงทำงานในเครื่องทั้งหมด ใช้ได้แม้ไม่มีเน็ต', 'No. Speech recognition runs entirely on your PC and works offline.'] },
    { q: ['พูดแล้วไม่ทำอะไรเลย', 'Nothing happens when I talk'], a: ['ดูแถบระดับเสียงตอนพูด ถ้าไม่ขยับ ให้เลือกไมค์ใหม่ในตั้งค่าและกดทดสอบไมค์ ถ้าขยับแต่ไม่เข้าใจ เปิดประวัติแล้วกด "เพิ่มเป็นคำของคำสั่ง…"', 'Watch the level bars — if they don’t move, pick another mic in Settings and test it. If they move but it doesn’t understand, open History and use "Add as a phrase of…".'] },
    { q: ['ต้องเปิดหน้าต่างไว้ไหม?', 'Must the window stay open?'], a: ['ไม่ต้อง กด X แล้วโปรแกรมอยู่ในถาดข้างนาฬิกา คีย์พูดยังใช้ได้ ตั้งให้เปิดพร้อม Windows ได้ด้วย', 'No — X hides it in the tray and the talk key keeps working. It can start with Windows too.'] },
    { q: ['ตอบช้าแค่ไหน?', 'How fast is it?'], a: ['ประมาณ 1.5 วินาทีหลังหยุดพูดบนเครื่องทั่วไป และคำที่สอนด้วยเสียงไว้ทำงานแทบทันที', 'About 1.5 s after you stop talking on a typical PC; voice-taught phrases run almost instantly.'] },
  ],
};
})();
