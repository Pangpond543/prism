// Prism Code — the real page in browser-preview mode (Pyodide runs in the page). Uses the built-in
// "BU Final" practice problems; no personal files.
const q = (acts) => '?act=' + acts.map(encodeURIComponent).join(',');
// no commas: the page splits its act list on ","
const bug = 'name = "Prism"\nscore = 90\nprint("Hello " + nmae)\n';

module.exports = {
  app: 'code',
  root: '../../../../prism-code/app/renderer',
  size: [1480, 920],
  boot: 3000,
  shots: [
    {
      id: 'code',
      act: async (p) => { await p.load(q(['open:bu1', 'sol', 'viz:2500', 'wait:2500', 'step:9']), 7000); },
      wait: 1200,
      hot: {
        py: '#py-status',
        dockcode: '[data-view="code"].dock-btn',
        docklib: '[data-view="library"].dock-btn',
        dockquiz: '[data-view="quiz"].dock-btn',
        dockkeys: '[data-view="keys"].dock-btn',
        open: '#dock-open',
        prob: '#prob',
        tabs: '#ed-tabs',
        run: '#btn-run',
        viz: '#btn-viz',
        check: '#btn-check',
        stop: '#btn-stop',
        predict: '#btn-predict',
        files: ['#btn-open', '#btn-save'],
        font: ['[id="btn-font-"]', '#font-size', '[id="btn-font+"]'],
        layout: ['#btn-right', '#btn-wide'],
        vzbar: ['#vz-first', '#vz-prev', '#vz-play', '#vz-next', '#vz-last', '#vz-slider', '#vz-count', '#vz-speed'],
        narr: '#vz-narr',
        editor: '#ed-wrap',
        console: '#console',
        rtabs: '#r-tabs',
        values: '#r-viz',
      },
    },
    {
      id: 'error',
      act: async (p) => { await p.load(q(['open:bu1', 'code:' + bug, 'run']), 6500); },
      wait: 1000,
      hot: {
        editor: '#ed-wrap',
        console: '#console-out',
        run: '#btn-run',
      },
    },
    {
      id: 'check',
      act: async (p) => { await p.load(q(['open:bu1', 'sol', 'check', 'wait:3500', 'tab:check']), 9000); },
      wait: 1000,
      hot: {
        check: '#btn-check',
        result: '#r-check',
        badge: '[data-r="check"]',
        prob: '#prob',
      },
    },
    {
      id: 'library',
      act: async (p) => { await p.load(q(['view:library']), 3500); },
      wait: 900,
      hot: {
        ltabs: '#lib-tabs',
        packs: '#lib',
        open: '#lib-open',
        dock: '[data-view="library"].dock-btn',
      },
    },
    {
      id: 'quiz',
      act: async (p) => { await p.load(q(['quiz']), 4500); },
      wait: 900,
      hot: {
        score: '#quiz-score',
        topics: '#quiz-topics',
        quiz: '#quiz',
      },
    },
  ],
};
