// Fake Tauri bridge for Prism Hub: made-up suite state from hub-data.json (built by make-hub-demo.py — no real paths).
const tauri = require('./tauri.js');
const D = require('./hub-data.json');
module.exports = (win) => {
  const clone = (x) => JSON.parse(JSON.stringify(x));
  tauri(win, {
    about_info: D.about,
    hub_state: () => clone(D.state),
    hub_settings: () => clone(D.settings),
    hub_settings_set: (a) => Object.assign(D.settings, a || {}),
    hub_usage: () => clone(D.usage),
    hub_health: () => clone(D.health),
    hub_rel: (a) => clone(D.rel[a && a.key] || { key: a && a.key, ok: false, reason: 'norepo', current: '' }),
    hub_disk: (a) => clone(D.disk[a && a.key] || {}),
    hub_check_all: { ok: true },
    update_check: { ok: true, hasUpdate: false, current: '1.0.0', latest: '1.0.0' },
    app_ready: { ok: true },
    app_lang: { ok: true },
  });
};
