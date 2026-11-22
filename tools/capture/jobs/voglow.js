// Prism VoiceOpen screen-edge glow + caption, re-drawn on a demo desktop (see recbar.js).
const shot = (id, m, hot) => ({ id, act: async (p) => { await p.load('?m=' + m, 1200); }, wait: 400, hot });
module.exports = {
  app: 'voiceopen',
  root: '../mock',
  size: [1480, 920],
  boot: 800,
  shots: [
    shot('glow', 'listen', { glow: '#o-glow .t', cap: '#o-cap', lv: '#o-lv' }),
    shot('glowok', 'ok', { glow: '#o-glow .t', cap: '#o-cap' }),
  ],
};
