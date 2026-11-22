// Prism Rec floating bar + Prism VoiceOpen glow — re-drawn in mock/index.html on a demo desktop (the real
// overlays refract the user's own screen, so they are never captured). Shots merge into data/shots/<app>.js.
const shot = (id, m, hot) => ({ id, act: async (p) => { await p.load('?m=' + m, 1200); }, wait: 400, hot });
module.exports = {
  app: 'rec',
  root: '../mock',
  size: [1480, 920],
  boot: 800,
  shots: [
    shot('bar', 'bar', { logo: '#b-logo', rec: '#b-rec', replay: '#b-replay', area: '#b-area', mic: '#b-mic', sound: '#b-sound', hl: '#b-hl', draw: '#b-draw', main: '#b-main' }),
    shot('barrec', 'rec', { rec: '#b-rec', pause: '#b-pause', frame: '#o-frame', hl: '#o-hl', mic: '#b-mic', note: '#o-note', replay: '#b-replay' }),
    shot('bardraw', 'draw', { ink: '#o-ink', pen: '#t-pen', hi: '#t-hi', shapes: ['#t-arrow', '#t-box'], colors: '#t-colors', undo: '#t-undo', clear: '#t-clear', fade: '#t-fade', done: '#t-done', draw: '#b-draw' }),
  ],
};
