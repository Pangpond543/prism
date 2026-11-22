(() => {
// Prism Code guide. Spots match tools/capture/jobs/code.js. Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).code = {
  screens: [
    {
      id: 'code', title: ['เขียนโค้ด + ดูทีละขั้น', 'Code + step by step'],
      hot: {
        editor: { t: ['ช่องเขียนโค้ด', 'The editor'], d: ['สีโค้ดเหมือน VS Code มีเติมคำอัตโนมัติ และเอาเมาส์ชี้คำสั่งของ Python เพื่ออ่านคำอธิบายภาษาไทยได้ ตอนดูทีละขั้น บรรทัดที่กำลังทำงานจะเป็นสีเหลือง มีป้ายบอกค่าเหนือชื่อตัวแปร และค่าลอยไปหาตัวแปรที่รับ', 'VS Code colours, autocomplete, and Thai help when you hover a Python built-in. While stepping, the running line is yellow, values show above the names and float into the variable that receives them.'], keys: ['Ctrl+/', 'Alt+↑ / Alt+↓', 'Ctrl+D', 'Ctrl+= / Ctrl+-'] },
        narr: { t: ['คำบรรยายทีละขั้น', 'Step narration'], d: ['บอกเป็นภาษาไทยว่าบรรทัดนี้ทำอะไร เช่น "ตรวจเงื่อนไข amount < 1000 → False ข้ามไปดูทางถัดไป" พร้อมแถบแทนค่าให้เห็นการคำนวณทีละขั้น', 'Says in plain words what this line does, e.g. "check amount < 1000 → False, go to the next branch", with a strip that substitutes the values step by step.'] },
        vzbar: { t: ['แถบควบคุมการเล่น', 'Playback bar'], d: ['เล่น/หยุด ก้าวไปข้างหน้า ถอยหลัง ลากแถบเลื่อนไปขั้นไหนก็ได้ และปรับความเร็ว 0.35×–4×', 'Play/pause, step forward or back, drag the slider to any step and set the speed 0.35×–4×.'], keys: ['F7 / Space', 'F10 / →', 'Shift+F10 / ←'] },
        run: { t: ['รัน', 'Run'], d: ['รันโค้ดทันที ผลออกที่ Terminal ด้านล่าง ถ้าโปรแกรมใช้ input() ก็พิมพ์คำตอบลงใน Terminal ได้เลย', 'Run the code now. Output goes to the Terminal below; if it uses input(), type your answer right there.'], keys: ['F5', 'Shift+F5'] },
        viz: { t: ['ดูทีละขั้น', 'Step by step'], d: ['หัวใจของ Prism Code: รันแล้วดูค่าวิ่งทีละบรรทัด ช้า ๆ ประมาณ 2.5 วินาทีต่อบรรทัด จนเข้าใจว่าโปรแกรมคิดยังไง', 'The heart of Prism Code: run it and watch values move line by line, about 2.5 s per line, until you see how the program thinks.'], keys: ['F6'] },
        check: { t: ['ตรวจคำตอบ', 'Check answer'], d: ['ทดสอบกับเคสทั้งหมด รวมค่าขอบที่ข้อสอบชอบออก แล้วบอกว่าผิดตรงไหน ทีละตัวอักษร', 'Tests every case including the tricky edge values exams love, and shows exactly which characters differ.'], keys: ['Ctrl+Enter'] },
        predict: { t: ['ทายก่อน', 'Predict first'], d: ['เปิดแล้วก่อนเห็นผล โปรแกรมจะถามว่า "คิดว่าจะพิมพ์อะไร?" ฝึกอ่านโค้ดให้แม่น', 'When on, before showing output it asks "what will it print?" — trains you to read code.'] },
        files: { t: ['เปิด / บันทึก .py', 'Open / save .py'], d: ['เปิดไฟล์ .py หรือ .ipynb จากเครื่อง (ไฟล์ .txt ในโฟลเดอร์เดียวกันมาด้วย) และบันทึกเป็น .py', 'Open .py or .ipynb files (the .txt files beside them come too) and save as .py.'], keys: ['Ctrl+O', 'Ctrl+S'] },
        layout: { t: ['จัดหน้าจอ', 'Layout'], d: ['ซ่อนแผงขวา หรือขยายช่องโค้ดให้กว้างสุด', 'Hide the right panel or widen the code area.'], keys: ['Ctrl+J', 'Ctrl+B', 'Ctrl+Alt+B'] },
        tabs: { t: ['แท็บไฟล์', 'File tabs'], d: ['เปิดหลายไฟล์/หลายข้อพร้อมกันได้เหมือน VS Code แท็บที่ผ่านแล้วจะมีเครื่องหมายถูก', 'Several files or problems open at once like VS Code; passed ones get a tick.'] },
        console: { t: ['Terminal', 'Terminal'], d: ['ผลลัพธ์ของโปรแกรม และถ้ามี error จะอธิบายเป็นภาษาไทยว่าเกิดอะไร เพราะอะไร ควรลองแก้ยังไง', 'Program output — and when there is an error, a Thai explanation of what happened, why, and what to try.'] },
        prob: { t: ['โจทย์', 'The problem'], d: ['อ่านโจทย์ ตัวอย่างผลลัพธ์ และปุ่ม "หาจุดผิด" / "ดูเฉลย" (เฉลยดูทีละขั้นได้ด้วย)', 'Read the task and sample output, plus "Find the bug" and "Show answer" (which you can also watch step by step).'], keys: ['Ctrl+B'] },
        values: { t: ['สรุปค่า', 'Values panel'], d: ['ตัวแปรทุกตัวเป็นกล่องแก้ว เรียกฟังก์ชันแล้วการ์ดใหม่เลื่อนเข้ามา ค่าที่ return บินกลับไปหาผู้เรียก List เห็นเป็นช่อง ๆ พร้อมเลขตำแหน่ง', 'Every variable is a glass box; calling a function slides a card in; the return value flies back; lists show as numbered cells.'] },
        rtabs: { t: ['แท็บด้านขวา', 'Right tabs'], d: ['สรุปค่า · ไฟล์ (ที่ open() อ่านเขียนได้) · ตรวจคำตอบ · คลังไฟล์ของคุณ', 'Values · Files (what open() reads and writes) · Check · your Library'], keys: ['Ctrl+Shift+E'] },
        py: { t: ['สถานะ Python', 'Python status'], d: ['Python 3.14 ทำงานในโปรแกรมเลย ไม่ต้องติดตั้ง Python เพิ่ม ใช้ได้ทั้งตอนไม่มีเน็ต', 'Python 3.14 runs inside the app — nothing else to install, works offline.'] },
        dockcode: { t: ['เขียนโค้ด', 'Code'], d: ['หน้าหลักสำหรับเขียนและรันโค้ด', 'The main page for writing and running code.'] },
        docklib: { t: ['โจทย์ / คลัง', 'Problems / library'], d: ['ชุดโจทย์ (BU Final) สร้างโจทย์ใหม่แนวข้อสอบ และไฟล์ทั้งหมดของคุณ', 'Problem sets (BU Final), generated exam-style problems, and all your files.'] },
        dockquiz: { t: ['ทายก่อนรัน', 'Predict quiz'], d: ['เกมอ่านโค้ดแล้วทายผล นับคะแนนและสตรีค', 'Read code, guess the output, keep your streak.'] },
        dockkeys: { t: ['คีย์ลัด', 'Shortcuts'], d: ['รายการคีย์ลัดทั้งหมด', 'Every shortcut.'], keys: ['F1'] },
        open: { t: ['เปิดไฟล์', 'Open a file'], d: ['เปิด .py หรือ .ipynb — ไฟล์ .ipynb จะกลายเป็นชุดโจทย์ให้อัตโนมัติ', 'Open .py or .ipynb — a notebook becomes a problem set by itself.'], keys: ['Ctrl+O'] },
      },
    },
    {
      id: 'error', title: ['อธิบาย error ภาษาไทย', 'Errors explained'],
      hot: {
        editor: { t: ['บรรทัดที่ผิด', 'The broken line'], d: ['มีจุดแดงและเส้นหยักใต้บรรทัดที่ผิด ส่วนบรรทัดที่รันผ่านไปแล้วจะมีค่าจาง ๆ ต่อท้ายให้เห็น', 'A red dot and squiggle mark the broken line; lines that already ran show their values faintly.'] },
        console: { t: ['คำอธิบาย error', 'The explanation'], d: ['แทนข้อความภาษาอังกฤษยาก ๆ ด้วย: เกิดอะไรขึ้น · ทำไม · ลองแก้ยังไง และปุ่ม "ไปที่บรรทัด"', 'Instead of a scary English message: what happened · why · what to try, plus a "go to line" button.'] },
        run: { t: ['รันใหม่', 'Run again'], d: ['แก้แล้วกดรันใหม่ได้ทันที', 'Fix it and run again right away.'], keys: ['F5'] },
      },
    },
    {
      id: 'check', title: ['ตรวจคำตอบ', 'Checking answers'],
      hot: {
        result: { t: ['ผลตรวจ', 'Results'], d: ['ทุกเคสแสดงชื่อและค่าที่ใช้ทดสอบ ถ้าผิดจะเทียบบรรทัดต่อบรรทัด ช่องว่างแสดงเป็น · และมีปุ่ม "ดูเคสนี้ทีละขั้น"', 'Every case shows its name and input. A failing case is compared line by line (spaces shown as ·) with a "watch this case step by step" button.'] },
        badge: { t: ['คะแนน', 'Score'], d: ['ผ่านกี่เคสจากทั้งหมด เก็บความคืบหน้าแต่ละข้อไว้ให้', 'How many cases passed; progress is kept per problem.'] },
        check: { t: ['ตรวจคำตอบ', 'Check answer'], d: ['กดเมื่อไหร่ก็ได้ ไม่เสียคะแนน', 'Press as often as you like — nothing is lost.'], keys: ['Ctrl+Enter'] },
        prob: { t: ['ผ่านแล้ว', 'Passed'], d: ['ข้อที่ผ่านจะมีเครื่องหมายถูกที่โจทย์และแท็บ', 'Passed problems get a tick on the problem and its tab.'] },
      },
    },
    {
      id: 'library', title: ['โจทย์ / คลัง', 'Problems / library'],
      hot: {
        ltabs: { t: ['โจทย์ · ไฟล์ของฉัน', 'Problems · my files'], d: ['สลับระหว่างชุดโจทย์ กับไฟล์ .py ทั้งหมดที่คุณเขียนหรือเปิด (จัดโฟลเดอร์ได้)', 'Switch between problem sets and every .py you wrote or opened (with folders).'] },
        packs: { t: ['ชุดโจทย์', 'Problem sets'], d: ['BU Final 4 ข้อจากสมุดทบทวน มีเคสซ่อน เฉลย และแบบฝึก "หาจุดผิด" — กด "สร้างโจทย์ใหม่" เพื่อได้โจทย์แนวข้อสอบพร้อมเฉลยไม่จำกัด', 'BU Final: 4 problems with hidden tests, answers and "find the bug" drills — "Generate" gives unlimited new exam-style problems with answers.'] },
        open: { t: ['เปิด .ipynb เป็นชุดโจทย์', 'Open .ipynb as a set'], d: ['เปิดไฟล์ Jupyter ของอาจารย์ แต่ละหัวข้อ "ข้อที่" จะกลายเป็นโจทย์ พร้อมไฟล์ตัวอย่างและการตรวจจากผลตัวอย่าง', 'Open a teacher’s Jupyter notebook: each "Problem" heading becomes a problem, with sample files and checks from the sample output.'] },
        dock: { t: ['หน้าโจทย์ / คลัง', 'Problems page'], d: ['กลับมาหน้านี้ได้จากแถบซ้ายเสมอ', 'Always one click away in the left bar.'] },
      },
    },
    {
      id: 'quiz', title: ['ทายก่อนรัน', 'Predict quiz'],
      hot: {
        quiz: { t: ['โจทย์ทาย', 'The puzzle'], d: ['อ่านโค้ดสั้น ๆ แล้วพิมพ์ว่าคิดว่าจะแสดงอะไร กด Ctrl+Enter ตรวจ ถ้าผิดกด "ดูทีละขั้น" เพื่อดูว่าทำไม', 'Read a short program, type what you think it prints, Ctrl+Enter to check — wrong? "Step by step" shows why.'], keys: ['Ctrl+Enter'] },
        topics: { t: ['เลือกหัวข้อ', 'Topics'], d: ['ฝึกเฉพาะเรื่องที่ยังไม่แม่น: ตัวแปร if ลูป ฟังก์ชัน List f-string split เขียนไฟล์ (17 แบบ สุ่มใหม่ทุกครั้ง)', 'Practise just what you need: variables, if, loops, functions, lists, f-strings, split, files (17 kinds, new every time).'] },
        score: { t: ['คะแนนและสตรีค', 'Score & streak'], d: ['นับข้อที่ถูก ถูกติดกัน และสถิติดีที่สุด', 'Counts right answers, your streak and best streak.'] },
      },
    },
  ],

  demos: [
    {
      id: 'watch', title: ['ดูโค้ดทำงานทีละบรรทัด', 'Watch code run line by line'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'code', h: 'editor', a: 'click', say: ['เขียน (หรือวาง) โค้ดลงในช่องนี้', 'Write (or paste) code here'] },
        { s: 'code', h: 'viz', a: 'click', k: 'F6', say: ['กด "ดูทีละขั้น" (F6)', 'Click "Step by step" (F6)'] },
        { s: 'code', h: 'narr', a: 'hover', say: ['อ่านคำบรรยาย: บรรทัดนี้กำลังทำอะไร และเงื่อนไขเป็นจริงหรือเท็จ', 'Read the narration: what this line does, and whether the condition is true'] },
        { s: 'code', h: 'values', a: 'hover', say: ['ดูค่าในกล่องแก้วทางขวา ค่าจะลอยไปหาตัวแปรที่รับ', 'Watch the glass boxes on the right — values float into the variable that receives them'] },
        { s: 'code', h: 'vzbar', a: 'click', k: '←', say: ['ไม่ทัน? หยุด ถอยหลังทีละขั้น หรือลดความเร็วได้', 'Too fast? Pause, step back or slow down'] },
      ],
    },
    {
      id: 'exam', title: ['ฝึกโจทย์แนวข้อสอบแล้วตรวจคำตอบ', 'Practise an exam problem and check it'], sub: ['ฝึกสอบ', 'Exam practice'],
      steps: [
        { s: 'code', h: 'docklib', a: 'click', say: ['ไปที่ "โจทย์ / คลัง"', 'Open "Problems / library"'], then: 'library' },
        { s: 'library', h: 'packs', a: 'click', say: ['เลือกข้อจาก BU Final หรือกด "สร้างโจทย์ใหม่"', 'Pick a BU Final problem or press "Generate"'], then: 'code' },
        { s: 'code', h: 'prob', a: 'hover', say: ['อ่านโจทย์และตัวอย่างผลลัพธ์', 'Read the task and the sample output'] },
        { s: 'code', h: 'editor', a: 'click', say: ['เขียนคำตอบ', 'Write your answer'] },
        { s: 'code', h: 'check', a: 'click', k: 'Ctrl+Enter', say: ['กด "ตรวจคำตอบ" (Ctrl+Enter)', 'Press "Check answer" (Ctrl+Enter)'], then: 'check' },
        { s: 'check', h: 'result', a: 'hover', say: ['ดูว่าผ่านกี่เคส เคสไหนผิด ผิดตัวอักษรไหน', 'See which cases pass and exactly which characters differ'] },
      ],
    },
    {
      id: 'error', title: ['เจอ error แล้วไม่รู้ว่าผิดอะไร', 'Got an error and don’t know why'], sub: ['แก้บั๊ก', 'Debugging'],
      steps: [
        { s: 'error', h: 'run', a: 'click', k: 'F5', say: ['กดรัน', 'Press Run'] },
        { s: 'error', h: 'console', a: 'hover', say: ['อ่านคำอธิบายภาษาไทย: เกิดอะไร · ทำไม · ลองแก้ยังไง', 'Read the Thai explanation: what · why · what to try'] },
        { s: 'error', h: 'editor', a: 'click', say: ['กด "ไปที่บรรทัด" แล้วแก้ตรงจุดแดง (ตัวอย่างนี้พิมพ์ชื่อตัวแปรผิด nmae → name)', 'Click "go to line" and fix the red spot (here a typo: nmae → name)'] },
        { s: 'error', h: 'run', a: 'click', say: ['รันใหม่ — ผ่าน!', 'Run again — fixed!'] },
      ],
    },
    {
      id: 'quiz', title: ['ฝึกอ่านโค้ดด้วยเกมทายผล', 'Train code reading with the quiz'], sub: ['เกม', 'Game'],
      steps: [
        { s: 'code', h: 'dockquiz', a: 'click', say: ['เปิด "ทายก่อนรัน"', 'Open "Predict quiz"'], then: 'quiz' },
        { s: 'quiz', h: 'topics', a: 'click', say: ['เลือกหัวข้อที่อยากฝึก เช่น "ลูป"', 'Pick a topic, e.g. "loops"'] },
        { s: 'quiz', h: 'quiz', a: 'click', k: 'Ctrl+Enter', say: ['พิมพ์คำตอบที่คิดว่าโปรแกรมจะแสดง แล้วกดตรวจ', 'Type what you think it prints and check'] },
        { s: 'quiz', h: 'score', a: 'hover', say: ['เก็บสตรีคให้ได้ยาว ๆ!', 'Keep the streak going!'] },
      ],
    },
  ],

  feats: [
    { i: '👀', t: ['เห็นค่าวิ่งกับตา', 'See values move'], d: ['ค่าลอยจากตัวแปรไปตัวแปร ฟังก์ชันเลื่อนเข้าออกเป็นการ์ด ไฟล์เขียนทีละบรรทัด', 'Values float between variables, calls slide in as cards, files fill line by line.'] },
    { i: '🇹🇭', t: ['อธิบายภาษาไทย', 'Explained in Thai'], d: ['คำบรรยายทุกขั้นและคำอธิบาย error เป็นภาษาไทย อ่านแล้วเข้าใจทันที', 'Every step and every error is explained in plain Thai.'] },
    { i: '✅', t: ['ตรวจละเอียดเหมือนจริง', 'Checks like a real grader'], d: ['เคสซ่อนรวมค่าขอบ เทียบผลบนจอและไฟล์ทีละตัวอักษร ชี้ว่าลืม close() ด้วย', 'Hidden edge cases, screen output and files compared character by character, even a forgotten close().'] },
    { i: '♾️', t: ['โจทย์ไม่จำกัด', 'Endless problems'], d: ['สร้างโจทย์แนวข้อสอบใหม่ทุกครั้ง พร้อมเฉลยและเทสต์', 'Generates fresh exam-style problems with answers and tests every time.'] },
    { i: '📓', t: ['เปิด .ipynb ได้', 'Opens notebooks'], d: ['ไฟล์ Jupyter ของอาจารย์กลายเป็นชุดโจทย์ให้อัตโนมัติ', 'A teacher’s Jupyter notebook becomes a problem set automatically.'] },
    { i: '🧰', t: ['หน้าตาแบบ VS Code', 'Feels like VS Code'], d: ['สีโค้ด เติมคำ multi-cursor แท็บ และคีย์ลัดเหมือนของจริง ไปใช้ VS Code ต่อได้ไม่งง', 'Same colours, autocomplete, multi-cursor, tabs and shortcuts — moving to VS Code later feels natural.'] },
  ],

  keys: [
    { k: 'F5', d: ['รัน', 'Run'] }, { k: 'Shift+F5', d: ['หยุด', 'Stop'] }, { k: 'F6', d: ['ดูทีละขั้น', 'Step by step'] },
    { k: 'F7 / Space', d: ['เล่น / หยุดการดูทีละขั้น', 'Play / pause stepping'] }, { k: 'F10 / →', d: ['ก้าวถัดไป', 'Next step'] }, { k: 'Shift+F10 / ←', d: ['ถอยหลัง', 'Step back'] },
    { k: 'Ctrl+Enter', d: ['ตรวจคำตอบ', 'Check answer'] }, { k: 'Ctrl+S', d: ['บันทึก .py', 'Save .py'] }, { k: 'Ctrl+O', d: ['เปิดไฟล์', 'Open a file'] },
    { k: 'Ctrl+/', d: ['คอมเมนต์ / ยกเลิกคอมเมนต์', 'Toggle comment'] }, { k: 'Alt+↑ / Alt+↓', d: ['ย้ายบรรทัดขึ้น / ลง', 'Move line up / down'] }, { k: 'Ctrl+D', d: ['เลือกคำเดียวกันถัดไป (หลายเคอร์เซอร์)', 'Select next match (multi-cursor)'] },
    { k: 'Ctrl+= / Ctrl+-', d: ['ขยาย / ย่อตัวอักษร', 'Bigger / smaller text'] }, { k: 'Ctrl+B', d: ['ซ่อน / แสดงโจทย์', 'Hide / show the problem'] }, { k: 'Ctrl+J', d: ['ซ่อน / แสดงแผงสรุปค่า', 'Hide / show the values panel'] },
    { k: 'Ctrl+Alt+B', d: ['ซ่อนแผงข้างทั้งสอง', 'Hide both side panels'] }, { k: 'Ctrl+Shift+E', d: ['คลังไฟล์', 'Library'] }, { k: 'F1', d: ['คีย์ลัดทั้งหมด', 'All shortcuts'] },
  ],

  faq: [
    { q: ['ต้องติดตั้ง Python ก่อนไหม?', 'Do I need Python installed?'], a: ['ไม่ต้อง Python 3.14 มาในตัวโปรแกรมแล้ว ใช้ได้แม้ไม่มีอินเทอร์เน็ต', 'No — Python 3.14 is built in and works without internet.'] },
    { q: ['ใช้ไลบรารีอย่าง numpy ได้ไหม?', 'Can I use libraries like numpy?'], a: ['Prism Code เน้นพื้นฐานที่ใช้ในวิชาเรียน (ตัวแปร if ลูป ฟังก์ชัน List ไฟล์) ไลบรารีพิเศษอาจใช้ไม่ได้ทั้งหมด', 'Prism Code focuses on course basics (variables, if, loops, functions, lists, files); extra libraries may not all work.'] },
    { q: ['โปรแกรมค้าง / ลูปไม่จบ', 'My program never ends'], a: ['กด Shift+F5 เพื่อหยุดได้ทุกเมื่อ และลูปที่ไม่จบจะหยุดเองหลัง 12 วินาที', 'Press Shift+F5 any time; endless loops also stop by themselves after 12 seconds.'] },
    { q: ['งานที่เขียนไว้หายไหม?', 'Will I lose my work?'], a: ['บันทึกในโปรแกรมอัตโนมัติ และกด Ctrl+S เพื่อเซฟเป็นไฟล์ .py ในเครื่องได้', 'It saves automatically inside the app, and Ctrl+S saves a .py file on your PC.'] },
  ],
};
})();
