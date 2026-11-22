(() => {
// Prism Player · Studio guide. Native apps: screenshots from tools/capture/media-shots.ps1 (demo clip only),
// spots placed by hand as r: [x, y, w, h] fractions of the 1480×920 window. Text = [Thai, English].
const ALL = ['light.th', 'dark.th', 'light.en', 'dark.en'], TWO = ['light.th', 'light.en'];
// shared Studio layout
const S = {
  mode: [0.137, 0.024, 0.113, 0.038], top: [0.609, 0.024, 0.167, 0.038], export: [0.713, 0.024, 0.062, 0.038],
  lib: [0.008, 0.082, 0.183, 0.623], preview: [0.197, 0.082, 0.543, 0.583], transport: [0.206, 0.652, 0.218, 0.044], inout: [0.433, 0.652, 0.180, 0.044],
  tabs: [0.752, 0.092, 0.233, 0.083], body: [0.752, 0.185, 0.233, 0.512], tltools: [0.016, 0.728, 0.278, 0.033], tl: [0.016, 0.766, 0.968, 0.212],
};
(window.PrismGuides = window.PrismGuides || {}).media = {
  screens: [
    {
      id: 'player', title: ['Prism Player', 'Prism Player'], variants: ALL,
      hot: {
        video: { t: ['จอภาพ', 'The picture'], d: ['ดับเบิลคลิก = เต็มจอ · ล้อเมาส์ = ปรับเสียง · ลากไฟล์มาวางเพื่อเปิด ถอดรหัสด้วยการ์ดจอ เล่นได้แทบทุกไฟล์ (MP4, MKV, MOV, WebM, MP3, FLAC…)', 'Double-click = full screen · wheel = volume · drop a file to open. GPU decoding plays almost anything (MP4, MKV, MOV, WebM, MP3, FLAC…).'], r: [0.008, 0.082, 0.748, 0.795], keys: ['Space', 'F', 'Wheel'] },
        open: { t: ['เปิดไฟล์', 'Open file'], d: ['เลือกวิดีโอหรือเพลง ไฟล์อื่นในโฟลเดอร์เดียวกันจะต่อเป็นรายการเล่นให้เอง', 'Pick a video or song; other files in the same folder join the playlist.'], r: [0.711, 0.024, 0.062, 0.038], keys: ['Ctrl+O'] },
        side: { t: ['แผงข้าง', 'Side panel'], d: ['รายการเล่น · ปรับภาพ/เสียง (สว่าง คอนทราสต์ เร่งเสียง) · ข้อมูลไฟล์ — กด Tab เพื่อเปิด/ปิด', 'Playlist · picture/sound (brightness, contrast, boost) · file info — Tab opens/closes it.'], r: [0.762, 0.082, 0.231, 0.795], keys: ['Tab'] },
        sidetabs: { t: ['แท็บแผงข้าง', 'Panel tabs'], d: ['"รายการเล่น" มีตัวเลือกเล่นไฟล์ถัดไปเอง และวนคลิป · "ข้อมูลไฟล์" มีปุ่มตั้ง Prism Player เป็นโปรแกรมเปิดวิดีโอ', '"Playlist" has play-next and loop options · "File info" can set Prism Player as your video app.'], r: [0.770, 0.095, 0.176, 0.039] },
        register: { t: ['ตั้งเป็นโปรแกรมเปิดวิดีโอ', 'Make it the default player'], d: ['ลงทะเบียนในเมนู "เปิดด้วย" แล้วเปิดหน้าตั้งค่า Windows ให้เลือก Prism Player', 'Registers it in "Open with" and opens Windows Default apps so you can pick Prism Player.'], r: [0.771, 0.727, 0.153, 0.035] },
        seek: { t: ['แถบเวลา', 'Seek bar'], d: ['คลิกหรือลากเพื่อกระโดดไปเวลาไหนก็ได้ เปิดไฟล์เดิมครั้งหน้าจะเล่นต่อจากที่ค้างไว้', 'Click or drag to jump; reopening a file resumes where you left off.'], r: [0.016, 0.897, 0.968, 0.026], keys: ['← / →'] },
        play: { t: ['เล่น / หยุดชั่วคราว', 'Play / pause'], d: ['จบคลิปแล้วจะหยุดที่เฟรมสุดท้าย ปุ่มนี้กลายเป็น "เล่นอีกครั้ง"', 'At the end it stops on the last frame and this becomes "play again".'], r: [0.015, 0.932, 0.028, 0.043], keys: ['Space'] },
        controls: { t: ['วน · หยุด · ก่อนหน้า/ถัดไป · ทีละเฟรม', 'Loop · stop · prev/next · frame step'], d: ['วนคลิปนี้ (Ctrl+R) หยุด ไปไฟล์ก่อน/ถัดไป ย้อน/ข้าม และเลื่อนทีละเฟรม', 'Loop this clip (Ctrl+R), stop, previous/next file, rewind/skip and step frame by frame.'], r: [0.047, 0.933, 0.147, 0.040], keys: ['Ctrl+R', ', / .'] },
        volume: { t: ['ระดับเสียง', 'Volume'], d: ['ปรับได้ถึง 200% สำหรับคลิปเสียงเบา', 'Goes up to 200 % for quiet clips.'], r: [0.627, 0.933, 0.111, 0.040], keys: ['↑ / ↓'] },
        speed: { t: ['ความเร็ว', 'Speed'], d: ['เล่นช้าหรือเร็วขึ้น เสียงไม่เพี้ยน', 'Slower or faster without chipmunk sound.'], r: [0.742, 0.933, 0.039, 0.040], keys: ['[ / ]'] },
        tracks: { t: ['เสียง · ซับ · A–B · ภาพนิ่ง', 'Audio · subtitles · A–B · snapshot'], d: ['เลือกแทร็กเสียงและซับไตเติล วนช่วง A–B สำหรับฝึก/ดูซ้ำ และถ่ายภาพนิ่งเก็บไว้ในโฟลเดอร์รูป', 'Pick audio and subtitle tracks, loop A–B for practice, and save a snapshot to Pictures.'], r: [0.783, 0.933, 0.086, 0.040] },
        full: { t: ['แผงข้าง · เต็มจอ', 'Panel · full screen'], d: ['เต็มจอแบบแก้วหักเหแสงรอบภาพ แถบควบคุมเป็นแก้วใส', 'A glass full screen with a refracted halo and a clear control bar.'], r: [0.869, 0.933, 0.043, 0.040], keys: ['F', 'Tab'] },
        edit: { t: ['แก้ไขคลิป', 'Edit clip'], d: ['เปิด Prism Studio ที่เวลาเดียวกันทันที เพื่อตัด ครอป ใส่ข้อความ หรือทำ GIF', 'Opens Prism Studio at this exact moment to cut, crop, add text or make a GIF.'], r: [0.915, 0.932, 0.069, 0.043] },
        shell: { t: ['ภาษา · คีย์ลัด · โหมดมืด · เกี่ยวกับ', 'Language · keys · dark · about'], d: ['สลับไทย/อังกฤษ ดูคีย์ลัดทั้งหมด (F1) สว่าง/มืด และอัปเดต', 'Thai/English, all shortcuts (F1), light/dark, and updates.'], r: [0.780, 0.024, 0.123, 0.038], keys: ['F1'] },
      },
    },
    {
      id: 'studio', title: ['Prism Studio', 'Prism Studio'], variants: ALL,
      hot: {
        mode: { t: ['ตัดต่อวิดีโอ / สตูดิโอ GIF', 'Edit video / GIF studio'], d: ['สลับเป็นโหมด GIF: แก้ทีละเฟรม ลบ/ซ้ำ/กลับด้าน ตั้งเวลาต่อเฟรม boomerang ใส่คำบรรยาย เลือกจานสี', 'Switch to GIF mode: frame by frame — delete/duplicate/reverse, per-frame delay, boomerang, captions, palette.'], r: S.mode },
        lib: { t: ['คลังสื่อ', 'Library'], d: ['ไฟล์ที่นำเข้า ลากลงไทม์ไลน์ได้ กด + หรือลากไฟล์จากเครื่องมาวาง', 'Imported files — drag them onto the timeline. Press + or drop files in.'], r: S.lib },
        preview: { t: ['ตัวอย่างสด', 'Live preview'], d: ['เห็นผลการแก้ทุกอย่างทันที (สี ครอป ข้อความ ความเร็ว)', 'Every edit shows right away — colour, crop, text, speed.'], r: S.preview },
        transport: { t: ['เล่น', 'Playback'], d: ['เล่น/หยุด ย้อน ข้าม ไปต้น/ท้าย', 'Play/pause, back, forward, start/end.'], r: S.transport, keys: ['Space', 'J / K / L'] },
        inout: { t: ['จุดเริ่ม · จุดจบ · แยก', 'In · out · split'], d: ['ตั้งจุดเริ่ม (I) จุดจบ (O) ของคลิป หรือแยกคลิปตรงหัวเล่น (S)', 'Set the clip start (I), end (O), or split at the playhead (S).'], r: S.inout, keys: ['I', 'O', 'S'] },
        tabs: { t: ['แท็บเครื่องมือ', 'Tool tabs'], d: ['ตัด/ความเร็ว · ครอป/หมุน · สี/เอฟเฟกต์ · ลบพื้นหลัง · ข้อความ · ส่งออก', 'Trim/speed · crop/rotate · colour/effects · background · text · export.'], r: S.tabs },
        body: { t: ['ตัด / ความเร็ว', 'Trim / speed'], d: ['จุดเริ่ม-จบแบบละเอียด ความเร็ว 0.25×–4× เล่นย้อนกลับ ระดับเสียง และเฟดเข้า-ออก', 'Precise in/out, speed 0.25×–4×, reverse, volume and fades.'], r: S.body },
        tl: { t: ['ไทม์ไลน์', 'Timeline'], d: ['ลากคลิปสลับลำดับ ลากขอบเพื่อตัดหัวท้าย คลิกเพื่อเลือก แถวล่างคือเสียง', 'Drag clips to reorder, drag edges to trim, click to select; the lower row is audio.'], r: S.tl },
        tltools: { t: ['เครื่องมือไทม์ไลน์', 'Timeline tools'], d: ['ย้อน/ทำซ้ำ แยก ทำสำเนา เลื่อนคลิป ลบ และซูม', 'Undo/redo, split, duplicate, move, delete and zoom.'], r: S.tltools, keys: ['Ctrl+Z', 'Ctrl+Y', 'Delete'] },
        export: { t: ['ส่งออก', 'Export'], d: ['เปิดแท็บส่งออกแล้วเริ่มสร้างไฟล์', 'Opens the export tab and makes the file.'], r: S.export },
        top: { t: ['นำเข้า · เปิด · บันทึก · ส่งออก', 'Import · open · save · export'], d: ['นำเข้าไฟล์ เปิด/บันทึกโปรเจกต์ (บันทึกแบบปลอดภัย ไม่เสียไฟล์เดิม) และส่งออก', 'Import files, open/save the project (saved safely) and export.'], r: S.top, keys: ['Ctrl+S'] },
      },
    },
    {
      id: 'studioedit', title: ['ข้อความ + หลายคลิป', 'Text + several clips'], variants: TWO,
      hot: {
        preview: { t: ['ข้อความบนวิดีโอ', 'Text on the video'], d: ['ตัวอย่างนี้ครอปเป็นแนวตั้ง ใส่สีพื้นหลัง และข้อความ "สวัสดี Prism"', 'Here the clip is cropped vertical with a background colour and the text "สวัสดี Prism".'], r: S.preview },
        body: { t: ['ตั้งค่าข้อความ', 'Text settings'], d: ['พิมพ์ข้อความ ขนาด สี ขอบ/กล่อง ตำแหน่ง 9 จุด เลื่อนละเอียด และเวลาเริ่ม-จบที่แสดง', 'Text, size, colour, outline/box, 9 positions, fine offsets, and when it shows.'], r: S.body },
        tl: { t: ['คลิปที่ถูกแยก', 'A split clip'], d: ['คลิปถูกแยกเป็น 2 ท่อน ท่อนหลังเร่งเป็น 2× ไอคอนเล็ก ๆ บอกว่าแต่ละท่อนถูกแก้อะไรไว้', 'The clip is split in two, the second part at 2×; little icons show what each part has.'], r: S.tl },
        tabs: { t: ['แท็บข้อความ', 'Text tab'], d: ['กด "เพิ่ม" เพื่อใส่ข้อความหลายชุด', 'Press "Add" for more text overlays.'], r: S.tabs },
      },
    },
    {
      id: 'studiofx', title: ['สี / เอฟเฟกต์', 'Colour / effects'], variants: TWO,
      hot: {
        body: { t: ['ปรับสีและเอฟเฟกต์', 'Colour & effects'], d: ['พรีเซ็ต (สดใส อบอุ่น เย็น ขาวดำ วินเทจ) แล้วปรับสว่าง คอนทราสต์ ความอิ่มสี แกมมา โทนสี อุณหภูมิ ความคม เบลอ ลดนอยส์ ขอบมืด', 'Presets (vivid, warm, cool, mono, vintage), then brightness, contrast, saturation, gamma, hue, temperature, sharpen, blur, denoise, vignette.'], r: S.body },
        preview: { t: ['ดูผลทันที', 'See it live'], d: ['เลื่อนแถบแล้วเห็นผลในตัวอย่างทันที', 'Move a slider and the preview updates.'], r: S.preview },
        tabs: { t: ['แท็บ สี/เอฟเฟกต์', 'Colour/effects tab'], d: ['การปรับใช้กับคลิปที่เลือก', 'Applies to the selected clip.'], r: S.tabs },
      },
    },
    {
      id: 'studioai', title: ['ลบพื้นหลัง', 'Remove background'], variants: TWO,
      hot: {
        body: { t: ['วิธีลบพื้นหลัง', 'How to remove it'], d: ['"ฉากเขียว/สีเดียว" — เร็ว เลือกสีด้วยหลอดดูดสี · "AI ตัดคน" — ใช้ได้กับพื้นหลังทั่วไป ทำบนการ์ดจอ (ถ้าไม่ไหวสลับไป CPU ให้เอง)', '"Green / single colour" — fast, pick the colour with an eyedropper · "AI person cut-out" — any background, on the GPU (falls back to CPU).'], r: S.body },
        tabs: { t: ['แท็บลบพื้นหลัง', 'Background tab'], d: ['ผลลัพธ์ส่งออกเป็นวิดีโอโปร่งใสได้ (WebM alpha / MOV ProRes)', 'Export the result as transparent video (WebM alpha / MOV ProRes).'], r: S.tabs },
        preview: { t: ['ตัวอย่าง', 'Preview'], d: ['พื้นที่ที่ลบออกจะแสดงเป็นตาราง หรือสีพื้นหลังที่เลือก', 'Removed areas show as a checkerboard or your chosen colour.'], r: S.preview },
      },
    },
    {
      id: 'studioexport', title: ['ส่งออก', 'Export'], variants: TWO,
      hot: {
        body: { t: ['ตั้งค่าส่งออก', 'Export settings'], d: ['รูปแบบ: MP4 (H.264/H.265), WebM, WebM/MOV โปร่งใส, GIF, WebP, APNG, MP3, M4A, WAV · ขนาดเฟรม 16:9 / 9:16 / 1:1 · สำหรับ GIF ตั้ง FPS ความกว้าง เล่นย้อน/boomerang และการวน', 'Formats: MP4 (H.264/H.265), WebM, transparent WebM/MOV, GIF, WebP, APNG, MP3, M4A, WAV · frame 16:9 / 9:16 / 1:1 · for GIFs: fps, width, reverse/boomerang and looping.'], r: S.body },
        export: { t: ['ปุ่มส่งออก', 'Export button'], d: ['เริ่มส่งออก — ไม่มีวันเขียนทับไฟล์ต้นฉบับ ถ้ายกเลิก ไฟล์ที่ทำค้างจะถูกลบให้', 'Starts the export — it never overwrites a source file, and a cancelled export cleans up after itself.'], r: S.export },
        tabs: { t: ['แท็บส่งออก', 'Export tab'], d: ['เลือกที่นี่ก่อนกดส่งออก', 'Set things here before exporting.'], r: S.tabs },
      },
    },
  ],

  demos: [
    {
      id: 'watch', title: ['เปิดดูวิดีโอแบบโปร', 'Watch a video like a pro'], sub: ['Prism Player', 'Prism Player'],
      steps: [
        { s: 'player', h: 'open', a: 'click', k: 'Ctrl+O', say: ['เปิดไฟล์ (หรือลากไฟล์มาวาง)', 'Open a file (or drop one in)'] },
        { s: 'player', h: 'video', a: 'dbl', say: ['ดับเบิลคลิกเพื่อดูเต็มจอ', 'Double-click for full screen'] },
        { s: 'player', h: 'speed', a: 'click', say: ['เร่งความเร็วดูคลิปสอนได้', 'Speed up tutorials'] },
        { s: 'player', h: 'tracks', a: 'click', say: ['เลือกซับ/เสียง หรือวนช่วง A–B เพื่อดูซ้ำ', 'Pick subtitles/audio or loop A–B'] },
        { s: 'player', h: 'register', a: 'click', say: ['ชอบแล้ว? ตั้งเป็นโปรแกรมเปิดวิดีโอของเครื่อง', 'Like it? Make it your default video app'] },
      ],
    },
    {
      id: 'cut', title: ['ตัดคลิปให้สั้นลง', 'Trim a clip'], sub: ['Prism Studio', 'Prism Studio'],
      steps: [
        { s: 'player', h: 'edit', a: 'click', say: ['ใน Player กด "แก้ไขคลิป" — Studio เปิดที่เวลาเดียวกัน', 'In Player press "Edit clip" — Studio opens at that moment'], then: 'studio' },
        { s: 'studio', h: 'transport', a: 'click', say: ['เลื่อนไปจุดที่อยากให้เริ่ม', 'Go to where it should start'] },
        { s: 'studio', h: 'inout', a: 'click', k: 'I', say: ['กด I = จุดเริ่ม แล้วไปจุดจบกด O', 'Press I for the start, then O at the end'] },
        { s: 'studio', h: 'tl', a: 'hover', say: ['หรือลากขอบคลิปบนไทม์ไลน์ / กด S เพื่อแยกแล้วลบท่อนที่ไม่ใช้', 'Or drag the clip edge / press S to split and delete a part'] },
        { s: 'studio', h: 'export', a: 'click', say: ['กดส่งออกเป็น MP4', 'Export as MP4'] },
      ],
    },
    {
      id: 'gif', title: ['ทำ GIF จากวิดีโอ', 'Turn a video into a GIF'], sub: ['GIF', 'GIF'],
      steps: [
        { s: 'studio', h: 'inout', a: 'click', say: ['เลือกช่วงสั้น ๆ ที่อยากได้ (I / O)', 'Pick a short part (I / O)'] },
        { s: 'studioexport', h: 'tabs', a: 'click', say: ['ไปแท็บ "ส่งออก"', 'Open the "Export" tab'] },
        { s: 'studioexport', h: 'body', a: 'click', say: ['เลือก GIF ตั้งความกว้าง (480 px พอดีแชท) FPS และ boomerang ถ้าชอบ', 'Choose GIF, a width (480 px suits chats), fps and boomerang if you like'] },
        { s: 'studioexport', h: 'export', a: 'click', say: ['กดส่งออก ได้ไฟล์ GIF พร้อมส่ง', 'Export — your GIF is ready to share'] },
        { s: 'studio', h: 'mode', a: 'click', say: ['อยากแก้ทีละเฟรม? สลับเป็น "สตูดิโอ GIF"', 'Want frame-by-frame control? Switch to "GIF studio"'] },
      ],
    },
    {
      id: 'ai', title: ['ลบพื้นหลังวิดีโอด้วย AI', 'Remove a video background with AI'], sub: ['AI', 'AI'],
      steps: [
        { s: 'studio', h: 'tl', a: 'click', say: ['เลือกคลิปบนไทม์ไลน์', 'Select the clip on the timeline'] },
        { s: 'studioai', h: 'tabs', a: 'click', say: ['ไปแท็บ "ลบพื้นหลัง"', 'Open "Background"'] },
        { s: 'studioai', h: 'body', a: 'click', say: ['เลือก "AI ตัดคน" (หรือ "ฉากเขียว" ถ้าถ่ายหน้าผ้าเขียว)', 'Choose "AI person cut-out" (or "Green" if you filmed on green)'] },
        { s: 'studioexport', h: 'body', a: 'click', say: ['ส่งออกเป็น WebM/MOV โปร่งใส เอาไปซ้อนในงานอื่นได้', 'Export as transparent WebM/MOV to layer it anywhere'] },
      ],
    },
  ],

  feats: [
    { i: '⚡', t: ['native ล้วน เบามาก', 'Fully native and light'], d: ['เขียนด้วย Rust ไม่มีเว็บวิว เปิดไว ใช้แรมน้อย ไม่มีแอนิเมชันถ่วงเครื่อง', 'Rust, no web view: opens fast, uses little memory, no animations to slow you down.'] },
    { i: '🎞', t: ['เล่นได้ทุกไฟล์', 'Plays everything'], d: ['ใช้ libmpv ถอดรหัสบนการ์ดจอ เล่นต่อจากที่ค้าง วน A–B ความเร็ว ซับ', 'libmpv with GPU decoding, resume, A–B loop, speed, subtitles.'] },
    { i: '✂️', t: ['Player → Studio ในคลิกเดียว', 'Player → Studio in one click'], d: ['เจอช่วงที่อยากตัด กด "แก้ไขคลิป" ได้ทันที', 'Spot the moment, press "Edit clip".'] },
    { i: '🌀', t: ['สตูดิโอ GIF', 'GIF studio'], d: ['แก้ทีละเฟรม boomerang คำบรรยาย จานสีและ dither', 'Frame by frame, boomerang, captions, palette and dither.'] },
    { i: '🧠', t: ['AI ลบพื้นหลังวิดีโอ', 'AI video cut-out'], d: ['Robust Video Matting บนการ์ดจอ ส่งออกเป็นวิดีโอโปร่งใส', 'Robust Video Matting on the GPU, exported as transparent video.'] },
    { i: '🛟', t: ['ปลอดภัยกับไฟล์', 'Safe with your files'], d: ['ไม่เขียนทับต้นฉบับ บันทึกโปรเจกต์แบบปลอดภัย ปิดโปรแกรมแล้วงานส่งออกหยุดให้', 'Never overwrites sources, saves projects safely, stops exports when closed.'] },
  ],

  keys: [
    { k: 'Space', d: ['เล่น / หยุด', 'Play / pause'] }, { k: 'F', d: ['เต็มจอ', 'Full screen'] }, { k: 'Tab', d: ['แผงข้าง (Player)', 'Side panel (Player)'] },
    { k: '← / →', d: ['ย้อน / ข้าม', 'Back / forward'] }, { k: ', / .', d: ['ทีละเฟรม', 'Frame step'] }, { k: 'Ctrl+R', d: ['วนคลิปนี้', 'Loop this clip'] },
    { k: 'I / O', d: ['จุดเริ่ม / จุดจบ (Studio)', 'In / out (Studio)'] }, { k: 'S', d: ['แยกคลิปที่หัวเล่น', 'Split at the playhead'] },
    { k: 'Ctrl+Z / Ctrl+Y', d: ['ย้อน / ทำซ้ำ', 'Undo / redo'] }, { k: 'Delete', d: ['ลบคลิปที่เลือก', 'Delete the selected clip'] }, { k: 'F1', d: ['คีย์ลัดทั้งหมด', 'All shortcuts'] },
  ],

  faq: [
    { q: ['ทำไมไม่มีแอนิเมชันเหมือนแอป Prism อื่น?', 'Why no animations like other Prism apps?'], a: ['ตั้งใจให้ Player/Studio เบาและเร็วที่สุด เพราะงานวิดีโอใช้การ์ดจอหนักอยู่แล้ว', 'On purpose: video work already loads the GPU, so Player/Studio stay as light and quick as possible.'] },
    { q: ['AI ลบพื้นหลังช้าไหม?', 'Is AI background removal slow?'], a: ['บนการ์ดจอใช้เวลาประมาณเท่าความยาวคลิปหรือเร็วกว่า ถ้าการ์ดจอไม่รองรับจะสลับไปใช้ CPU ให้เอง (ช้ากว่า)', 'On a GPU it takes about the clip length or less; without a suitable GPU it switches to the CPU (slower).'] },
    { q: ['ส่งออกแล้วไฟล์ต้นฉบับหายไหม?', 'Does exporting touch my original?'], a: ['ไม่ ไฟล์ต้นฉบับไม่ถูกแก้ ส่งออกเป็นไฟล์ใหม่เสมอ', 'No — originals are never changed; export always makes a new file.'] },
    { q: ['ดาวน์โหลดได้เมื่อไหร่?', 'When can I download it?'], a: ['กำลังเตรียมขึ้น GitHub ระหว่างนี้ดูวิธีใช้จากคู่มือนี้ได้เลย', 'It is being prepared for GitHub — meanwhile you can learn it here.'] },
  ],
};
})();
