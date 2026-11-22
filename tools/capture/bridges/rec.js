// Fake Tauri bridge for Prism Rec: demo settings, a demo GPU and a library of made-up recordings.
const tauri = require('./tauri.js');
module.exports = (win) => {
  const H = 3600e3, D = 24 * H, now = Date.now();
  const v = (name, ago, dur, sizeMB, c1, c2, label) => ({ path: `D:\\Videos\\Prism Rec\\${name}.mp4`, name: `${name}.mp4`, mtime: now - ago, dur, size: sizeMB * 1048576, w: 1920, h: 1080, thumb: tauri.thumb(c1, c2, label, '1920×1080 · 60 fps') });
  const items = [
    v('Prism Rec 2026-11-21 14-32', 0.6 * H, 312, 186, '#6a5cff', '#ff7ab8', 'Game clip'),
    v('Python lab tutorial', 2.5 * H, 845, 402, '#1f9d6a', '#7fe0d8', 'Tutorial'),
    v('Replay - last 30s', 3.1 * H, 30, 21, '#f04a57', '#ffc174', 'Replay'),
    v('Meeting notes', 1 * D + 2 * H, 1520, 640, '#2b3ba8', '#7fd3ff', 'Meeting'),
    v('Bug report - app crash', 1 * D + 5 * H, 96, 48, '#8559ff', '#ff9ed6', 'Bug report'),
    v('Speedrun attempt 7', 1 * D + 9 * H, 2210, 1180, '#a11f35', '#ff8fa8', 'Speedrun'),
    v('Logic gate build', 3 * D, 660, 335, '#0b6f73', '#86e8d6', 'Build log'),
    v('Slides walkthrough', 3 * D + 4 * H, 420, 160, '#a44e0c', '#ffd38e', 'Slides'),
    v('Clip for TikTok', 6 * D, 58, 39, '#931f63', '#ffc48f', 'TikTok'),
  ];
  const map = {
    about_info: { version: '1.0.0', repo: '', test: '' },
    settings_get: () => S,
    settings_set: (a) => Object.assign(S, a || {}),
    __S: {
      lang: 'th', dark: false, fps: 60, quality: 'high', codec: 'h264', encoder: 'auto', mode: 'full', monitor: 0, region: null,
      sys_audio: true, sys_vol: 1, mic: true, mic_vol: 0.9, mic_id: '', cursor: true, highlight: true, hl_color: '#8a7dff', hl_size: 46, clicks: true,
      draw_color: '#ff5fa2', draw_width: 5, draw_tool: 'pen', draw_fade: false, countdown: 3, hide_main: true, out_dir: 'D:\\Videos\\Prism Rec', bar_pos: null, show_bar: true,
      pipe_h264: 'amf', pipe_hevc: 'amf', probe_key: 'demo', replay: true, replay_secs: 30, autostart: true, startup_asked: true,
      hotkeys: { rec: 'Ctrl+Alt+R', pause: 'Ctrl+Alt+P', draw: 'Ctrl+Alt+D', highlight: 'Ctrl+Alt+H', clear: 'Ctrl+Alt+C', replay: 'Ctrl+Alt+S' },
    },
    sys_info: {
      gpu: 'AMD Radeon RX 6600', encoder: 'AMD AMF', pipe: 'GPU zero-copy', dir: 'D:\\Videos\\Prism Rec', out_dir: 'D:\\Videos\\Prism Rec',
      monitors: [{ id: 0, name: 'Display 1 · 1920×1080 · 144 Hz', w: 1920, h: 1080 }, { id: 1, name: 'Display 2 · 2560×1440', w: 2560, h: 1440 }],
      mics: [{ id: 'usb', name: 'USB Microphone' }, { id: 'headset', name: 'Headset Microphone' }], studio: true, player: true,
    },
    rec_status: { state: 'idle', secs: 0 },
    replay_status: { on: true, secs: 30, buffered: 30 },
    hotkeys_status: {},
    lib_list: { ok: true, items },
  };
  const S = map.__S; delete map.__S;
  tauri(win, map);
};
