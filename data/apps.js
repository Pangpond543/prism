(() => {
// The Prism suite catalog — one entry per app page. Text is [Thai, English].
// repo = GitHub repo with Releases (download button asks GitHub for the newest one); no repo = "coming soon".
// c = logo colours [deep, mid, light, accent] (same as Program_Size/tools/brand/logos.js).
const APPS = [
  {
    id: 'size', name: 'Prism Size', logos: ['size'], repo: 'prism-size', c: ['#2B3BA8', '#5B7BFF', '#A9BDFF', '#7FD3FF'],
    tag: ['แผนที่ดิสก์แบบแก้ว เห็นทันทีว่าอะไรกินพื้นที่', 'A glass map of your disk — see what takes space at a glance'],
    long: ['สแกนไดรฟ์หรือโฟลเดอร์ แล้วดูเป็นลูกแก้ว ไทล์ หรือวงแหวน ลากไฟล์ย้ายได้จริงจากแผนที่ ล้างไฟล์ขยะ หาไฟล์ซ้ำ ดูโปรแกรมที่ติดตั้ง และสแกนไวรัสด้วย Windows Defender ลบเมื่อไหร่ก็ลงถังขยะเสมอ',
      'Scan a drive or folder and see it as glass orbs, tiles or rings. Move real files by dragging them on the map, clean junk, find duplicates, review installed apps and run a Defender scan. Deleting always goes to the Recycle Bin.'],
    stack: ['Electron', 'JavaScript', 'Rust'],
    best: ['สแกนเร็วด้วย Rust · ลากย้ายไฟล์จากแผนที่ · ล้างขยะปลอดภัย', 'Fast Rust scanner · drag files on the map · safe cleaning'],
  },
  {
    id: 'cam', name: 'Prism Cam', logos: ['cam'], repo: 'prism-cam', c: ['#0B6F73', '#1FB5A6', '#86E8D6', '#6CC7FF'],
    tag: ['สตูดิโอกล้องแก้ว ส่งภาพเป็นกล้องเสมือนให้ Discord / Zoom / OBS', 'A glass camera studio that becomes a virtual camera for Discord, Zoom and OBS'],
    long: ['จัดกล้อง จับหน้าจอ รูป วิดีโอ ข้อความ สติกเกอร์ ลงบนฉากเดียว ใส่ AI ลบพื้นหลัง ติดสติกเกอร์ตามหน้า สั่งงานด้วยท่ามือ ทำแอนิเมชันได้ แล้วส่งภาพออกเป็นกล้องชื่อ "Prism Cam" ที่โปรแกรมไหนก็เลือกใช้ได้',
      'Put cameras, screen capture, pictures, videos, text and stickers on one stage. Add AI background removal, face stickers, hand-gesture commands and animation, then send it all out as a camera called "Prism Cam" that any app can pick.'],
    stack: ['Tauri 2', 'Rust', 'JavaScript', 'MediaPipe'],
    best: ['กล้องเสมือนใน Windows 11 · AI ลบพื้นหลัง · ท่ามือสั่งงาน', 'Windows 11 virtual camera · AI background · hand gestures'],
  },
  {
    id: 'media', name: 'Prism Player · Studio', logos: ['player', 'studio'], c: ['#4B25A8', '#8559FF', '#C7ABFF', '#FF9ED6'],
    tag: ['เล่นวิดีโอทุกไฟล์ + ตัดต่อ / ทำ GIF / ลบพื้นหลังด้วย AI', 'Play any video, then cut it, make GIFs and remove backgrounds with AI'],
    long: ['Prism Player เล่นได้แทบทุกไฟล์ด้วยการถอดรหัสบนการ์ดจอ มีเพลย์ลิสต์ วนช่วง A–B ปรับภาพ/เสียง จอเต็มแบบแก้วหักเหแสง กด "แก้ไขคลิป" ก็เปิด Prism Studio ณ เวลานั้นทันที ซึ่งตัดต่อ ครอป ใส่ข้อความ ลบพื้นหลังด้วย AI และส่งออกได้ทั้ง MP4 / GIF / WebM โปร่งใส',
      'Prism Player plays almost any file with GPU decoding: playlist, A–B loop, picture and sound controls, a glass full-screen. "Edit clip" opens Prism Studio at that moment to cut, crop, add text, remove the background with AI and export MP4, GIF or transparent WebM.'],
    stack: ['Rust', 'egui', 'libmpv', 'FFmpeg', 'ONNX'],
    best: ['native ล้วน เบาและเร็ว · GIF studio · AI ลบพื้นหลังวิดีโอ', 'Fully native, light and fast · GIF studio · AI video background removal'],
  },
  {
    id: 'rec', name: 'Prism Rec', logos: ['rec'], repo: 'prism-rec', c: ['#A11F35', '#F04A57', '#FFA3A3', '#FFC174'],
    tag: ['อัดหน้าจอด้วยแถบแก้วลอยตัว เบาด้วยการ์ดจอ', 'Record your screen from a floating glass bar, encoded on the GPU'],
    long: ['แถบแก้วลอยอยู่บนจอแต่ไม่ติดไปในวิดีโอ กดอัดได้ทันที พัก/อัดต่อ เลือกทั้งจอหรือบางส่วน อัดเสียงคอมและไมค์ ไฮไลต์เมาส์ วาดบนจอ และ "บันทึกย้อนหลัง" เก็บ 30 วินาทีล่าสุดได้ทุกเมื่อ ใช้ CPU แทบไม่ถึง 1%',
      'A glass bar floats on screen but never appears in the video. Record at once, pause and resume, full screen or an area, PC sound and mic, mouse highlight, drawing, and "save the last seconds" any time — at under 1 % CPU.'],
    stack: ['Tauri 2', 'Rust', 'FFmpeg'],
    best: ['อัดผ่านการ์ดจอ · แถบไม่ติดในคลิป · บันทึกย้อนหลัง', 'GPU recording · bar never in the video · replay buffer'],
  },
  {
    id: 'voiceopen', name: 'Prism VoiceOpen', logos: ['voiceopen'], c: ['#A44E0C', '#F2922A', '#FFD38E', '#FF8FA8'],
    tag: ['กดคีย์แล้วพูด เปิดโปรแกรม เว็บ หรือสั่งคอมได้เลย', 'Hold a key, say a word — open apps, sites or control your PC'],
    long: ['กด Ctrl+Space แล้วพูด "เปิดยูทูป" ขอบจอจะเรืองแสงตามเสียง แล้วสิ่งที่ตั้งไว้ก็ทำงาน ฟังเสียงแบบออฟไลน์ 100% (whisper.cpp) เข้าใจภาษาไทยแม้พูดไม่เป๊ะ สอนคำด้วยเสียงตัวเองได้ และสร้างคำสั่งเองได้ไม่จำกัด',
      'Press Ctrl+Space and say "open YouTube": the screen edge glows with your voice and the command runs. Speech is recognised 100 % offline (whisper.cpp), forgiving with Thai, can learn your own voice, and you can build unlimited commands.'],
    stack: ['Tauri 2', 'Rust', 'whisper.cpp'],
    best: ['ออฟไลน์ 100% · เข้าใจไทยแม้พูดไม่เป๊ะ · สอนด้วยเสียง', '100 % offline · forgiving Thai matching · teach by voice'],
  },
  {
    id: 'code', name: 'Prism Code', logos: ['code'], repo: 'prism-code', c: ['#176B3B', '#2FBF69', '#A1EEB5', '#7FE0D8'],
    tag: ['เรียน Python โดยดูโค้ดวิ่งทีละบรรทัด', 'Learn Python by watching your code run, line by line'],
    long: ['เขียน Python ในหน้าตาแบบ VS Code แล้วกด F6 ดูทีละบรรทัด ค่าจะลอยจากตัวแปรไปตัวแปรให้เห็นกับตา ฟังก์ชันเลื่อนเข้า-ออกเป็นการ์ด ไฟล์เขียนทีละบรรทัด มีอธิบาย error เป็นภาษาไทย ตรวจคำตอบด้วยเทสต์ซ่อน และโจทย์แนวข้อสอบไม่จำกัด ทำงานออฟไลน์ทั้งหมด',
      'Write Python in a VS Code-style editor, press F6 and watch each line run: values float from variable to variable, function calls slide in as cards, files fill line by line. Errors are explained in Thai, answers are checked with hidden tests, and exam-style problems never run out. Fully offline.'],
    stack: ['Tauri 2', 'Pyodide', 'CodeMirror'],
    best: ['ดูค่าวิ่งกับตา · อธิบาย error ภาษาไทย · ตรวจคำตอบอัตโนมัติ', 'See values move · errors explained · auto-checked answers'],
  },
];

const byId = Object.fromEntries(APPS.map((a) => [a.id, a]));
window.PrismData = { APPS, byId };
})();
