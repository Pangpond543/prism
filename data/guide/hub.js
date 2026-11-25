(() => {
// Prism Hub guide. Spots match tools/capture/jobs/hub.js (demo installs / usage from bridges/hub-data.json). Text = [Thai, English].
(window.PrismGuides = window.PrismGuides || {}).hub = {
  screens: [
    {
      id: 'apps', title: ['แอปทั้งหมด', 'All apps'],
      hot: {
        grid: { t: ['การ์ดแอป', 'App cards'], d: ['ทุกแอปในชุด Prism อยู่ที่นี่: เวอร์ชันในเครื่อง แบบติดตั้ง (Setup / Portable) จุดเขียว = เปิดอยู่ ป้ายชมพู = มีเวอร์ชันใหม่ และเวลาที่ใช้วันนี้', 'Every Prism app in one place: the version on this PC, Setup or Portable, a green dot when it is open, a pink chip when a new version is out, and minutes used today.'] },
        card: { t: ['ปุ่มบนการ์ด', 'Card buttons'], d: ['เปิด (หรือสลับไปหน้าต่างที่เปิดอยู่) · ติดตั้งถ้ายังไม่มี · อัปเดต · 📖 คู่มือบนเว็บ · ⓘ รายละเอียด · ⌄ เมนูเพิ่มเติม: ซ่อม เปิดโฟลเดอร์ สร้าง shortcut เปิดพร้อม Windows ถอนการติดตั้ง', 'Open (or switch to its window) · Install if missing · Update · 📖 web guide · ⓘ details · ⌄ more: repair, open folders, Desktop shortcut, start with Windows, uninstall.'], tip: ['คลิกขวาที่การ์ดก็เปิดเมนูเดียวกัน', 'Right-click a card for the same menu'], keys: ['Enter', 'Space', 'U'] },
        search: { t: ['ค้นหาแอป', 'Search apps'], d: ['พิมพ์ชื่อ หรือสิ่งที่อยากทำ เช่น "อัดจอ" "แปล" ก็เจอแอปที่ใช่', 'Type a name or what you want to do — "record", "translate" — to find the right app.'], keys: ['Ctrl+F'] },
        sort: { t: ['เรียงลำดับ', 'Sort'], d: ['ตามชุด Prism · ตามชื่อ · ใช้บ่อยที่สุด (30 วัน) · เปิดล่าสุด', 'Suite order · name · most used (30 days) · recently opened.'] },
        filters: { t: ['ตัวกรอง', 'Filters'], d: ['ทั้งหมด / ติดตั้งแล้ว / มีอัปเดต / เปิดอยู่ / ยังไม่ติดตั้ง พร้อมจำนวน', 'All / installed / has an update / open / not installed, with counts.'] },
        quick: { t: ['ค้นหาด่วน', 'Quick launcher'], d: ['กล่องค้นหาลอยบนจอ เรียกได้จากทุกที่ด้วยคีย์ลัด พิมพ์ชื่อแอปหรือคำสั่ง เช่น "อัดจอ" แล้ว Enter', 'A floating search box you can call from anywhere with a hotkey: type an app or an action like "record" and press Enter.'], keys: ['Ctrl+Alt+P'] },
        dapps: { t: ['แอปทั้งหมด', 'All apps'], d: ['หน้านี้', 'This page.'], keys: ['1'] },
        dupd: { t: ['อัปเดต', 'Updates'], d: ['ตัวเลขแดง = จำนวนแอปที่มีเวอร์ชันใหม่', 'The red number = apps with a new version.'], keys: ['2'] },
        ddisk: { t: ['พื้นที่ดิสก์', 'Disk space'], d: ['แต่ละแอปใช้พื้นที่เท่าไร', 'How much space each app uses.'], keys: ['3'] },
        dstats: { t: ['สถิติการใช้', 'Usage'], d: ['ใช้แอปไหนไปกี่นาที', 'Minutes spent in each app.'], keys: ['4'] },
        dcare: { t: ['ดูแลเครื่อง', 'PC care'], d: ['ตรวจสุขภาพ เปิดพร้อม Windows สำรองการตั้งค่า', 'Health check, start with Windows, settings backup.'], keys: ['5'] },
        dset: { t: ['ตั้งค่า', 'Settings'], d: ['ถาด คีย์ลัด แจ้งเตือน ความถี่ในการตรวจอัปเดต', 'Tray, hotkey, notifications, how often to check for updates.'], keys: ['6'] },
        theme: { t: ['ภาษา · หน้าตา · เกี่ยวกับ', 'Language · look · about'], d: ['สลับไทย/อังกฤษ สว่าง/มืด แก้ว/คลาสสิก — เหมือนทุกแอปในชุด', 'Thai/English, light/dark, glass/classic — the same in every Prism app.'] },
      },
    },
    {
      id: 'insp', title: ['รายละเอียดแอป', 'App details'],
      hot: {
        insp: { t: ['แผงรายละเอียด', 'Details panel'], d: ['เวอร์ชันในเครื่องเทียบกับบน GitHub แบบติดตั้ง สถานะ สวิตช์เปิดพร้อม Windows พื้นที่ที่ใช้ เวลาที่ใช้ 7 วัน ตำแหน่งไฟล์ และ "มีอะไรใหม่" ของเวอร์ชันล่าสุด', 'This PC vs GitHub version, install kind, status, start-with-Windows switch, disk use, minutes in the last 7 days, file location and "what’s new" in the latest version.'], keys: ['Space', 'Esc'] },
        body: { t: ['แจ้งเตือนเล็กๆ', 'Small warnings'], d: ['เช่น "ยังไม่มี shortcut บน Desktop" กด "สร้าง" ก็แก้ให้ทันที', 'Like "no Desktop shortcut yet" — press "Create" and it’s fixed.'] },
      },
    },
    {
      id: 'updates', title: ['อัปเดต', 'Updates'],
      hot: {
        list: { t: ['ทุกแอปกับเวอร์ชันล่าสุด', 'Every app vs the latest'], d: ['ล่าสุดแล้ว ✓ · v1.0.0 → v1.1.0 = มีอัปเดต · ยังไม่ขึ้น GitHub = มีแค่ในเครื่องนี้', 'Up to date ✓ · v1.0.0 → v1.1.0 = update ready · not on GitHub = this PC only.'] },
        row: { t: ['อัปเดตทีละแอป', 'Update one app'], d: ['กดอัปเดต: Hub โหลดจาก GitHub ตรวจไฟล์ แล้วติดตั้งทับให้ (ถ้าแอปเปิดอยู่จะถามก่อนปิด) ⌄ = ดูว่ามีอะไรใหม่', 'Press Update: Hub downloads from GitHub, checks the file and installs it (asks before closing an open app). ⌄ = what’s new.'] },
        check: { t: ['ตรวจตอนนี้', 'Check now'], d: ['ถาม GitHub ทันที (ปกติตรวจเองทุก 6 ชั่วโมง)', 'Ask GitHub right now (it also checks by itself every 6 hours).'], keys: ['F5'] },
        all: { t: ['อัปเดตทั้งหมด', 'Update all'], d: ['อัปเดตทุกแอปต่อกันทีละตัว ถามปิดแอปที่เปิดอยู่แค่ครั้งเดียว', 'Updates every app one after another, asking once to close open ones.'], keys: ['Ctrl+Shift+U'] },
        hist: { t: ['ประวัติทุกเวอร์ชัน', 'Version history'], d: ['ทุกเวอร์ชันที่เคยออก พร้อมวันที่ จำนวนดาวน์โหลด และรายการสิ่งที่เปลี่ยน ทั้งไทยและอังกฤษ', 'Every release with its date, downloads and change list, in Thai and English.'] },
      },
    },
    {
      id: 'disk', title: ['พื้นที่ดิสก์', 'Disk space'],
      hot: {
        cards: { t: ['สรุปพื้นที่', 'Totals'], d: ['Prism ทั้งหมดกินพื้นที่เท่าไร โมเดล AI เท่าไร แคชที่ลบได้ และพื้นที่ว่างของไดรฟ์', 'All of Prism, AI models, clearable cache and the drive’s free space.'] },
        legend: { t: ['สีของแถบ', 'Bar colours'], d: ['โปรแกรม · โมเดล AI · ข้อมูล · แคช', 'Program · AI models · data · cache.'] },
        list: { t: ['แต่ละแอป', 'Per app'], d: ['แถบแยกสี + ปุ่มล้างแคช (ลงถังขยะ) และเปิดโฟลเดอร์', 'A split bar + Clear cache (to the Recycle Bin) and open folders.'] },
        again: { t: ['วัดใหม่', 'Measure again'], d: ['วัดขนาดใหม่ทั้งหมด', 'Measure everything again.'] },
      },
    },
    {
      id: 'stats', title: ['สถิติการใช้', 'Usage'],
      hot: {
        cards: { t: ['ตัวเลขสรุป', 'At a glance'], d: ['วันนี้ · 7 วัน · แอปที่ใช้มากที่สุด · ใช้ต่อเนื่องกี่วัน — นับเฉพาะตอนแอปอยู่หน้าสุดและมีคนใช้เครื่องอยู่ เก็บในเครื่องนี้เท่านั้น', 'Today · 7 days · most used · streak — counted only while the app is in front and someone is at the PC, kept on this PC only.'] },
        range: { t: ['ช่วงเวลา', 'Range'], d: ['7 วัน / 30 วัน / 1 ปี', '7 days / 30 days / 1 year.'] },
      },
    },
    {
      id: 'care', title: ['ตรวจสุขภาพ', 'Health check'],
      hot: {
        health: { t: ['ตรวจทุกอย่างที่แอปต้องใช้', 'Checks what the apps need'], d: ['WebView2 · การ์ดจอรองรับ Vulkan · พื้นที่ว่าง · ไฟล์โปรแกรมครบไหม · shortcut หาย/เสีย · เปิดพร้อม Windows เสีย — เจอปัญหามีปุ่มแก้ให้ทันที', 'WebView2 · Vulkan graphics · free space · program files complete · missing or broken shortcuts · broken startup entries — each problem has a fix button.'] },
        again: { t: ['ตรวจอีกครั้ง / แก้ทั้งหมด', 'Check again / fix all'], d: ['"แก้ทั้งหมด" แก้เฉพาะเรื่องที่ปลอดภัยให้ในคลิกเดียว', '"Fix all" fixes the safe ones in one click.'] },
      },
    },
    {
      id: 'care2', title: ['เปิดพร้อม Windows + สำรอง', 'Startup + backup'],
      hot: {
        startup: { t: ['เปิดพร้อม Windows', 'Start with Windows'], d: ['สวิตช์ของทุกแอปในที่เดียว แอปที่อยู่เบื้องหลังได้ (Rec, VoiceOpen) จะเปิดแบบเงียบๆ', 'One switch per app; background apps (Rec, VoiceOpen) start quietly.'] },
        backup: { t: ['เลือกแอปที่จะสำรอง', 'Pick apps to back up'], d: ['รวมการตั้งค่าของแอปที่เลือกเป็นไฟล์ .zip เดียว ใช้ย้ายเครื่องหรือหลังติดตั้งใหม่ (ไม่รวมตัวโปรแกรมและโมเดล AI)', 'Their settings go into one .zip — for a new PC or after reinstalling (programs and AI models not included).'] },
        bkbtn: { t: ['สำรอง / กู้คืน', 'Back up / restore'], d: ['กู้คืนจะบอกก่อนว่าในไฟล์มีอะไร และเก็บการตั้งค่าปัจจุบันไว้ให้ก่อนเสมอ', 'Restore shows what is inside first and always saves your current settings before.'] },
      },
    },
    {
      id: 'settings', title: ['ตั้งค่า', 'Settings'],
      hot: {
        settings: { t: ['ตั้งค่า Hub', 'Hub settings'], d: ['กด ✕ แล้วซ่อนไปที่ถาด · คีย์ลัดค้นหาด่วน · เปิด Hub พร้อม Windows · แจ้งเตือนเมื่อมีเวอร์ชันใหม่ · ตรวจทุก 1–24 ชั่วโมง · นับสถิติ · ล้างสถิติ', '✕ hides to the tray · quick-launcher hotkey · start Hub with Windows · notify about new versions · check every 1–24 h · count usage · clear statistics.'] },
      },
    },
  ],

  demos: [
    {
      id: 'update', title: ['อัปเดตทุกแอปในคลิกเดียว', 'Update every app in one click'], sub: ['เริ่มต้น', 'Start here'],
      steps: [
        { s: 'apps', h: 'grid', a: 'hover', say: ['ป้ายชมพู "↑ v1.1.0" แปลว่าแอปนั้นมีเวอร์ชันใหม่', 'A pink "↑ v1.1.0" chip means that app has a new version'] },
        { s: 'apps', h: 'dupd', a: 'click', k: '2', say: ['ไปหน้า "อัปเดต"', 'Go to "Updates"'], then: 'updates' },
        { s: 'updates', h: 'row', a: 'hover', say: ['เห็นว่าเวอร์ชันไหนเปลี่ยนเป็นอะไร กด ⌄ ดูว่ามีอะไรใหม่', 'See which version changes to what; ⌄ shows what’s new'] },
        { s: 'updates', h: 'all', a: 'click', k: 'Ctrl+Shift+U', say: ['กด "อัปเดตทั้งหมด" — Hub โหลดและติดตั้งให้ทีละตัว', 'Press "Update all" — Hub downloads and installs them one by one'] },
      ],
    },
    {
      id: 'install', title: ['ติดตั้งแอปที่ยังไม่มี', 'Install an app you don’t have'], sub: ['ติดตั้ง', 'Install'],
      steps: [
        { s: 'apps', h: 'filters', a: 'click', say: ['กรอง "ยังไม่ติดตั้ง"', 'Filter "not installed"'] },
        { s: 'apps', h: 'card', a: 'hover', say: ['กด "ติดตั้ง" บนการ์ด — Hub โหลดจาก GitHub สร้าง shortcut บน Desktop และ Start ให้', 'Press "Install" on the card — Hub downloads it from GitHub and adds Desktop and Start shortcuts'] },
      ],
    },
    {
      id: 'quick', title: ['เปิดแอปไวๆ จากทุกที่', 'Open apps fast from anywhere'], sub: ['ค้นหาด่วน', 'Quick launcher'],
      steps: [
        { s: 'apps', h: 'quick', a: 'key', k: 'Ctrl+Alt+P', say: ['กดคีย์ลัดจากโปรแกรมไหนก็ได้ กล่องค้นหาลอยขึ้นมา', 'Press the hotkey in any program — a search box appears'] },
        { s: 'apps', h: 'search', a: 'hover', say: ['พิมพ์ "อัดจอ" หรือ "แปล" แล้ว Enter — เปิดแอปหรือทำคำสั่งนั้นทันที', 'Type "record" or "translate" and press Enter — the app or action starts'] },
      ],
    },
    {
      id: 'move', title: ['ย้ายไปเครื่องใหม่', 'Move to a new PC'], sub: ['สำรอง', 'Backup'],
      steps: [
        { s: 'care2', h: 'backup', a: 'click', say: ['เลือกแอปที่จะเก็บการตั้งค่า', 'Pick the apps whose settings to keep'] },
        { s: 'care2', h: 'bkbtn', a: 'click', say: ['กด "สำรองการตั้งค่า" ได้ไฟล์ .zip เดียว เอาไปกด "กู้คืน" ในเครื่องใหม่', 'Press "Back up settings" for one .zip, then "Restore" it on the new PC'] },
      ],
    },
  ],

  feats: [
    { i: '🧭', t: ['บ้านของทุกแอป Prism', 'Home of every Prism app'], d: ['เห็นทุกแอป เปิด ติดตั้ง อัปเดต ซ่อม และถอนการติดตั้งได้จากที่เดียว', 'See, open, install, update, repair and uninstall every app from one place.'] },
    { i: '⬇️', t: ['อัปเดตทั้งชุดคลิกเดียว', 'One-click updates'], d: ['ตรวจ GitHub ให้เองทุกไม่กี่ชั่วโมง แจ้งเตือน แล้วอัปเดตทั้งหมดได้ในคลิกเดียว', 'Checks GitHub every few hours, notifies you, and updates everything in one click.'] },
    { i: '🩺', t: ['ตรวจสุขภาพ', 'Health check'], d: ['หาไฟล์หาย shortcut เสีย และสิ่งที่แอปต้องใช้ พร้อมปุ่มแก้', 'Finds missing files, broken shortcuts and missing requirements — with fix buttons.'] },
    { i: '💾', t: ['พื้นที่ + สำรองข้อมูล', 'Disk + backup'], d: ['ดูว่าแต่ละแอปกินพื้นที่เท่าไร ล้างแคช และสำรองการตั้งค่าเป็นไฟล์เดียว', 'See each app’s disk use, clear caches, back up settings to one file.'] },
    { i: '📊', t: ['สถิติการใช้', 'Usage stats'], d: ['รู้ว่าใช้แอปไหนไปเท่าไร แบบตารางสีทั้งปี เก็บในเครื่องเท่านั้น', 'Minutes per app and a year heatmap — kept on your PC only.'] },
    { i: '⚡', t: ['ค้นหาด่วน', 'Quick launcher'], d: ['คีย์ลัดเดียวเปิดแอปหรือคำสั่งของแอปได้จากทุกที่', 'One hotkey opens any app or app action from anywhere.'] },
  ],

  keys: [
    { k: 'Ctrl+Alt+P', d: ['ค้นหาด่วน (จากทุกที่)', 'Quick launcher (from anywhere)'] },
    { k: '1 – 6', d: ['สลับหน้า', 'Switch pages'] },
    { k: 'Ctrl+F', d: ['ค้นหาแอป', 'Search apps'] },
    { k: 'F5', d: ['ตรวจอัปเดตตอนนี้', 'Check for updates now'] },
    { k: 'Ctrl+Shift+U', d: ['อัปเดตทั้งหมด', 'Update all'] },
    { k: '← → ↑ ↓ · Enter · Space · U', d: ['เลื่อนการ์ด · เปิด · รายละเอียด · อัปเดต', 'Move between cards · open · details · update'] },
    { k: 'Esc', d: ['ปิดแผงรายละเอียด', 'Close the details panel'] },
  ],

  faq: [
    { q: ['Hub ต้องเปิดไว้ตลอดไหม?', 'Must Hub stay open?'], a: ['ไม่จำเป็น แต่ถ้าอยู่ในถาดข้างนาฬิกา จะตรวจอัปเดตและนับสถิติให้เอง กด ✕ ก็แค่ซ่อนไปที่ถาด', 'No, but from the tray it checks for updates and counts usage by itself. ✕ only hides it to the tray.'] },
    { q: ['อัปเดตแล้วการตั้งค่าในแอปหายไหม?', 'Do updates keep my settings?'], a: ['ไม่หาย Hub เปลี่ยนแค่ไฟล์โปรแกรม การตั้งค่าและข้อมูลอยู่ที่เดิม และสำรองไว้ก่อนได้ในหน้า "ดูแลเครื่อง"', 'Yes. Hub only replaces program files; settings and data stay. You can also back them up on "PC care".'] },
    { q: ['ส่งข้อมูลการใช้งานไปที่ไหนไหม?', 'Is my usage sent anywhere?'], a: ['ไม่ สถิติเก็บในเครื่องนี้เท่านั้น Hub ติดต่อแค่ GitHub เพื่อดูเวอร์ชันล่าสุดและโหลดไฟล์', 'No. Statistics stay on this PC; Hub only talks to GitHub to see new versions and download them.'] },
    { q: ['ถอนการติดตั้งแล้วไฟล์ไปไหน?', 'Where do uninstalled files go?'], a: ['ลงถังขยะ (Recycle Bin) เสมอ กู้คืนได้ และถามก่อนว่าจะลบการตั้งค่าด้วยไหม', 'Always to the Recycle Bin — recoverable — and it asks before removing settings too.'] },
  ],
};
})();
