(() => {
// Prism Rec guide. Spots match tools/capture/jobs/rec.js + recbar.js (the bar is re-drawn on a demo desktop). Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).rec = {
  screens: [
    {
      id: 'bar', title: ['แถบแก้วลอย', 'Floating glass bar'],
      hot: {
        rec: { t: ['ปุ่มอัด', 'Record'], d: ['กดแล้วนับถอยหลัง 3-2-1 แล้วเริ่มอัดทันที ระหว่างอัดปุ่มจะกลายเป็นสี่เหลี่ยมพร้อมเวลา กดอีกครั้ง = หยุดและบันทึก', 'Click: a 3-2-1 countdown, then recording starts. While recording it turns into a square with a timer — click again to stop and save.'], keys: ['Ctrl+Alt+R'] },
        logo: { t: ['จับลาก', 'Drag handle'], d: ['ลากโลโก้เพื่อย้ายแถบไปตรงไหนก็ได้ โปรแกรมจำตำแหน่งไว้ คลิกขวาที่แถบ = เปิดหน้าต่างหลัก', 'Drag the logo to move the bar anywhere; it remembers. Right-click the bar to open the main window.'] },
        replay: { t: ['บันทึกย้อนหลัง', 'Save the last seconds'], d: ['จุดเขียว = กำลังเก็บภาพย้อนหลังอยู่ กดเพื่อเซฟ 30 วินาทีล่าสุดเป็นคลิปทันที เหมาะกับจังหวะเด็ดในเกมที่ไม่ได้กดอัดไว้', 'Green dot = buffering. Click to save the last 30 seconds as a clip — perfect for game moments you didn’t record.'], keys: ['Ctrl+Alt+S'] },
        area: { t: ['ทั้งจอ / บางส่วน', 'Full screen / area'], d: ['สลับว่าจะอัดทั้งจอ หรือลากเลือกเฉพาะพื้นที่/หน้าต่างเดียว', 'Choose the whole screen, or drag to pick an area or a single window.'], tip: ['ตอนเลือกพื้นที่: กด Enter = ใช้พื้นที่เดิม · Esc = ยกเลิก', 'When picking: Enter = last area · Esc = cancel'] },
        mic: { t: ['ไมโครโฟน', 'Microphone'], d: ['เปิด/ปิดเสียงไมค์ กดได้แม้กำลังอัด ขอบเขียวเรืองตามเสียงพูดของคุณ', 'Mic on/off — even while recording. The green ring glows with your voice.'] },
        sound: { t: ['เสียงในเครื่อง', 'PC sound'], d: ['อัดเสียงเกม เพลง หรือวิดีโอที่เล่นอยู่ในเครื่อง', 'Record game, music or video sound playing on the PC.'] },
        hl: { t: ['ไฮไลต์เมาส์', 'Mouse highlight'], d: ['วงกลมสีรอบเคอร์เซอร์ และวงแหวนตอนคลิก (ซ้าย = ม่วง ขวา = ชมพู) คนดูจะตามเมาส์ทัน', 'A soft disc around the cursor and rings on clicks (left violet, right pink) so viewers can follow.'], keys: ['Ctrl+Alt+H'] },
        draw: { t: ['วาดบนจอ', 'Draw on screen'], d: ['เปิดแถวเครื่องมือวาด: ปากกา ปากกาเน้น ลูกศร กรอบ 6 สี เส้นจะติดไปในวิดีโอด้วย', 'Opens the drawing row: pen, highlighter, arrow, box, 6 colours — strokes are recorded too.'], keys: ['Ctrl+Alt+D'] },
        main: { t: ['หน้าต่างหลัก', 'Main window'], d: ['เปิดคลังวิดีโอที่อัดไว้และการตั้งค่า', 'Open your recordings and settings.'] },
      },
    },
    {
      id: 'home', title: ['หน้าหลัก + คลังวิดีโอ', 'Home + recordings'],
      hot: {
        big: { t: ['ปุ่มอัดใหญ่', 'The big record button'], d: ['กดเพื่อเริ่มอัด ระหว่างอัดจะกลายเป็นสี่เหลี่ยมแดง มีปุ่มพัก วาด และหยุดโผล่ขึ้นมา', 'Click to start. While recording it turns into a red square and pause / draw / stop buttons appear.'], keys: ['Ctrl+Alt+R'] },
        title: { t: ['สถานะ', 'Status'], d: ['บอกว่าพร้อมอัด กำลังอัด หรือพักอยู่ พร้อมคีย์ลัดที่ตั้งไว้', 'Ready, recording or paused — with your current shortcut.'] },
        modes: { t: ['ทั้งจอ / เลือกพื้นที่', 'Full screen / area'], d: ['เลือกรูปแบบการอัดก่อนกด', 'Choose what to record before you start.'] },
        quick: { t: ['สวิตช์ด่วน', 'Quick switches'], d: ['เสียงในเครื่อง ไมโครโฟน ไฮไลต์เมาส์ นับถอยหลัง และบันทึกย้อนหลัง — กดสลับได้ทันที', 'PC sound, microphone, mouse highlight, countdown and replay — one click each.'] },
        replay: { t: ['บันทึกย้อนหลัง', 'Replay buffer'], d: ['บอกว่าเก็บภาพย้อนหลังอยู่กี่วินาที และปุ่มบันทึกตอนนี้', 'Shows how many seconds are buffered, with a save-now button.'], keys: ['Ctrl+Alt+S'] },
        enc: { t: ['ตัวเข้ารหัส', 'Encoder'], d: ['อัดผ่านการ์ดจอ (AMD / NVIDIA / Intel) ใช้ CPU ไม่ถึง 1% เกมไม่กระตุก', 'Encodes on the graphics card (AMD / NVIDIA / Intel) at under 1 % CPU — games stay smooth.'] },
        video: { t: ['ภาพที่ได้', 'Picture'], d: ['ความละเอียด fps และคุณภาพที่จะอัด', 'Resolution, fps and quality you will get.'] },
        dir: { t: ['บันทึกไปที่', 'Saved to'], d: ['โฟลเดอร์ที่เก็บวิดีโอ เปลี่ยนได้ในตั้งค่า', 'Where videos go — change it in Settings.'] },
        lib: { t: ['วิดีโอแยกตามวัน', 'Videos by day'], d: ['คลิปเรียงเป็นวัน: วันนี้ เมื่อวาน… พร้อมจำนวนและความยาวรวม', 'Clips grouped by day — Today, Yesterday… with count and total length.'] },
        card: { t: ['การ์ดวิดีโอ', 'A video card'], d: ['คลิก = ดูตัวอย่าง · ดับเบิลคลิก = เปิดใน Prism Player · ✂ ตัดต่อใน Prism Studio · คัดลอกไฟล์ไปวางใน Discord/LINE · เปลี่ยนชื่อ · ลบลงถังขยะ', 'Click = preview · double-click = open in Prism Player · ✂ edit in Prism Studio · copy the file to paste in Discord/LINE · rename · delete to the Recycle Bin.'] },
        search: { t: ['ค้นหา', 'Search'], d: ['หาวิดีโอจากชื่อ', 'Find a video by name.'] },
        folder: { t: ['เปิดโฟลเดอร์', 'Open folder'], d: ['เปิดโฟลเดอร์วิดีโอใน File Explorer', 'Open the videos folder in File Explorer.'] },
        rail: { t: ['แถบวันที่', 'Date rail'], d: ['เส้นละวัน ชี้เพื่อดูวันที่ คลิกหรือลากเพื่อกระโดดไปวันนั้น', 'One line per day — hover for the date, click or drag to jump.'] },
        bar: { t: ['แสดง / ซ่อนแถบลอย', 'Show / hide the bar'], d: ['เปิดหรือปิดแถบแก้วลอยบนจอ', 'Turn the floating glass bar on or off.'] },
        dhome: { t: ['หน้าหลัก', 'Home'], d: ['ปุ่มอัดและคลังวิดีโอ', 'Record button and your videos.'] },
        dset: { t: ['ตั้งค่า', 'Settings'], d: ['ภาพ เสียง ไฮไลต์ ปากกา บันทึกย้อนหลัง โฟลเดอร์', 'Video, sound, highlight, pen, replay, folder.'] },
        dkeys: { t: ['คีย์ลัด', 'Shortcuts'], d: ['ดูและเปลี่ยนคีย์ลัดทั้งหมด', 'See and change every shortcut.'], keys: ['F1'] },
        theme: { t: ['ภาษา · โหมดมืด · เกี่ยวกับ', 'Language · dark mode · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด ปุ่ม ⓘ ดูเวอร์ชันและอัปเดต', 'Switch Thai/English and light/dark; ⓘ shows the version and updates.'] },
      },
    },
    {
      id: 'barrec', title: ['ระหว่างอัด', 'While recording'],
      hot: {
        rec: { t: ['หยุดและบันทึก', 'Stop and save'], d: ['สี่เหลี่ยมพร้อมเวลาอัด คลิก = หยุดและบันทึก วิดีโอจะขึ้นในคลังพร้อมเรืองแสงให้เห็น', 'The square with the timer: click to stop and save — the clip appears glowing in your library.'], keys: ['Ctrl+Alt+R'] },
        pause: { t: ['พักไว้ก่อน', 'Pause'], d: ['หยุดชั่วคราว (แถบเป็นสีส้ม) แล้วกดอัดต่อ ช่วงที่พักจะไม่อยู่ในวิดีโอ', 'Pause (the bar turns amber) and resume — the paused part is left out.'], keys: ['Ctrl+Alt+P'] },
        frame: { t: ['กรอบพื้นที่ที่อัด', 'Recorded area frame'], d: ['เส้นประไล่สีบอกว่ากำลังอัดตรงไหน (ตัวกรอบไม่ติดไปในวิดีโอ)', 'A dashed gradient frame shows what is being recorded (the frame itself isn’t recorded).'] },
        hl: { t: ['ไฮไลต์เมาส์', 'Mouse highlight'], d: ['วงกลมรอบเมาส์และวงแหวนตอนคลิก ติดไปในวิดีโอ', 'The disc and click rings are recorded.'] },
        mic: { t: ['ไมค์ระหว่างอัด', 'Mic while recording'], d: ['ปิด/เปิดไมค์ได้กลางคลิป', 'Mute or unmute mid-recording.'] },
        replay: { t: ['บันทึกย้อนหลัง', 'Replay'], d: ['ยังเซฟคลิปย้อนหลังได้แม้กำลังอัดอยู่', 'You can still save a replay while recording.'] },
        note: { t: ['สถานะ', 'Status'], d: ['บอกสถานะและคีย์ลัดที่ใช้ได้ตอนนี้', 'Status and the shortcuts you can use now.'] },
      },
    },
    {
      id: 'bardraw', title: ['วาดบนจอ', 'Drawing on screen'],
      hot: {
        ink: { t: ['เส้นที่วาด', 'Your drawings'], d: ['วาดทับอะไรก็ได้บนจอ เส้นติดไปในวิดีโอ เหมาะกับการสอนหรือชี้จุด', 'Draw over anything — strokes are recorded, great for teaching or pointing things out.'] },
        pen: { t: ['ปากกา', 'Pen'], d: ['เส้นทึบ', 'Solid line.'], keys: ['P'] },
        hi: { t: ['ปากกาเน้นข้อความ', 'Highlighter'], d: ['เส้นโปร่งแสงเหมือนปากกาเน้นคำ', 'See-through marker.'], keys: ['M'] },
        shapes: { t: ['ลูกศร · กรอบ', 'Arrow · box'], d: ['ลากเพื่อวาดลูกศรหรือกรอบสี่เหลี่ยม', 'Drag to draw an arrow or a box.'], keys: ['A', 'R'] },
        colors: { t: ['6 สี', '6 colours'], d: ['เลือกสีด้วยการคลิก หรือกดเลข 1–6', 'Click a colour or press 1–6.'], keys: ['1–6'] },
        undo: { t: ['ย้อนเส้น', 'Undo stroke'], d: ['ลบเส้นล่าสุด (คลิกขวาก็ได้)', 'Remove the last stroke (right-click works too).'], keys: ['Ctrl+Z'] },
        clear: { t: ['ล้างทั้งหมด', 'Clear all'], d: ['ลบเส้นทั้งหมดบนจอ', 'Erase everything.'], keys: ['Delete'] },
        fade: { t: ['ค่อย ๆ หายไปเอง', 'Fade away'], d: ['เส้นจะจางหายเองหลังวาด 3 วินาที ไม่ต้องคอยลบ', 'Strokes fade out 3 s after you draw — no clean-up.'] },
        done: { t: ['เสร็จ', 'Done'], d: ['เลิกวาด กลับไปใช้เมาส์ตามปกติ (เส้นยังอยู่จนลบหรือจางไป)', 'Stop drawing and use the mouse normally (strokes stay until cleared or faded).'], keys: ['Esc'] },
        draw: { t: ['ปุ่มวาด', 'Draw button'], d: ['เปิด/ปิดโหมดวาด', 'Toggle drawing.'], keys: ['Ctrl+Alt+D'] },
      },
    },
    {
      id: 'settings', title: ['ตั้งค่า', 'Settings'],
      hot: {
        video: { t: ['วิดีโอ', 'Video'], d: ['30/60 fps · คุณภาพ · H.264 (เปิดได้ทุกที่) หรือ HEVC (ไฟล์เล็กกว่าครึ่ง) · เลือกตัวเข้ารหัส', '30/60 fps · quality · H.264 (plays anywhere) or HEVC (half the size) · encoder.'] },
        enc: { t: ['ตัวเข้ารหัสที่ใช้', 'Active encoder'], d: ['โปรแกรมทดสอบการ์ดจอให้เองตอนเปิดครั้งแรก กด "ตรวจใหม่" ถ้าเปลี่ยนการ์ดจอหรืออัปเดตไดรเวอร์', 'Tested automatically on first start — press "Re-detect" after a new GPU or driver.'] },
        screen: { t: ['หน้าจอและการอัด', 'Screen & recording'], d: ['จอที่จะอัด นับถอยหลัง แสดงเมาส์ในวิดีโอ ซ่อนหน้าต่างหลักระหว่างอัด แสดงแถบลอย', 'Which monitor, countdown, cursor in video, hide the main window while recording, show the bar.'] },
        monitor: { t: ['จอที่จะอัด', 'Monitor'], d: ['มีหลายจอ? เลือกจอที่ต้องการ', 'Several screens? Pick one.'] },
        audio: { t: ['เสียง', 'Sound'], d: ['เสียงในเครื่องและไมค์ พร้อมระดับความดังแยกกัน', 'PC sound and mic, each with its own volume.'] },
        mic: { t: ['เลือกไมค์', 'Pick a mic'], d: ['ใช้ไมค์ค่าเริ่มต้นของ Windows หรือเลือกเอง', 'Windows default or a specific one.'] },
        mictest: { t: ['ทดสอบไมค์', 'Mic test'], d: ['พูดแล้วดูแถบ ควรอยู่ช่องสีเขียว และ "อัด 3 วิแล้วฟังเสียงตัวเอง" ได้', 'Speak and watch the meter — aim for green — then record 3 s and listen back.'] },
        hlcard: { t: ['ไฮไลต์เมาส์', 'Mouse highlight'], d: ['เลือกสี ขนาด และวงตอนคลิก ทดลองในกรอบตัวอย่างได้เลย', 'Colour, size and click rings — try them in the preview box.'] },
      },
    },
    {
      id: 'settings2', title: ['ตั้งค่า (ต่อ)', 'Settings (more)'],
      hot: {
        c5: { t: ['วาดบนจอ', 'Drawing'], d: ['สีปากกา ความหนาเส้น และให้เส้นจางหายเอง', 'Pen colour, width and auto-fade.'] },
        c6: { t: ['บันทึกย้อนหลัง', 'Save the last seconds'], d: ['เปิดเก็บภาพย้อนหลังไว้ตลอด เลือก 15 วิ / 30 วิ / 1 นาที / 2 นาที แล้วกด Ctrl+Alt+S เมื่อไหร่ก็ได้', 'Keep a rolling buffer — 15 s / 30 s / 1 min / 2 min — and press Ctrl+Alt+S any time.'], keys: ['Ctrl+Alt+S'] },
        replay: { t: ['ความยาวที่เก็บ', 'Length'], d: ['ยิ่งยาวยิ่งใช้พื้นที่ชั่วคราวมากขึ้น (ไฟล์เก่าถูกเขียนทับเอง)', 'Longer uses more temporary space (old pieces are overwritten).'] },
        c7: { t: ['ไฟล์', 'Files'], d: ['เปลี่ยน เปิด หรือรีเซ็ตโฟลเดอร์ที่เก็บวิดีโอ', 'Change, open or reset the videos folder.'] },
        dir: { t: ['โฟลเดอร์วิดีโอ', 'Videos folder'], d: ['ถ้าปิดโปรแกรมกลางคัน วิดีโอจะถูกกู้คืนให้ตอนเปิดครั้งถัดไป', 'If the app closes mid-recording, the video is recovered next time.'] },
        c8: { t: ['ทั่วไป', 'General'], d: ['เปิดพร้อม Windows (อยู่ในถาดข้างนาฬิกา คีย์ลัดใช้ได้ทันที)', 'Start with Windows (stays in the tray, shortcuts work right away).'] },
        startup: { t: ['ถามอีกครั้ง', 'Ask again'], d: ['ให้โปรแกรมถามเรื่องเปิดพร้อม Windows ใหม่', 'Show the start-with-Windows question again.'] },
      },
    },
    {
      id: 'keys', title: ['คีย์ลัด', 'Shortcuts'],
      hot: {
        rec: { t: ['คีย์ลัดการอัด', 'Recording keys'], d: ['อัด/หยุด พัก บันทึกย้อนหลัง — คลิกแล้วกดคีย์ใหม่เพื่อเปลี่ยน', 'Record/stop, pause, replay — click and press new keys to change.'] },
        draw: { t: ['คีย์ลัดการวาด', 'Drawing keys'], d: ['วาด ไฮไลต์ ล้างเส้น', 'Draw, highlight, clear.'] },
        reset: { t: ['คืนค่าเดิม', 'Reset'], d: ['กลับไปใช้คีย์ลัดเริ่มต้นทั้งหมด', 'Back to the default shortcuts.'] },
      },
    },
  ],

  demos: [
    {
      id: 'first', title: ['อัดหน้าจอครั้งแรก', 'Your first recording'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'bar', h: 'sound', a: 'hover', say: ['เช็กว่าเปิดเสียงในเครื่อง (และไมค์ถ้าจะพูด)', 'Check PC sound is on (and the mic if you’ll talk)'] },
        { s: 'bar', h: 'area', a: 'click', say: ['เลือกทั้งจอ หรือคลิกเพื่อลากเลือกเฉพาะพื้นที่', 'Full screen — or click to drag out an area'] },
        { s: 'bar', h: 'rec', a: 'click', k: 'Ctrl+Alt+R', say: ['กด "อัด" (Ctrl+Alt+R) นับ 3-2-1 แล้วเริ่ม', 'Click "Rec" (Ctrl+Alt+R): 3-2-1, go'], then: 'barrec' },
        { s: 'barrec', h: 'pause', a: 'click', k: 'Ctrl+Alt+P', say: ['อยากพักกลางทาง? กดพัก แล้วกดอัดต่อได้', 'Need a break? Pause, then resume'] },
        { s: 'barrec', h: 'rec', a: 'click', say: ['กดสี่เหลี่ยมเพื่อหยุดและบันทึก', 'Click the square to stop and save'], then: 'home' },
        { s: 'home', h: 'card', a: 'dbl', say: ['คลิปใหม่เรืองแสงอยู่ในคลัง ดับเบิลคลิกเพื่อดู', 'The new clip glows in your library — double-click to watch'] },
      ],
    },
    {
      id: 'replay', title: ['เซฟจังหวะเด็ดที่เพิ่งเกิด (ไม่ได้กดอัดไว้)', 'Save a moment that just happened'], sub: ['เกมเมอร์', 'Gamers'],
      steps: [
        { s: 'settings2', h: 'c6', a: 'click', say: ['เปิด "บันทึกย้อนหลัง" ในตั้งค่า (ครั้งเดียวพอ)', 'Turn on "Save the last seconds" in Settings (once)'] },
        { s: 'settings2', h: 'replay', a: 'click', say: ['เลือกความยาว เช่น 30 วินาที', 'Pick a length, e.g. 30 seconds'] },
        { s: 'bar', h: 'replay', a: 'hover', say: ['จุดเขียวบนแถบ = กำลังเก็บภาพย้อนหลังอยู่', 'The green dot on the bar = it is buffering'] },
        { s: 'bar', h: 'replay', a: 'click', k: 'Ctrl+Alt+S', say: ['เพิ่งเล่นได้สวย? กด Ctrl+Alt+S — 30 วินาทีล่าสุดกลายเป็นคลิปใน 2 วินาที', 'Great play? Press Ctrl+Alt+S — the last 30 s becomes a clip in about 2 s'] },
      ],
    },
    {
      id: 'teach', title: ['อัดวิดีโอสอน พร้อมวาดและไฮไลต์เมาส์', 'Record a tutorial with drawing and highlight'], sub: ['สอน', 'Teaching'],
      steps: [
        { s: 'bar', h: 'hl', a: 'click', k: 'Ctrl+Alt+H', say: ['เปิดไฮไลต์เมาส์ให้คนดูตามทัน', 'Turn on the mouse highlight so viewers can follow'] },
        { s: 'bar', h: 'mic', a: 'click', say: ['เปิดไมค์เพื่อพูดอธิบาย', 'Turn on the mic to explain'] },
        { s: 'bar', h: 'rec', a: 'click', say: ['เริ่มอัด', 'Start recording'], then: 'barrec' },
        { s: 'barrec', h: 'hl', a: 'hover', say: ['คลิกตรงไหน คนดูเห็นวงแหวนตรงนั้น', 'Every click shows a ring'] },
        { s: 'bardraw', h: 'draw', a: 'click', k: 'Ctrl+Alt+D', say: ['กดวาด (Ctrl+Alt+D) แล้ววงหรือชี้ลูกศรตรงจุดสำคัญ', 'Press draw (Ctrl+Alt+D) and circle or arrow the key spot'] },
        { s: 'bardraw', h: 'fade', a: 'click', say: ['เปิด "จางหายเอง" ไม่ต้องคอยลบเส้น', 'Turn on "fade away" — no cleaning up'] },
        { s: 'bardraw', h: 'done', a: 'click', k: 'Esc', say: ['กด Esc กลับไปใช้เมาส์ แล้วอัดต่อได้เลย', 'Esc to use the mouse again and keep going'] },
      ],
    },
    {
      id: 'share', title: ['ส่งคลิปให้เพื่อนใน Discord / LINE', 'Send a clip on Discord / LINE'], sub: ['แชร์', 'Share'],
      steps: [
        { s: 'home', h: 'card', a: 'hover', say: ['หาคลิปในคลัง', 'Find the clip in your library'] },
        { s: 'home', h: 'card', a: 'click', say: ['กดปุ่ม "คัดลอกไฟล์" บนการ์ด', 'Click "Copy file" on the card'] },
        { say: ['ไปที่ห้องแชทแล้วกด Ctrl+V — ไฟล์วิดีโอแนบไปเลย', 'Go to the chat and press Ctrl+V — the video is attached'] },
        { s: 'home', h: 'card', a: 'hover', say: ['อยากตัดก่อนส่ง? กดกรรไกรเพื่อเปิดใน Prism Studio', 'Want to trim first? Click the scissors to open it in Prism Studio'] },
      ],
    },
  ],

  feats: [
    { i: '🪟', t: ['แถบแก้วไม่ติดในวิดีโอ', 'A bar that never shows up'], d: ['แถบลอยบนจอให้กดง่าย แต่ถูกซ่อนจากการอัดเสมอ', 'Always on top for easy clicks, always hidden from the recording.'] },
    { i: '🎮', t: ['เบาจนเล่นเกมได้ลื่น', 'Light enough for gaming'], d: ['ส่งภาพตรงไปการ์ดจอ (zero-copy) อัด 1080p60 ใช้ CPU ประมาณ 0.7%', 'Frames go straight to the GPU (zero-copy): 1080p60 at about 0.7 % CPU.'] },
    { i: '⏪', t: ['บันทึกย้อนหลัง', 'Replay buffer'], d: ['เก็บ 15 วิถึง 2 นาทีล่าสุดไว้ตลอด กดทีเดียวได้คลิป', 'Always keeps the last 15 s – 2 min; one key makes a clip.'] },
    { i: '✍️', t: ['วาดและไฮไลต์', 'Draw and highlight'], d: ['ปากกา ลูกศร กรอบ วงแหวนตอนคลิก ติดไปในวิดีโอ', 'Pen, arrows, boxes and click rings — all recorded.'] },
    { i: '🛟', t: ['ไม่เสียคลิป', 'Never lose a clip'], d: ['ล็อกจอ/ปิดกลางคัน/ไดรฟ์ใกล้เต็ม โปรแกรมจัดการให้และกู้คืนให้', 'Lock screen, crashes or a nearly full disk — it copes and recovers.'] },
    { i: '🔗', t: ['ต่อกับแอป Prism อื่น', 'Works with other Prism apps'], d: ['เปิดดูใน Prism Player ตัดใน Prism Studio สั่งอัดด้วยเสียงผ่าน Prism VoiceOpen', 'Watch in Prism Player, cut in Prism Studio, start by voice with Prism VoiceOpen.'] },
  ],

  keys: [
    { k: 'Ctrl+Alt+R', d: ['เริ่มอัด / หยุดและบันทึก', 'Start / stop and save'] },
    { k: 'Ctrl+Alt+P', d: ['พัก / อัดต่อ', 'Pause / resume'] },
    { k: 'Ctrl+Alt+S', d: ['บันทึกย้อนหลัง', 'Save the last seconds'] },
    { k: 'Ctrl+Alt+D', d: ['วาดบนจอ', 'Draw on screen'] },
    { k: 'Ctrl+Alt+H', d: ['ไฮไลต์เมาส์', 'Mouse highlight'] },
    { k: 'P / M / A / R', d: ['ปากกา / ปากกาเน้น / ลูกศร / กรอบ (ตอนวาด)', 'Pen / highlighter / arrow / box (while drawing)'] },
    { k: '1–6', d: ['เปลี่ยนสีปากกา', 'Pen colour'] },
    { k: 'Ctrl+Z', d: ['ย้อนเส้นที่วาด', 'Undo a stroke'] },
    { k: 'Delete', d: ['ล้างเส้นทั้งหมด', 'Clear all strokes'] },
    { k: 'Esc', d: ['เลิกวาด / ยกเลิกการนับถอยหลังหรือเลือกพื้นที่', 'Stop drawing / cancel countdown or area pick'] },
    { k: 'F1', d: ['หน้าคีย์ลัด', 'Shortcuts page'] },
  ],

  faq: [
    { q: ['แถบลอยจะติดไปในวิดีโอไหม?', 'Will the bar appear in my video?'], a: ['ไม่ แถบ ตัวนับถอยหลัง และกรอบพื้นที่ถูกซ่อนจากการอัดเสมอ ส่วนไฮไลต์เมาส์และเส้นที่วาดจะติดไปด้วยตั้งใจ', 'No — the bar, countdown and area frame are always hidden from capture; mouse highlight and drawings are recorded on purpose.'] },
    { q: ['ปิดหน้าต่างแล้วยังอัดได้ไหม?', 'Does it keep working when I close the window?'], a: ['ได้ ปุ่ม X แค่ซ่อนหน้าต่าง โปรแกรมอยู่ในถาดข้างนาฬิกา แถบและคีย์ลัดใช้ได้ต่อ ออกจริงให้คลิกขวาที่ไอคอนในถาด', 'Yes — X just hides the window; it stays in the tray with the bar and shortcuts working. To quit, right-click the tray icon.'] },
    { q: ['ไฟล์ออกมาเป็นอะไร?', 'What format are the videos?'], a: ['MP4 (H.264 เปิดได้ทุกที่ หรือ HEVC ไฟล์เล็กกว่า) 30 หรือ 60 fps', 'MP4 — H.264 plays anywhere, HEVC is smaller — at 30 or 60 fps.'] },
    { q: ['การ์ดจอไม่ใช่ AMD ใช้ได้ไหม?', 'Do I need an AMD card?'], a: ['ไม่จำเป็น รองรับ AMD, NVIDIA, Intel และถ้าไม่มีจะใช้ CPU แทนให้อัตโนมัติ', 'No — AMD, NVIDIA and Intel all work, and it falls back to the CPU automatically.'] },
  ],
};
})();
