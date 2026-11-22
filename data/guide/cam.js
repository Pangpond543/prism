(() => {
// Prism Cam guide. Spots match tools/capture/jobs/cam.js (boxes come from data/shots/cam.json).
// Text = [Thai, English]. t = title, d = what it does, tip = extra hint, keys = shortcuts, s = short line for the list.
(window.PrismGuides = window.PrismGuides || {}).cam = {
  screens: [
    {
      id: 'studio', title: ['สตูดิโอ (หน้าหลัก)', 'Studio (main screen)'],
      hot: {
        stage: { t: ['เวที — ภาพที่คนอื่นจะเห็น', 'The stage — what others will see'], d: ['ทุกอย่างบนเวทีนี้คือภาพที่ส่งออกไปเป็นกล้อง คลิกเลือกของชิ้นไหนก็ลากย้าย ย่อขยาย หมุนได้ทันที ลากไฟล์รูปจากเครื่องมาวางตรงนี้ หรือกด Ctrl+V วางรูปที่คัดลอกไว้ก็ได้', 'Everything on this stage is what goes out as the camera. Click anything to move, resize or rotate it. Drop picture files here or paste one with Ctrl+V.'], keys: ['Ctrl+V', 'Del', 'Ctrl+Z'] },
        gizmo: { t: ['กรอบจับ — ย้าย ย่อ หมุน', 'Handles — move, resize, rotate'], d: ['จุดขาวที่มุมใช้ย่อขยาย จุดกลมด้านบนใช้หมุน ลากตรงกลางเพื่อย้าย ภาพจะดูดติดขอบและกึ่งกลางให้เอง', 'Corner dots resize, the round dot on top rotates, drag the middle to move. It snaps to edges and the centre.'], tip: ['กด Alt ค้างแล้วลากขอบ = ครอปภาพ · กด Shift ค้าง = ยืดได้อิสระไม่ล็อกสัดส่วน', 'Hold Alt and drag an edge to crop · hold Shift to stretch freely'], keys: ['Alt', 'Shift'] },
        vcam: { t: ['เริ่มกล้องเสมือน', 'Start virtual camera'], d: ['กดปุ่มนี้แล้ว Windows จะมีกล้องชื่อ "Prism Cam" เพิ่มขึ้นมา เปิด Discord / Zoom / Meet / OBS แล้วเลือกกล้องนี้ ภาพบนเวทีจะไปโผล่ที่นั่น', 'Press it and Windows gets a camera called "Prism Cam". Pick that camera in Discord, Zoom, Meet or OBS and the stage shows up there.'], tip: ['ต้องใช้ Windows 11 · ย่อโปรแกรมไว้ได้ ภาพยังส่งต่อ', 'Needs Windows 11 · keeps sending while minimised'] },
        camera: { t: ['เพิ่มกล้อง', 'Add a camera'], d: ['เลือกเว็บแคมที่ต่ออยู่ กล้องจะเป็นเลเยอร์หนึ่งบนเวที ใส่ได้หลายกล้องพร้อมกัน', 'Pick a connected webcam — it becomes a layer on the stage. You can use several cameras at once.'], s: ['ใส่เว็บแคมลงเวที', 'Put a webcam on the stage'] },
        screen: { t: ['จับหน้าจอ / หน้าต่าง', 'Capture a screen or window'], d: ['โชว์หน้าจอทั้งจอ หรือเฉพาะหน้าต่างโปรแกรมเดียว เหมาะกับสอนหรือแชร์เกม', 'Show a whole screen or one app window — great for teaching or sharing a game.'] },
        media: { t: ['เพิ่มรูป / วิดีโอ', 'Add a picture / video'], d: ['ใส่รูปหรือคลิปวิดีโอจากเครื่อง ใช้ทำพื้นหลัง โลโก้ หรือคลิปวนซ้ำ ไฟล์จะถูกเก็บในคลังให้ใช้ซ้ำได้', 'Add pictures or video files — backgrounds, logos, looping clips. They are kept in the Library for later.'], keys: ['Ctrl+V'] },
        deco: { t: ['ข้อความ · สติกเกอร์ · รูปทรง · กรอบ', 'Text · stickers · shapes · frames'], d: ['ของตกแต่งสำหรับทำแถบชื่อ ป้าย LIVE กรอบกล้อง หรือพื้นหลังสี ทุกชิ้นปรับสี มุมโค้ง เงา และทำแอนิเมชันได้', 'Decorations for name bars, LIVE badges, camera frames or colour backgrounds. Each can be recoloured, rounded, shadowed and animated.'] },
        area: { t: ['พื้นที่แอนิเมชัน', 'Animation area'], d: ['กล่องที่เก็บหลายเลเยอร์ไว้ด้วยกัน ย้ายหรือทำแอนิเมชันทั้งกล่องได้เหมือนเป็นชิ้นเดียว ใช้ทำสไลด์โชว์ หรือชุดของที่โผล่พร้อมกัน', 'A box that holds several layers together. Move or animate the whole box as one piece — handy for slideshows or things that appear together.'], tip: ['ดับเบิลคลิกเพื่อเข้าไปแก้ข้างใน · Esc เพื่อออก · Ctrl+G จับของที่เลือกใส่กล่อง', 'Double-click to edit inside · Esc to leave · Ctrl+G groups the selection'], keys: ['Ctrl+G', 'Esc'] },
        handfx: { t: ['เอฟเฟกต์มือ', 'Hand effects'], d: ['เส้นนีออนตามนิ้ว วาดในอากาศ หรือของที่ลอยตามมือ ใช้ AI จับมือจากกล้อง ไม่ต้องมีอุปกรณ์เสริม', 'Neon trails on your fingers, drawing in the air, or things that ride your hand — AI hand tracking from the camera, no extra hardware.'] },
        face: { t: ['ใบหน้า — ติดหน้า · ลาย · VTuber', 'Face — stickers · paint · VTuber'], d: ['สติกเกอร์ที่ติดตามหน้า (แว่น หมวก หูแมว) ลายบนหน้า หรือตัวการ์ตูน VTuber ที่ขยับตามหน้าคุณ ทั้งหมดทำงานในเครื่อง', 'Stickers that follow your face (glasses, hats, cat ears), face paint, or a VTuber avatar that moves with you — all on your PC.'] },
        anim: { t: ['โหมดแอนิเมชัน', 'Animation mode'], d: ['เปิดไทม์ไลน์เพื่อทำให้ของบนเวทีขยับ: เลื่อนเข้า จางหาย เด้ง หมุน มีพรีเซ็ตสำเร็จรูปให้กดได้เลย', 'Opens the timeline to make things move: slide in, fade, bounce, spin — with ready-made presets.'] },
        tabs: { t: ['แท็บแผงด้านขวา', 'Right panel tabs'], d: ['เลเยอร์ (ลำดับของบนเวที) · ปรับแต่ง (ตำแหน่ง สี AI) · ติดตาม (มือ/ใบหน้า) · คลัง (รูปและวิดีโอที่เคยใช้)', 'Layers (stage order) · Settings (position, colour, AI) · Tracking (hands/face) · Library (pictures and videos you used)'] },
        layers: { t: ['รายการเลเยอร์', 'Layer list'], d: ['ของบนเวทีทุกชิ้นเรียงจากบนลงล่าง อันบนสุดอยู่หน้าสุด ลากสลับลำดับได้ คลิกขวาดูเมนูเพิ่ม เอาเมาส์ชี้จะเห็นภาพตัวอย่าง', 'Every item on the stage, top = front. Drag to reorder, right-click for more, hover for a live preview.'], keys: ['F2', 'Ctrl+D', 'Ctrl+C', 'Ctrl+X'] },
        eye: { t: ['ซ่อน / แสดง', 'Hide / show'], d: ['กดรูปตาเพื่อซ่อนชั่วคราว กด Alt + รูปตา = ให้เห็นอันนี้อันเดียว', 'Click the eye to hide for now. Alt + eye = show only this one.'], keys: ['Ctrl+H', 'Ctrl+Shift+H'] },
        scenes: { t: ['ซีน', 'Scenes'], d: ['เตรียมหลายฉากไว้ เช่น "เริ่มสตรีม" "กำลังเล่น" "พักครู่" แล้วกดสลับได้ทันทีระหว่างไลฟ์', 'Prepare several scenes like "Starting", "Playing", "Break" and switch instantly while live.'] },
        size: { t: ['ขนาดภาพ', 'Picture size'], d: ['ความละเอียดของภาพที่ส่งออก 720p / 1080p / แนวตั้งสำหรับมือถือ / จัตุรัส เปลี่ยนแล้วของบนเวทีปรับตามให้เอง', 'Output resolution: 720p, 1080p, vertical or square. Everything on the stage follows when you change it.'] },
        fps: { t: ['FPS กล้อง', 'Camera FPS'], d: ['30 หรือ 60 ภาพต่อวินาที สำหรับกล้องและวิดีโอที่อัด (กล้องเสมือนส่งสูงสุด 30)', '30 or 60 frames per second for cameras and recordings (the virtual camera sends up to 30).'] },
        speed: { t: ['แผงความเร็ว', 'Speed panel'], d: ['คลิกตัวเลข fps เพื่อดูว่าเครื่องทำงานหนักแค่ไหน และเปิด "โหมดเครื่องเบา" ถ้าเครื่องช้า', 'Click the fps number to see how hard the PC works and turn on "light mode" on slower PCs.'] },
        undo: { t: ['ย้อนกลับ', 'Undo'], d: ['ย้อนสิ่งที่เพิ่งทำ ทำงานแยกตามโซนที่เมาส์อยู่ (เวที / แอนิเมชัน / ตั้งค่ามือ)', 'Undo the last change — separately for the zone under the mouse (stage / animation / hand settings).'], keys: ['Ctrl+Z', 'Ctrl+Y'] },
        snap: { t: ['ถ่ายภาพ', 'Snapshot'], d: ['เซฟภาพนิ่งของเวทีตอนนี้เป็นไฟล์ PNG', 'Save the stage right now as a PNG picture.'] },
        rec: { t: ['อัดวิดีโอ', 'Record'], d: ['อัดภาพบนเวทีเป็นวิดีโอ (WebM) กดอีกครั้งเพื่อหยุดและบันทึก', 'Record the stage as a video (WebM). Press again to stop and save.'] },
        theme: { t: ['ภาษา · โหมดมืด · เกี่ยวกับ', 'Language · dark mode · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด และปุ่ม ⓘ ดูเวอร์ชันและอัปเดตเป็นเวอร์ชันใหม่ได้ในคลิกเดียว', 'Switch Thai/English and light/dark; ⓘ shows the version and updates in one click.'] },
      },
    },
    {
      id: 'props', title: ['ปรับแต่งเลเยอร์', 'Layer settings'],
      hot: {
        place: { t: ['ตำแหน่งและขนาด', 'Position & size'], d: ['ปุ่มลัดจัดวาง: เต็มจอ พอดีจอ กึ่งกลาง วงกลม ครึ่งซ้าย/ขวา มุมจอ (ภาพซ้อนภาพ) และพิมพ์ตัวเลข X Y W H ได้ตรง ๆ', 'Quick layouts: fill, fit, centre, circle, left/right half, corners (picture-in-picture) — or type X Y W H.'] },
        handf: { t: ['ติดตามมือ', 'Follow a hand'], d: ['ติ๊กแล้วเลเยอร์นี้จะลอยตามมือคุณ เช่น ไฟในมือ ดาบ ป้ายข้อความ', 'Tick it and this layer rides your hand — a flame, a sword, a sign.'] },
        facef: { t: ['ติดตามใบหน้า', 'Follow the face'], d: ['ติ๊กแล้วเลเยอร์นี้ติดไปกับหน้า หมุนตามเวลาเอียงหัว ใช้กับแว่น หมวก หน้ากาก', 'Tick it and the layer sticks to your face and turns with your head — glasses, hats, masks.'] },
        shape: { t: ['รูปร่างและกรอบ', 'Shape & border'], d: ['เปลี่ยนเป็นวงรี/วงกลม ครอปภาพ ปรับมุมโค้ง ความหนากรอบ และเงา', 'Make it an ellipse or circle, crop, round the corners, add a border and shadow.'] },
        filter: { t: ['ฟิลเตอร์และสี', 'Filters & colour'], d: ['ฟิลเตอร์สำเร็จรูป (สดใส อบอุ่น ขาวดำ วินเทจ…) และปรับความสว่าง คอนทราสต์ ความสดเอง', 'Ready filters (vivid, warm, mono, vintage…) plus brightness, contrast and saturation.'] },
        gizmo: { t: ['ของที่เลือกอยู่', 'The selected item'], d: ['แผงนี้ปรับเฉพาะของที่เลือก ถ้าเลือกหลายชิ้นพร้อมกัน (Ctrl+คลิก) การปรับจะใช้กับทุกชิ้น', 'This panel edits the selected item. Select several (Ctrl+click) and changes apply to all of them.'], keys: ['Ctrl+click'] },
      },
    },
    {
      id: 'props2', title: ['ฟิลเตอร์ · AI · กรีนสกรีน', 'Filters · AI · green screen'],
      hot: {
        filter: { t: ['ฟิลเตอร์และสี', 'Filters & colour'], d: ['กดฟิลเตอร์ที่ชอบได้เลย แล้วค่อยเลื่อนปรับละเอียด', 'Tap a filter you like, then fine-tune with the sliders.'] },
        ai: { t: ['พื้นหลัง AI', 'AI background'], d: ['ลบพื้นหลังหลังตัวคุณออก หรือเบลอให้ดูโปร โดยไม่ต้องมีผ้าเขียว AI ทำงานในเครื่อง ไม่ส่งภาพไปไหน', 'Remove or blur what is behind you — no green screen needed. The AI runs on your PC; nothing is uploaded.'], tip: ['ใส่รูปพื้นหลังเป็นเลเยอร์ไว้ใต้กล้อง จะได้ฉากใหม่ทันที', 'Put a picture layer under the camera to get a new backdrop.'] },
        chroma: { t: ['Chroma key (กรีนสกรีน)', 'Chroma key (green screen)'], d: ['ถ้ามีผ้าเขียวจริง ใช้อันนี้จะคมกว่า AI เลือกสีที่จะลบ แล้วปรับความใกล้เคียงและขอบ', 'If you have a real green screen this is sharper than AI: pick the colour to remove, then tune similarity and edges.'] },
        blend: { t: ['การผสมสี', 'Blend mode'], d: ['ผสมเลเยอร์กับของข้างล่างแบบ Screen / Multiply / Overlay ใช้ทำแสงฟุ้ง เงา หรือเอฟเฟกต์ไฟ', 'Mix the layer with what is below (Screen, Multiply, Overlay…) for glows, shadows or light effects.'] },
      },
    },
    {
      id: 'lib', title: ['คลัง', 'Library'],
      hot: {
        search: { t: ['ค้นหาในคลัง', 'Search the library'], d: ['ทุกรูปและวิดีโอที่เคยใส่จะเก็บไว้ที่นี่ ค้นชื่อได้ ไม่ต้องหาไฟล์ใหม่', 'Every picture and video you added lives here — search by name instead of hunting for files.'] },
        filter: { t: ['กรองชนิด', 'Filter by type'], d: ['ดูเฉพาะรูป วิดีโอ หรือเทมเพลตที่บันทึกไว้', 'Show only pictures, videos or saved templates.'] },
        grid: { t: ['ไฟล์ในคลัง', 'Library items'], d: ['คลิก = ใส่ลงเวที · ลากไปวางบนเวทีหรือในพื้นที่แอนิเมชันได้ · คลิกขวาดูเมนู', 'Click = add to the stage · drag onto the stage or into an area · right-click for more.'] },
      },
    },
    {
      id: 'track', title: ['ติดตามมือและใบหน้า', 'Hand & face tracking'],
      hot: {
        hand: { t: ['การจับมือ', 'Hand tracking'], d: ['เปิด/ปิด AI จับมือจากกล้อง เลือกจำนวนมือ ความนุ่มนวล และเลือกใช้การ์ดจอหรือ CPU', 'Turn AI hand tracking on/off, choose how many hands, smoothing, and GPU or CPU.'] },
        facet: { t: ['การจับใบหน้า', 'Face tracking'], d: ['เปิดเองอัตโนมัติเมื่อในซีนมีของติดหน้า ปรับความไวของสีหน้า และ "ปรับให้เข้ากับหน้าคุณ" ใน 3 วินาที', 'Starts by itself when the scene uses the face. Tune expression sensitivity and "fit to your face" in 3 seconds.'] },
        profile: { t: ['ปรับให้เข้ากับมือคุณ', 'Fit to your hands'], d: ['สอนท่ามือของคุณเองได้ (กด F9 โหมดสอน) โปรแกรมจะจำท่าเฉพาะของคุณ', 'Teach your own hand poses (F9 teaching mode) and it learns your way of doing them.'], keys: ['F9'] },
        ride: { t: ['ของลอยตามมือ', 'Things that ride the hand'], d: ['ใส่เอฟเฟกต์มือ ข้อความติดมือ หรือสติกเกอร์ติดมือในคลิกเดียว', 'Add a hand effect, hand text or hand sticker in one click.'] },
      },
    },
    {
      id: 'track2', title: ['ท่ามือสั่งงาน', 'Gesture commands'],
      hot: {
        ride: { t: ['ของลอยตามมือ', 'Things that ride the hand'], d: ['เลเยอร์ไหนก็ติดมือได้ ไม่ใช่แค่สติกเกอร์', 'Any layer can follow a hand, not only stickers.'] },
        gest: { t: ['ท่ามือ / สีหน้า → คำสั่ง', 'Pose / expression → command'], d: ['ผูกท่ามือหรือสีหน้ากับการกระทำ เช่น ชูสองนิ้ว = สลับซีน ยิ้ม = เปิดสติกเกอร์ ทำท่าค้างไว้ = เล่นแอนิเมชัน', 'Bind a hand pose or expression to an action: peace sign = switch scene, smile = show a sticker, hold a pose = play an animation.'] },
        pc: { t: ['ควบคุมเครื่องนี้', 'Control this PC'], d: ['ให้ท่ามือกดคีย์ลัด คลิกเมาส์ หรือเปิดโปรแกรมได้ ปลอดภัยไว้ก่อน: ทำงานเฉพาะตอนเปิดใช้เท่านั้น', 'Let poses press shortcuts, click or open programs. Safe by default: it only works while armed.'], tip: ['กด Ctrl+Shift+F12 เพื่อปิดทันทีทุกเมื่อ', 'Press Ctrl+Shift+F12 to switch it off instantly'], keys: ['Ctrl+Shift+F12'] },
      },
    },
    {
      id: 'anim', title: ['โหมดแอนิเมชัน', 'Animation mode'],
      hot: {
        clip: { t: ['คลิปแอนิเมชัน', 'Animation clip'], d: ['แต่ละซีนมีได้หลายคลิป เช่น "เปิดตัว" "ปิดท้าย" เลือก เปลี่ยนชื่อ หรือสร้างใหม่ตรงนี้', 'Each scene can have several clips like "Intro" or "Outro". Pick, rename or make new ones here.'] },
        transport: { t: ['ปุ่มเล่น', 'Playback'], d: ['เล่น/หยุด ไปคีย์ก่อนหน้า/ถัดไป ไปต้น/ท้ายคลิป และเลือกให้เล่นครั้งเดียว วนซ้ำ หรือกลับไปกลับมา', 'Play/stop, jump to previous/next key or start/end, and choose once / loop / ping-pong.'], keys: ['Space', 'J', 'L', 'Home', 'End'] },
        time: { t: ['เวลาและความยาว', 'Time & length'], d: ['พิมพ์วินาทีเพื่อกระโดดไปตรงนั้น คลิกความยาวเพื่อแก้', 'Type seconds to jump there; click the length to change it.'] },
        autokey: { t: ['คีย์อัตโนมัติ', 'Auto-key'], d: ['เปิดไว้แล้วแค่ลาก ย่อ หมุนของบนเวที คีย์เฟรมจะเกิดขึ้นเองตรงเวลาของหัวเล่น', 'With it on, just move, resize or rotate on the stage — keyframes appear at the playhead by themselves.'], keys: ['K'] },
        presets: { t: ['พรีเซ็ต', 'Presets'], d: ['แอนิเมชันสำเร็จรูป เลื่อนเข้า จางเข้า เด้ง ซูม พิมพ์ทีละตัว — กดทีเดียวใช้ได้เลย', 'Ready animations — slide, fade, bounce, zoom, typewriter. One click.'] },
        done: { t: ['เสร็จสิ้น', 'Done'], d: ['ออกจากโหมดแอนิเมชันกลับสู่สตูดิโอ', 'Leave animation mode and go back to the studio.'] },
        stage: { t: ['เวที (โหมดแอนิเมชัน)', 'Stage (animation mode)'], d: ['ลากของบนเวทีเพื่อสร้างคีย์ เส้นทางการเคลื่อนที่จะแสดงให้เห็น', 'Drag things on the stage to make keys; the motion path is drawn for you.'] },
        tltabs: { t: ['ไทม์ไลน์ / กราฟ', 'Timeline / graph'], d: ['ไทม์ไลน์ = จัดเวลาคีย์ · กราฟ = ปรับความเร็วด้วยเส้นโค้งแบบละเอียด', 'Timeline = timing of keys · Graph = fine speed curves.'] },
        keytools: { t: ['เครื่องมือคีย์', 'Key tools'], d: ['ใส่คีย์ ลบ คัดลอก วาง กลับลำดับ ยืดเวลา และเหลื่อมเวลาระหว่างเลเยอร์', 'Add, delete, copy, paste, reverse, stretch and stagger keys between layers.'], keys: ['K', 'Delete', 'Ctrl+C', 'Ctrl+V'] },
        ease: { t: ['ลักษณะการเคลื่อนไหว', 'Easing'], d: ['เลือกว่าจะขยับแบบเรียบ นุ่ม เด้ง สปริง หรือหยุดนิ่ง (มีมากกว่า 30 แบบ)', 'Choose how it moves: linear, smooth, back, bounce, spring, hold — 30+ kinds.'] },
        tracks: { t: ['แถวเลเยอร์', 'Layer rows'], d: ['แต่ละแถวคือของหนึ่งชิ้น จุดบนแถวคือคีย์เฟรม ลากเพื่อเลื่อนเวลา แถว "เหตุการณ์" ใช้สั่งงานตอนถึงเวลา', 'Each row is one item and the dots are keyframes — drag to retime. The "Events" row runs commands at a time.'] },
        side: { t: ['แผงคีย์เฟรม · คลิป · ทริกเกอร์', 'Keyframes · clip · triggers'], d: ['แก้ค่าของคีย์ที่เลือก ตั้งค่าคลิป และกำหนดว่าคลิปจะเล่นเมื่อไหร่ (ท่ามือ คีย์ลัด เริ่มซีน)', 'Edit the selected keys, clip settings, and when the clip plays (hand pose, hotkey, scene start).'] },
      },
    },
  ],

  demos: [
    {
      id: 'discord', title: ['ใช้ Prism Cam เป็นกล้องใน Discord', 'Use Prism Cam as your Discord camera'], sub: ['เริ่มต้นใช้งาน', 'Getting started'],
      steps: [
        { s: 'studio', h: 'camera', a: 'click', say: ['กด "เพิ่มกล้อง" แล้วเลือกเว็บแคมของคุณ', 'Click "Add camera" and pick your webcam'] },
        { s: 'studio', h: 'stage', a: 'hover', say: ['กล้องขึ้นบนเวที จัดตำแหน่งหรือแต่งเพิ่มได้ตามใจ', 'Your camera appears on the stage — place it and decorate as you like'] },
        { s: 'studio', h: 'vcam', a: 'click', say: ['กด "เริ่มกล้องเสมือน" — Windows จะมีกล้องชื่อ Prism Cam', 'Click "Start virtual camera" — Windows now has a camera called Prism Cam'] },
        { say: ['เปิด Discord → ตั้งค่าผู้ใช้ → เสียงและวิดีโอ → กล้อง → เลือก "Prism Cam" เสร็จ!', 'Open Discord → User Settings → Voice & Video → Camera → choose "Prism Cam". Done!'] },
      ],
    },
    {
      id: 'aibg', title: ['ลบพื้นหลังด้วย AI (ไม่ต้องมีผ้าเขียว)', 'Remove your background with AI (no green screen)'], sub: ['AI', 'AI'],
      steps: [
        { s: 'studio', h: 'layers', a: 'click', say: ['เลือกเลเยอร์กล้องของคุณในรายการ', 'Select your camera layer in the list'] },
        { s: 'studio', h: 'tabs', a: 'click', say: ['ไปที่แท็บ "ปรับแต่ง"', 'Open the "Settings" tab'], then: 'props2' },
        { s: 'props2', h: 'ai', a: 'click', say: ['ที่ "พื้นหลัง AI" เลือก "ลบพื้นหลัง" (หรือ "เบลอพื้นหลัง")', 'Under "AI background" choose "Remove background" (or "Blur background")'] },
        { s: 'studio', h: 'media', a: 'click', say: ['อยากได้ฉากใหม่? เพิ่มรูปที่ชอบ', 'Want a new backdrop? Add a picture you like'] },
        { s: 'studio', h: 'layers', a: 'drag', to: 'layers', say: ['ลากเลเยอร์รูปไปไว้ล่างสุด ให้อยู่ข้างหลังตัวคุณ', 'Drag the picture layer to the bottom so it sits behind you'] },
      ],
    },
    {
      id: 'live', title: ['ทำแถบ "LIVE" แบบสตรีมเมอร์', 'Make a streamer "LIVE" bar'], sub: ['ตกแต่ง', 'Decorate'],
      steps: [
        { s: 'studio', h: 'deco', a: 'click', say: ['กด "รูปทรง" ได้แถบสีไล่เฉด', 'Click "Shape" to get a gradient bar'] },
        { s: 'studio', h: 'gizmo', a: 'drag', to: 'stage', say: ['ลากไปไว้มุมบน แล้วย่อให้เป็นแถบยาว', 'Drag it to the top corner and resize it into a bar'] },
        { s: 'studio', h: 'deco', a: 'click', say: ['กด "ข้อความ" แล้วพิมพ์ LIVE หรือชื่อช่องของคุณ', 'Click "Text" and type LIVE or your channel name'] },
        { s: 'props', h: 'shape', a: 'click', say: ['ปรับมุมโค้งให้เป็นแคปซูล ใส่เงานิดหน่อย', 'Round the corners into a capsule and add a little shadow'] },
        { s: 'studio', h: 'anim', a: 'click', say: ['อยากให้เลื่อนเข้ามา? ไปต่อที่ "ทำให้ข้อความขยับ"', 'Want it to slide in? Continue with "Make text move"'] },
      ],
    },
    {
      id: 'anim', title: ['ทำให้ข้อความขยับ (แอนิเมชัน)', 'Make text move (animation)'], sub: ['แอนิเมชัน', 'Animation'],
      steps: [
        { s: 'studio', h: 'anim', a: 'click', say: ['เลือกข้อความ แล้วกดปุ่มโหมดแอนิเมชัน', 'Select the text, then click the animation-mode button'], then: 'anim' },
        { s: 'anim', h: 'presets', a: 'click', say: ['ทางลัด: กด "พรีเซ็ต" แล้วเลือก เช่น "เลื่อนเข้าจากซ้าย"', 'Shortcut: click "Presets" and pick e.g. "Slide in from left"'] },
        { s: 'anim', h: 'autokey', a: 'hover', say: ['หรือทำเอง: เปิด "คีย์อัตโนมัติ" ไว้', 'Or by hand: keep "Auto-key" on'] },
        { s: 'anim', h: 'tracks', a: 'click', say: ['เลื่อนหัวเล่นไปเวลาที่ต้องการ', 'Move the playhead to a time'] },
        { s: 'anim', h: 'stage', a: 'drag', to: 'stage', say: ['ลากข้อความไปตำแหน่งใหม่ — คีย์เฟรมเกิดขึ้นเอง', 'Drag the text somewhere new — a keyframe appears by itself'] },
        { s: 'anim', h: 'transport', a: 'click', k: 'Space', say: ['กดเล่นดูผล (Space)', 'Press play to watch (Space)'] },
        { s: 'anim', h: 'side', a: 'click', say: ['แท็บ "ทริกเกอร์" ตั้งให้เล่นเองตอนเริ่มซีน กดคีย์ หรือทำท่ามือ', 'In "Triggers", make it play on scene start, a hotkey or a hand pose'] },
        { s: 'anim', h: 'done', a: 'click', say: ['กด "เสร็จสิ้น" กลับสู่สตูดิโอ', 'Click "Done" to go back to the studio'] },
      ],
    },
    {
      id: 'gesture', title: ['ชูมือแล้วสั่งงาน', 'Run things with a hand pose'], sub: ['ท่ามือ', 'Gestures'],
      steps: [
        { s: 'studio', h: 'tabs', a: 'click', say: ['ไปที่แท็บ "ติดตาม" (รูปมือ)', 'Open the "Tracking" tab (hand icon)'], then: 'track' },
        { s: 'track', h: 'hand', a: 'click', say: ['เปิด "การจับมือ" — ต้องมีเลเยอร์กล้องอยู่บนเวที', 'Turn on "Hand tracking" — you need a camera layer on the stage'] },
        { s: 'track2', h: 'gest', a: 'click', say: ['ที่ "ท่ามือ / สีหน้า → คำสั่ง" กดเพิ่ม แล้วเลือกท่า เช่น ชูสองนิ้ว', 'Under "Pose / expression → command", add one and pick a pose, e.g. peace sign'] },
        { s: 'track2', h: 'gest', a: 'hover', say: ['เลือกสิ่งที่จะเกิด: สลับซีน เล่นแอนิเมชัน แสดง/ซ่อนเลเยอร์', 'Choose what happens: switch scene, play an animation, show/hide a layer'] },
        { s: 'track2', h: 'pc', a: 'hover', say: ['อยากให้กดคีย์หรือเปิดโปรแกรมด้วย ต้องเปิด "ควบคุมเครื่องนี้" (ปิดด่วน Ctrl+Shift+F12)', 'To press keys or open apps, arm "Control this PC" (instant off: Ctrl+Shift+F12)'] },
      ],
    },
    {
      id: 'scenes', title: ['เตรียมหลายซีนแล้วสลับระหว่างไลฟ์', 'Prepare scenes and switch while live'], sub: ['ซีน', 'Scenes'],
      steps: [
        { s: 'studio', h: 'scenes', a: 'click', say: ['กด + เพิ่มซีนใหม่ เช่น "พักครู่"', 'Click + to add a new scene, e.g. "Break"'] },
        { s: 'studio', h: 'stage', a: 'hover', say: ['แต่งซีนนี้ต่างจากซีนแรก ใส่ข้อความ "เดี๋ยวมา"', 'Decorate it differently, e.g. a "Be right back" text'] },
        { s: 'studio', h: 'scenes', a: 'click', say: ['ระหว่างไลฟ์ กดชื่อซีนเพื่อสลับทันที คนดูเห็นเปลี่ยนตาม', 'While live, click a scene name to switch — viewers see it right away'] },
        { s: 'studio', h: 'rec', a: 'click', say: ['อยากเก็บไว้ดู? กดอัดวิดีโอจากเวทีได้เลย', 'Want to keep it? Record the stage as a video'] },
      ],
    },
  ],

  feats: [
    { i: '📷', t: ['กล้องเสมือนของจริง', 'A real virtual camera'], d: ['ใช้กลไกของ Windows 11 เอง ไม่ต้องลงไดรเวอร์ เลือกได้ในทุกโปรแกรมที่ใช้กล้อง', 'Built on Windows 11 itself — no driver to install, works in every app that uses a camera.'] },
    { i: '🧠', t: ['AI ในเครื่อง', 'On-device AI'], d: ['ลบ/เบลอพื้นหลัง จับมือ จับใบหน้า ทำงานบนการ์ดจอในเครื่อง ไม่ส่งภาพขึ้นเน็ต', 'Background removal, hand and face tracking run on your GPU — your picture never leaves the PC.'] },
    { i: '✋', t: ['ท่ามือ = ปุ่ม', 'Hand poses as buttons'], d: ['สลับซีน เล่นแอนิเมชัน หรือกดคีย์ลัดด้วยท่ามือ สอนท่าของตัวเองได้', 'Switch scenes, play animations or press shortcuts with a pose — and teach your own.'] },
    { i: '😺', t: ['VTuber และของติดหน้า', 'VTuber & face stickers'], d: ['ตัวการ์ตูนที่ขยับตามหน้า ของติดหน้า และลายบนหน้า หลายคนพร้อมกันได้ถึง 4 หน้า', 'Avatars that move with you, stickers and face paint — up to 4 faces at once.'] },
    { i: '🎞', t: ['แอนิเมชันแบบโปร', 'Pro animation'], d: ['ไทม์ไลน์ กราฟความเร็ว 30+ easing พรีเซ็ต เส้นทางการเคลื่อนที่ ทำได้เหมือนโปรแกรมตัดต่อ', 'Timeline, speed graph, 30+ easings, presets and motion paths — like a video editor.'] },
    { i: '🧩', t: ['ซีน พื้นที่ และเทมเพลต', 'Scenes, areas, templates'], d: ['เตรียมหลายฉาก รวมของเป็นกล่องเดียว บันทึกเป็นเทมเพลตเพื่อใช้ซ้ำ', 'Prepare scenes, group things into areas and save them as reusable templates.'] },
    { i: '⚡', t: ['ลื่นแม้เครื่องธรรมดา', 'Smooth on modest PCs'], d: ['แปลงภาพบนการ์ดจอ มีโหมดเครื่องเบาที่เปิดให้เองบนการ์ดจอออนบอร์ด', 'Converts frames on the GPU, with a light mode that switches on by itself on integrated graphics.'] },
    { i: '🛟', t: ['ไม่หายง่าย', 'Hard to lose work'], d: ['บันทึกงานอัตโนมัติพร้อมสำเนาก่อนหน้า ถอดกล้องแล้วเสียบใหม่ก็กลับมาเอง', 'Saves automatically with a backup copy; unplug and replug a camera and it comes back.'] },
  ],

  keys: [
    { k: 'Ctrl+Z / Ctrl+Y', d: ['ย้อนกลับ / ทำซ้ำ', 'Undo / redo'] },
    { k: 'Ctrl+C / Ctrl+X / Ctrl+V', d: ['คัดลอก / ตัด / วางเลเยอร์ (วางรูปจากที่อื่นได้ด้วย)', 'Copy / cut / paste layers (pastes pictures too)'] },
    { k: 'Ctrl+D', d: ['ทำสำเนาเลเยอร์', 'Duplicate layer'] },
    { k: 'Del', d: ['ลบเลเยอร์ที่เลือก', 'Delete the selected layer'] },
    { k: 'F2', d: ['เปลี่ยนชื่อ', 'Rename'] },
    { k: 'Ctrl+G', d: ['รวมที่เลือกเป็นพื้นที่แอนิเมชัน', 'Group the selection into an area'] },
    { k: 'Ctrl+H / Ctrl+Shift+H', d: ['ซ่อน / แสดงทั้งหมด', 'Hide / show all'] },
    { k: 'Alt', d: ['ค้างแล้วลากขอบ = ครอป · Alt + รูปตา = โชว์อันเดียว', 'Hold and drag an edge = crop · Alt + eye = solo'] },
    { k: 'Shift', d: ['ค้างระหว่างย่อขยาย = ไม่ล็อกสัดส่วน', 'Hold while resizing = free proportions'] },
    { k: 'Esc', d: ['ออกจากพื้นที่ / ยกเลิกการลาก', 'Leave an area / cancel a drag'] },
    { k: 'Space', d: ['เล่น / หยุด (โหมดแอนิเมชัน)', 'Play / stop (animation mode)'] },
    { k: 'K', d: ['ใส่คีย์เฟรมให้ทุกเลเยอร์ที่เลือก', 'Key every selected layer'] },
    { k: 'J / L', d: ['ไปคีย์ก่อนหน้า / ถัดไป', 'Previous / next key'] },
    { k: 'F9', d: ['โหมดสอนท่ามือ', 'Hand-pose teaching mode'] },
    { k: 'Ctrl+Shift+F12', d: ['ปิดการควบคุมเครื่องด้วยมือทันที', 'Disarm hand control of the PC instantly'] },
  ],

  faq: [
    { q: ['ต้องใช้ Windows รุ่นไหน?', 'Which Windows do I need?'], a: ['กล้องเสมือนต้องใช้ Windows 11 (ใช้ระบบกล้องเสมือนที่มากับ Windows) ส่วนสตูดิโอ ถ่ายภาพ และอัดวิดีโอใช้ได้ปกติ', 'The virtual camera needs Windows 11 (it uses the virtual camera built into Windows). The studio, snapshots and recording work as usual.'] },
    { q: ['Discord ไม่เห็นกล้อง Prism Cam', 'Discord does not list Prism Cam'], a: ['กด "เริ่มกล้องเสมือน" ใน Prism Cam ก่อน แล้วปิด-เปิด Discord ใหม่ (Discord อ่านรายชื่อกล้องตอนเปิดโปรแกรม)', 'Start the virtual camera in Prism Cam first, then restart Discord (it reads the camera list when it opens).'] },
    { q: ['ภาพกล้องของฉันถูกส่งไปที่ไหนไหม?', 'Is my camera sent anywhere?'], a: ['ไม่ AI ทุกตัวทำงานในเครื่อง ไม่มีบัญชี ไม่มีการเก็บข้อมูล ภาพไปถึงเฉพาะโปรแกรมที่คุณเลือกกล้อง Prism Cam เท่านั้น', 'No. All AI runs on your PC, there is no account and no data collection. The picture only reaches apps where you pick the Prism Cam camera.'] },
    { q: ['เครื่องช้า / ภาพกระตุก ทำยังไง?', 'My PC is slow / the picture stutters'], a: ['คลิกตัวเลข fps ที่แถบล่าง เปิด "โหมดเครื่องเบา" และลดขนาดภาพเป็น 720p เครื่องที่ใช้การ์ดจอออนบอร์ดจะเปิดโหมดนี้ให้เองครั้งแรก', 'Click the fps number in the bottom bar, turn on "light mode" and use 720p. On integrated graphics light mode turns on by itself the first time.'] },
    { q: ['ควบคุมเครื่องด้วยมือปลอดภัยไหม?', 'Is hand control of my PC safe?'], a: ['ปิดไว้เป็นค่าเริ่มต้น ทำงานเฉพาะตอนที่คุณเปิดเอง และกด Ctrl+Shift+F12 เมื่อไหร่ก็ปิดทันที', 'It is off by default, only works while you arm it, and Ctrl+Shift+F12 switches it off instantly.'] },
    { q: ['ส่งภาพได้ละเอียดแค่ไหน?', 'What resolution does it send?'], a: ['กล้องเสมือนส่งได้ 1920×1080, 1280×720 หรือ 640×360 ที่ 30 fps ส่วนการอัดวิดีโอในโปรแกรมได้ถึง 60 fps', 'The virtual camera sends 1920×1080, 1280×720 or 640×360 at 30 fps; recordings inside the app go up to 60 fps.'] },
  ],
};
})();
