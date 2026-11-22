// Fake Tauri bridge for Prism VoiceOpen: demo commands and history (no real voice, nothing runs).
const tauri = require('./tauri.js');
module.exports = (win) => {
  const now = Date.now();
  const A = (kind, target, label, args = '') => ({ kind, target, args, label, icon: '' });
  const C = (id, name, phrases, actions, uses, samples = []) => ({ id, name, phrases, actions, enabled: true, samples, uses, last_used: uses ? now - uses * 3600e3 : 0 });
  const commands = [
    C('yt', 'เปิด YouTube', ['เปิดยูทูป', 'ยูทูป'], [A('url', 'https://www.youtube.com', 'YouTube')], 42, ['s1', 's2']),
    C('yts', 'ค้นหาใน YouTube', ['หายูทูป', 'ค้นยูทูป'], [A('search', 'https://www.youtube.com/results?search_query={q}', 'YouTube search')], 18),
    C('gg', 'ค้นหา Google', ['หากูเกิล', 'ค้นหา'], [A('search', 'https://www.google.com/search?q={q}', 'Google')], 25),
    C('dl', 'โฟลเดอร์ดาวน์โหลด', ['เปิดดาวน์โหลด'], [A('folder', 'C:\\Users\\Demo\\Downloads', 'Downloads')], 9),
    C('calc', 'เครื่องคิดเลข', ['เครื่องคิดเลข', 'คิดเลข'], [A('app', 'C:\\Windows\\System32\\calc.exe', 'Calculator')], 6, ['s1']),
    C('vup', 'เพิ่มเสียง', ['เพิ่มเสียง', 'ดังขึ้น'], [A('system', 'vol_up', '')], 31),
    C('mute', 'ปิดเสียง', ['ปิดเสียง', 'เงียบ'], [A('system', 'mute', '')], 12),
    C('lock', 'ล็อกเครื่อง', ['ล็อกเครื่อง'], [A('system', 'lock', '')], 4),
    C('rec', 'อัดหน้าจอ (Prism Rec)', ['อัดจอ', 'เริ่มอัด'], [A('prism', 'rec_toggle', 'Prism Rec')], 15),
    C('replay', 'บันทึกย้อนหลัง', ['เซฟคลิป', 'บันทึกย้อนหลัง'], [A('prism', 'rec_replay', 'Prism Rec')], 8),
    C('work', 'โหมดทำงาน', ['เริ่มทำงาน'], [A('app', 'C:\\Program Files\\Microsoft VS Code\\Code.exe', 'Visual Studio Code'), A('url', 'https://calendar.google.com', 'Calendar'), A('system', 'mute', '')], 3),
  ];
  const hist = [
    { heard: 'เปิดยูทูปหน่อย', name: 'เปิด YouTube', id: 'yt', ok: true, how: 'text', t: now - 4 * 60e3, ms: 1420 },
    { heard: 'หายูทูป แมวน่ารัก', name: 'ค้นหาใน YouTube', id: 'yts', query: 'แมวน่ารัก', ok: true, how: 'text', t: now - 26 * 60e3, ms: 1610 },
    { heard: '', name: 'เพิ่มเสียง', id: 'vup', ok: true, how: 'voice', t: now - 58 * 60e3, ms: 120 },
    { heard: 'เปิดเครื่องคิด', name: '', near: 'เครื่องคิดเลข', ok: false, how: 'text', t: now - 2 * 3600e3, ms: 1380 },
    { heard: 'อัดจอ', name: 'อัดหน้าจอ (Prism Rec)', id: 'rec', ok: true, how: 'text', t: now - 5 * 3600e3, ms: 1290 },
  ];
  const map = {
    about_info: { version: '1.0.0', repo: '', test: '' },
    settings_get: () => S,
    settings_set: (a) => Object.assign(S, a || {}),
    __S: {
      lang: 'th', dark: false, hotkey: 'Ctrl+Space', mode: 'both', max_secs: 8, mic_id: '', mic_gain: 1, stt_lang: 'th', strict: 0.72, engine_keep: '10m',
      glow: 'prism', glow_size: 1, glow_all: true, sounds: true, caption: true, autostart: true, startup_asked: true, confirm_run: false,
      wake_on: false, wake_phrase: '', wake_samples: [], wake_sense: 0.5, voice_sense: 0.5, commands, seeded: true,
      hotkeys: { talk: 'Ctrl+Space', open: 'Ctrl+Alt+O', repeat: '' },
    },
    sys_info: { engine: 'whisper small · ภาษาไทย', engine_ready: true, mics: [{ id: 'usb', name: 'USB Microphone' }], mic: 'USB Microphone', model: 'ggml-small-q8_0' },
    history_list: hist,
    hotkeys_status: {},
    apps_list: [],
  };
  const S = map.__S; delete map.__S;
  tauri(win, map);
};
