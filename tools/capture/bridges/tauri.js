// Shared fake window.__TAURI__ for the Tauri apps' pages: answers commands from a handler map with demo data.
// Unknown commands get a harmless reply; anything else on __TAURI__ is a no-op.
module.exports = (win, handlers) => {
  const noop = new Proxy(function () {}, { get: () => noop, apply: () => Promise.resolve(null) });
  const core = {
    invoke: async (cmd, args) => {
      const a = args && 'a' in args ? args.a : args;
      const h = handlers[cmd];
      if (h) return typeof h === 'function' ? h(a) : JSON.parse(JSON.stringify(h));
      if (/list|status/.test(cmd)) return [];
      return { ok: true };
    },
  };
  win.__TAURI__ = new Proxy({ core, event: { listen: async () => () => {}, emit: async () => {} } }, { get: (t, k) => (k in t ? t[k] : noop) });
};

// A soft gradient picture (SVG data URL) used as a video thumbnail.
module.exports.thumb = (c1, c2, label, sub = '') => 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
  <rect width="320" height="180" fill="url(#g)"/><circle cx="250" cy="40" r="70" fill="#fff" opacity=".12"/><circle cx="60" cy="150" r="50" fill="#fff" opacity=".1"/>
  <rect x="18" y="18" width="150" height="10" rx="5" fill="#fff" opacity=".55"/><rect x="18" y="36" width="96" height="8" rx="4" fill="#fff" opacity=".35"/>
  <text x="18" y="150" font-family="Segoe UI, sans-serif" font-size="26" font-weight="700" fill="#fff">${label}</text>
  <text x="18" y="170" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" opacity=".8">${sub}</text></svg>`);
