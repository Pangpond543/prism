(() => {
// Prism Size guide. Spots match tools/capture/jobs/size.js (demo drive D:\, not real files). Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).size = {
  screens: [
    {
      id: 'welcome', title: ['เริ่มสแกน', 'Start a scan'],
      hot: {
        drives: { t: ['การ์ดไดรฟ์', 'Drive cards'], d: ['ทุกไดรฟ์ในเครื่องพร้อมวงแหวนบอกว่าเต็มกี่ % กดการ์ดเพื่อสแกนทั้งไดรฟ์', 'Every drive with a ring showing how full it is. Click one to scan the whole drive.'] },
        quick: { t: ['โฟลเดอร์ด่วน', 'Quick folders'], d: ['สแกนเฉพาะเดสก์ท็อป ดาวน์โหลด เอกสาร หรือ "เลือกโฟลเดอร์อื่น…" เร็วกว่าสแกนทั้งไดรฟ์', 'Scan just Desktop, Downloads, Documents or "Choose another folder…" — faster than a whole drive.'] },
        engine: { t: ['ตัวสแกน Rust', 'The Rust scanner'], d: ['สแกนแบบขนานทุกคอร์ของ CPU ไดรฟ์ล้านไฟล์ใช้เวลาไม่กี่วินาที ผลสแกนถูกบันทึกไว้ เปิดโปรแกรมครั้งหน้าเห็นทันที', 'Scans on every CPU core in parallel — a million files in seconds. Results are saved so the next start shows them instantly.'] },
        theme: { t: ['ภาษา · โหมดมืด · เกี่ยวกับ', 'Language · dark mode · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด ปุ่ม ⓘ ดูเวอร์ชันและอัปเดต', 'Switch Thai/English and light/dark; ⓘ shows the version and updates.'] },
      },
    },
    {
      id: 'tree', title: ['ต้นไม้อวกาศ', 'Space tree'],
      hot: {
        stage: { t: ['ลูกแก้ว = โฟลเดอร์', 'Orbs = folders'], d: ['ยิ่งลูกใหญ่ ยิ่งกินพื้นที่มาก คลิกเพื่อกางโฟลเดอร์ ดับเบิลคลิกเพื่อหุบ ลากลูกแก้วไปวางบนอีกโฟลเดอร์ = ย้ายไฟล์จริง', 'The bigger the orb, the more space. Click to open a folder, double-click to close it. Drag an orb onto another folder = really move it.'], tip: ['Ctrl+คลิก หรือ Shift+ลาก เพื่อเลือกหลายอัน · คลิกขวาเพื่อเปิด เปลี่ยนชื่อ ลบลงถังขยะ', 'Ctrl+click or Shift+drag to pick several · right-click to open, rename or delete to the Recycle Bin'], keys: ['Ctrl+click', 'Shift+drag', 'Ctrl+Z'] },
        proj: { t: ['ฉายภาพ / ฉายโลโก้ไฟล์', 'Show pictures / file icons'], d: ['ให้ลูกแก้วแสดงภาพตัวอย่างของรูปและวิดีโอ หรือไอคอนของไฟล์ จะรู้ทันทีว่าข้างในคืออะไร', 'Let orbs show picture and video thumbnails or file icons, so you see what is inside at a glance.'] },
        crumbs: { t: ['ตำแหน่งที่ดูอยู่', 'Where you are'], d: ['ทางเดินของโฟลเดอร์ที่เปิดอยู่ คลิกชื่อไหนก็กระโดดกลับไปที่นั่น', 'The path of the open folder — click any part to jump back.'] },
        newscan: { t: ['สแกนใหม่', 'New scan'], d: ['กลับหน้าเลือกไดรฟ์/โฟลเดอร์ เพื่อสแกนที่อื่น', 'Back to the drive/folder picker to scan somewhere else.'] },
        dtree: { t: ['ต้นไม้อวกาศ', 'Space tree'], d: ['มุมมองลูกแก้วลอย เห็นภาพรวมสวยที่สุด', 'Floating glass orbs — the prettiest overview.'] },
        dtreemap: { t: ['Treemap', 'Treemap'], d: ['ไทล์สี่เหลี่ยม พื้นที่ = ขนาด เห็นไฟล์ใหญ่ชัดที่สุด', 'Rectangles whose area is their size — big files jump out.'] },
        dsun: { t: ['Sunburst', 'Sunburst'], d: ['วงแหวนซ้อนชั้นตามระดับโฟลเดอร์', 'Rings, one per folder level.'] },
        ddash: { t: ['แดชบอร์ด', 'Dashboard'], d: ['ตัวเลขสรุป ชนิดไฟล์ อายุไฟล์ ไฟล์และโฟลเดอร์ที่ใหญ่ที่สุด', 'Totals, file types, file ages, biggest files and folders.'] },
        dapps: { t: ['โปรแกรมที่ติดตั้ง', 'Installed apps'], d: ['ดูว่าโปรแกรมไหนกินพื้นที่และไม่ได้ใช้นาน กดถอนผ่านตัวถอนของโปรแกรมนั้นเอง', 'See which apps take space and are old; uninstall through each app’s own uninstaller.'] },
        dclean: { t: ['ทำความสะอาด', 'Cleaner'], d: ['ไฟล์ขยะ (temp, แคชเบราว์เซอร์, crash dump…) ไฟล์ซ้ำ ไฟล์ใหญ่และเก่า โฟลเดอร์ว่าง — ลบลงถังขยะเสมอ', 'Junk (temp, browser cache, crash dumps…), duplicates, big-and-old files, empty folders — always to the Recycle Bin.'] },
        dsearch: { t: ['ค้นหา', 'Search'], d: ['ค้นไฟล์ทั้งดิสก์พร้อมกรองขนาด ชนิด และอายุ', 'Search the disk live with size, type and age filters.'] },
        dshield: { t: ['สแกนไวรัส', 'Virus scan'], d: ['สั่ง Microsoft Defender สแกนโฟลเดอร์ที่เลือก แล้วรายงานผล', 'Ask Microsoft Defender to scan a folder and show the report.'] },
        st: { t: ['สรุปผลสแกน', 'Scan summary'], d: ['ขนาดรวม จำนวนไฟล์ และเวลาที่สแกน', 'Total size, number of files and when it was scanned.'] },
        zoom: { t: ['ซูม', 'Zoom'], d: ['ซูมเข้า/ออก และพอดีจอ (ใช้ล้อเมาส์ได้)', 'Zoom in/out and fit (the mouse wheel works too).'] },
        undo: { t: ['ย้อนกลับ', 'Undo'], d: ['ย้อนการย้าย/เปลี่ยนชื่อไฟล์ที่เพิ่งทำ', 'Undo the last move or rename.'], keys: ['Ctrl+Z'] },
        rescan: { t: ['อัปเดต', 'Update'], d: ['สแกนที่เดิมใหม่เพื่อให้ตัวเลขตรงกับตอนนี้', 'Rescan the same place so numbers match right now.'] },
        theme: { t: ['ภาษา · โหมดมืด · เกี่ยวกับ', 'Language · dark mode · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด ปุ่ม ⓘ ดูเวอร์ชันและอัปเดต', 'Switch Thai/English and light/dark; ⓘ shows the version and updates.'] },
      },
    },
    {
      id: 'treemap', title: ['Treemap', 'Treemap'],
      hot: {
        stage: { t: ['ไทล์ = ไฟล์และโฟลเดอร์', 'Tiles = files & folders'], d: ['พื้นที่ของแต่ละช่องเท่ากับขนาดจริง ช่องใหญ่คือตัวการที่กินพื้นที่ คลิกเพื่อเข้าไปดูข้างใน ลากไทล์ไปวางบนโฟลเดอร์อื่นเพื่อย้าย', 'Each tile’s area is its real size — the big ones are the space hogs. Click to go inside, drag a tile onto another folder to move it.'] },
        crumbs: { t: ['ย้อนขึ้น', 'Go back up'], d: ['คลิกชื่อโฟลเดอร์ด้านบนเพื่อถอยกลับ', 'Click a folder name at the top to go back.'] },
        dtreemap: { t: ['ปุ่ม Treemap', 'Treemap button'], d: ['สลับมุมมองได้ตลอด ข้อมูลเดียวกัน', 'Switch views any time — same data.'] },
      },
    },
    {
      id: 'sunburst', title: ['Sunburst', 'Sunburst'],
      hot: {
        stage: { t: ['วงแหวนตามชั้นโฟลเดอร์', 'Rings by folder level'], d: ['วงในคือโฟลเดอร์หลัก วงนอกคือโฟลเดอร์ย่อย ความกว้างของชิ้น = ขนาด คลิกชิ้นเพื่อซูมเข้า', 'Inner ring = top folders, outer rings = sub-folders, slice width = size. Click a slice to zoom in.'] },
        crumbs: { t: ['ตำแหน่ง', 'Where you are'], d: ['คลิกเพื่อถอยออก', 'Click to zoom back out.'] },
        dsun: { t: ['ปุ่ม Sunburst', 'Sunburst button'], d: ['มุมมองนี้เหมาะกับดูว่าโฟลเดอร์ซ้อนลึกตรงไหนกินที่', 'Best for seeing where deep folder nests eat space.'] },
      },
    },
    {
      id: 'dashboard', title: ['แดชบอร์ด', 'Dashboard'],
      hot: {
        stats: { t: ['ตัวเลขสรุป', 'Key numbers'], d: ['ขนาดรวม จำนวนไฟล์ ไฟล์ที่ไม่ได้แตะเกิน 1 ปี (ย้ายไปเก็บที่อื่นได้) และไฟล์ที่ใหญ่ที่สุด', 'Total size, file count, files untouched for over a year (could be archived) and the largest file.'] },
        types: { t: ['พื้นที่ตามชนิดไฟล์', 'Space by file type'], d: ['วิดีโอ เกม รูป เอกสาร… แต่ละชนิดใช้ไปเท่าไหร่ คลิกแถวเพื่อดูไฟล์ชนิดนั้น', 'How much video, games, pictures, documents… use. Click a row to see those files.'] },
        drives: { t: ['ไดรฟ์ในเครื่อง', 'Drives on this PC'], d: ['ทุกไดรฟ์ ใช้ไปเท่าไหร่ เหลือเท่าไหร่', 'Every drive, used and free.'] },
        ddash: { t: ['ปุ่มแดชบอร์ด', 'Dashboard button'], d: ['เปิดหน้าสรุปนี้ได้ทุกเมื่อ', 'Open this summary any time.'] },
      },
    },
    {
      id: 'dashboard2', title: ['ไฟล์ใหญ่ที่สุด', 'Biggest files'],
      hot: {
        d5a: { t: ['ไฟล์ที่ใหญ่ที่สุด', 'Biggest files'], d: ['รายชื่อไฟล์ใหญ่สุดพร้อมอายุ ตัวเลือกแรก ๆ ที่ควรลบหรือย้ายไปไดรฟ์อื่น คลิกขวาเพื่อเปิด ดูในโฟลเดอร์ หรือลบลงถังขยะ', 'The largest files with their age — the first candidates to delete or move. Right-click to open, show in folder or delete to the Recycle Bin.'] },
        d5b: { t: ['โฟลเดอร์ที่ใหญ่ที่สุด', 'Biggest folders'], d: ['โฟลเดอร์ระดับบนสุดเรียงตามขนาด พร้อม % ของทั้งหมด', 'Top folders by size with their share of the total.'] },
      },
    },
  ],

  demos: [
    {
      id: 'find', title: ['หาว่าอะไรกินพื้นที่ดิสก์', 'Find what is eating your disk'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'welcome', h: 'drives', a: 'click', say: ['กดการ์ดไดรฟ์ที่อยากรู้ เช่น D:', 'Click the drive you want to check, e.g. D:'], then: 'tree' },
        { s: 'tree', h: 'stage', a: 'hover', say: ['ลูกแก้วใหญ่ = โฟลเดอร์ที่กินที่มาก (ตัวอย่างนี้ Backups 53 GB)', 'Big orbs = big folders (here Backups, 53 GB)'] },
        { s: 'tree', h: 'stage', a: 'click', say: ['คลิกลูกแก้วเพื่อกางดูข้างใน', 'Click an orb to look inside'] },
        { s: 'tree', h: 'ddash', a: 'click', say: ['อยากเห็นเป็นรายชื่อ? ไปที่แดชบอร์ด', 'Prefer a list? Open the dashboard'], then: 'dashboard' },
        { s: 'dashboard', h: 'stats', a: 'hover', say: ['ดูตัวเลข "ไฟล์ที่ไม่ได้แตะเกิน 1 ปี" — มักย้ายออกได้เลย', 'Check "untouched for over a year" — often safe to move away'], then: 'dashboard2' },
        { s: 'dashboard2', h: 'd5a', a: 'hover', say: ['ไล่ดูไฟล์ใหญ่สุด คลิกขวาเพื่อลบลงถังขยะหรือเปิดโฟลเดอร์', 'Go through the biggest files — right-click to delete to the Recycle Bin or open the folder'] },
      ],
    },
    {
      id: 'move', title: ['ย้ายไฟล์ด้วยการลากบนแผนที่', 'Move files by dragging on the map'], sub: ['จัดไฟล์', 'Organise'],
      steps: [
        { s: 'tree', h: 'stage', a: 'click', say: ['กางโฟลเดอร์จนเห็นไฟล์ที่อยากย้าย', 'Open folders until you see the file to move'] },
        { s: 'tree', h: 'stage', a: 'drag', to: 'stage', say: ['ลากลูกแก้วไปวางบนลูกแก้วของโฟลเดอร์ปลายทาง — ไฟล์ย้ายจริงในเครื่อง', 'Drag the orb onto the destination folder’s orb — the file really moves'] },
        { s: 'tree', h: 'undo', a: 'click', k: 'Ctrl+Z', say: ['ย้ายผิด? กดย้อนกลับ (Ctrl+Z)', 'Wrong place? Undo (Ctrl+Z)'] },
        { s: 'treemap', h: 'stage', a: 'drag', to: 'stage', say: ['ใน Treemap ก็ลากไทล์ไปวางบนโฟลเดอร์ได้เหมือนกัน', 'In the Treemap you can drag tiles onto folders too'] },
      ],
    },
    {
      id: 'clean', title: ['ล้างไฟล์ขยะอย่างปลอดภัย', 'Clean junk safely'], sub: ['ทำความสะอาด', 'Clean up'],
      steps: [
        { s: 'tree', h: 'dclean', a: 'click', say: ['เปิด "ทำความสะอาด"', 'Open "Cleaner"'] },
        { s: 'tree', h: 'dclean', a: 'hover', say: ['โปรแกรมหาไฟล์ขยะ (temp, แคช, crash dump) ไฟล์ซ้ำ และไฟล์ใหญ่ที่เก่ามาก', 'It finds junk (temp, caches, crash dumps), duplicates and big old files'] },
        { s: 'tree', h: 'dclean', a: 'hover', say: ['ติ๊กสิ่งที่ไม่ต้องการแล้วกดลบ — ทุกอย่างไปที่ถังขยะ กู้คืนได้', 'Tick what you don’t need and delete — everything goes to the Recycle Bin, so you can restore it'] },
        { say: ['โฟลเดอร์ระบบและโฟลเดอร์หลักของผู้ใช้ถูกล็อกไว้ ลบผิดไม่ได้', 'System and main user folders are locked — you can’t delete them by mistake'] },
      ],
    },
  ],

  feats: [
    { i: '🫧', t: ['3 มุมมองสวย ๆ', 'Three beautiful views'], d: ['ลูกแก้วอวกาศ Treemap และ Sunburst ข้อมูลเดียวกัน สลับได้ทันที', 'Glass orbs, Treemap and Sunburst — same data, switch instantly.'] },
    { i: '⚡', t: ['สแกนเร็วด้วย Rust', 'Fast Rust scanner'], d: ['สแกนแบบขนานหลายคอร์ และจำผลสแกนไว้เปิดครั้งหน้าทันที', 'Parallel multi-core scanning, and results are remembered for next time.'] },
    { i: '✋', t: ['ลากเพื่อย้ายจริง', 'Drag to really move'], d: ['ลากบนแผนที่ = ย้ายไฟล์ในเครื่อง พร้อมย้อนกลับได้', 'Dragging on the map moves real files — with undo.'] },
    { i: '🧹', t: ['ทำความสะอาด', 'Cleaner'], d: ['ขยะระบบ แคชเบราว์เซอร์ ไฟล์ซ้ำ ไฟล์ใหญ่และเก่า โฟลเดอร์ว่าง', 'System junk, browser caches, duplicates, big old files, empty folders.'] },
    { i: '🛡', t: ['ปลอดภัยไว้ก่อน', 'Safe by design'], d: ['ลบลงถังขยะเสมอ โฟลเดอร์ระบบถูกล็อก ถ้า Windows จะลบถาวรจะถามก่อน', 'Always to the Recycle Bin, system folders locked, and it asks first if Windows would delete permanently.'] },
    { i: '🧪', t: ['สแกนไวรัส', 'Virus scan'], d: ['สั่ง Microsoft Defender สแกนโฟลเดอร์ที่สงสัยได้จากในโปรแกรม', 'Run a Microsoft Defender scan on any folder from inside the app.'] },
  ],

  keys: [
    { k: 'Ctrl+Z', d: ['ย้อนการย้าย / เปลี่ยนชื่อ', 'Undo a move / rename'] },
    { k: 'Ctrl+click', d: ['เลือกหลายอัน', 'Select several'] },
    { k: 'Shift+drag', d: ['ลากกรอบเลือกหลายอัน', 'Box-select several'] },
    { k: 'F2', d: ['เปลี่ยนชื่อ', 'Rename'] },
    { k: 'Del', d: ['ลบลงถังขยะ', 'Delete to the Recycle Bin'] },
    { k: 'Mouse wheel', d: ['ซูมเข้า / ออก', 'Zoom in / out'] },
  ],

  faq: [
    { q: ['ลบแล้วกู้คืนได้ไหม?', 'Can I get deleted files back?'], a: ['ได้ Prism Size ลบลงถังขยะเสมอ ถ้าไดรฟ์นั้นไม่มีถังขยะ (Windows จะลบถาวร) โปรแกรมจะถามยืนยันก่อน', 'Yes. Prism Size always deletes to the Recycle Bin; if a drive has no bin (Windows would delete permanently), it asks you first.'] },
    { q: ['จะลบไฟล์ระบบพังไหม?', 'Could I break Windows?'], a: ['ไม่ โฟลเดอร์ระบบ โปรแกรม และโฟลเดอร์หลักของผู้ใช้ถูกล็อกไว้ ย้ายหรือลบไม่ได้', 'No — system folders, program folders and main user folders are locked against moving and deleting.'] },
    { q: ['สแกนทั้งไดรฟ์นานไหม?', 'How long does a full drive take?'], a: ['ส่วนใหญ่ไม่กี่วินาทีถึงไม่ถึงนาที ขึ้นกับจำนวนไฟล์ และกดยกเลิกได้ทุกเมื่อ', 'Usually seconds to under a minute depending on file count — and you can cancel any time.'] },
    { q: ['ข้อมูลถูกส่งออกไปไหม?', 'Is anything uploaded?'], a: ['ไม่ ทุกอย่างทำงานในเครื่อง ผลสแกนเก็บไว้ในเครื่องของคุณเท่านั้น', 'No. Everything runs on your PC and scan results stay on it.'] },
  ],
};
})();
