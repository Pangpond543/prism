// Prism LLearn — real main-window page + fake bridge (bridges/llearn.js): made-up lessons, words and study days.
const view = (v) => async (p) => { await p.click(`.dock-btn[data-view="${v}"]`); };
const openDemo = async (p) => {
  await p.click('.dock-btn[data-view="home"]'); await p.sleep(600);
  await p.js(`document.querySelector('#recent [data-id="f-demo1"], #recent [data-src="f-demo1"], #recent .src-card, #recent > *').click();`);
  await p.sleep(1800);
};
module.exports = {
  app: 'llearn',
  root: '../../../../prism-llearn/app/renderer',
  bridge: '../bridges/llearn.js',
  size: [1480, 920],
  boot: 3500,
  shots: [
    {
      id: 'home', act: view('home'), wait: 1800,
      hot: { add: '#add-in', go: '#add-go', file: '#add-file', top: '#home-top', ai: '#aiq', heat: '#heat', recent: '#recent', status: '#status',
        dhome: '.dock-btn[data-view="home"]', dlearn: '.dock-btn[data-view="learn"]', dreview: '.dock-btn[data-view="review"]', dwords: '.dock-btn[data-view="words"]',
        theme: ['#lang-switch', '#btn-theme', '#btn-info'] },
    },
    {
      id: 'learn', act: async (p) => { await openDemo(p); await p.js(`const t = [...document.querySelectorAll('#lr-lines .cue[data-i="1"] .tok')].find((x) => x.textContent === 'routine'); t && t.click();`); await p.sleep(400); await p.js(`document.querySelector('#lr-lines .cue[data-i="1"] .cue-time').click();`); }, wait: 1500,
      hot: { video: '#lr-video', cap: '#lr-cap', ctrl: '#lr-ctrl', title: '#lr-title', lines: '#lr-lines', stats: '#lr-stats', close: '#lr-close' },
    },
    { id: 'review', act: view('review'), wait: 1800, hot: { rv: '#rv' } },
    { id: 'words', act: view('words'), wait: 1800, hot: { list: '#wl', q: '#wl-q', csv: '#wl-csv', anki: '#wl-anki', lang: '#wl-lang', filter: '#wl-filter', count: '#wl-count' } },
  ],
};
