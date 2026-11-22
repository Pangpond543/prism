// Prism Size — real page + fake bridge (bridges/size.js) that serves a made-up D:\ drive.
const scanned = async (p) => { await p.js(`localStorage.setItem('pw.autoscan', 'D:\\\\'); localStorage.setItem('prism.view', 'tree');`); await p.load('', 4500); };
const view = (v) => async (p) => { await p.click(`.dock-btn[data-view="${v}"]`); };
const shell = {
  newscan: '#btn-newscan',
  crumbs: '#crumbs',
  theme: ['#lang-switch', '#btn-theme', '#btn-info'],
};
const dock = {
  dtree: '.dock-btn[data-view="tree"]', dtreemap: '.dock-btn[data-view="treemap"]', dsun: '.dock-btn[data-view="sunburst"]', ddash: '.dock-btn[data-view="dashboard"]',
  dapps: '.dock-btn[data-view="apps"]', dclean: '.dock-btn[data-view="cleaner"]', dsearch: '.dock-btn[data-view="search"]', dshield: '.dock-btn[data-view="shield"]',
};
const status = { st: '#st-text', zoom: ['#zoom-out', '#zoom-fit', '#zoom-in'], undo: '#btn-undo', rescan: '#btn-rescan' };

module.exports = {
  app: 'size',
  root: '../../../../prism-size/app/renderer',
  bridge: '../bridges/size.js',
  size: [1480, 920],
  boot: 2500,
  storage: () => "localStorage.setItem('pw.autoscan', '');",
  shots: [
    {
      id: 'welcome',
      act: async (p) => { await p.js(`localStorage.setItem('pw.autoscan', '');`); await p.load('', 3000); },
      wait: 1200,
      hot: { drives: '#drive-cards', quick: '#quick-cards', engine: '#engine-note', theme: shell.theme },
    },
    {
      id: 'tree',
      act: scanned,
      wait: 3500,
      hot: { ...shell, ...dock, stage: '#v-tree', proj: ['#proj-media', '#proj-icon'], ...status },
    },
    {
      id: 'treemap', act: view('treemap'), wait: 2500,
      hot: { stage: '#v-treemap', crumbs: '#crumbs', dtreemap: dock.dtreemap },
    },
    {
      id: 'sunburst', act: view('sunburst'), wait: 2500,
      hot: { stage: '#v-sunburst', crumbs: '#crumbs', dsun: dock.dsun },
    },
    {
      id: 'dashboard', act: view('dashboard'), wait: 2500,
      hot: {
        dash: '#dashboard', ddash: dock.ddash,
        stats: '#dashboard > *:nth-child(2)', types: '#dashboard > *:nth-child(3) > *:nth-child(1)', drives: '#dashboard > *:nth-child(3) > *:nth-child(2)',
      },
    },
    {
      id: 'dashboard2', act: async (p) => { await p.js("const d = document.getElementById('dashboard'); const sc = [d, d.parentElement, document.getElementById('v-dashboard')].find((e) => e && e.scrollHeight > e.clientHeight + 10); if (sc) sc.scrollTop = sc.scrollHeight;"); }, wait: 1500,
      hot: { d4: '#dashboard > *:nth-child(4)', d5: '#dashboard > *:nth-child(5)', d6: '#dashboard > *:nth-child(6)', d4a: '#dashboard > *:nth-child(4) > *:nth-child(1)', d4b: '#dashboard > *:nth-child(4) > *:nth-child(2)', d5a: '#dashboard > *:nth-child(5) > *:nth-child(1)', d5b: '#dashboard > *:nth-child(5) > *:nth-child(2)' },
    },
  ],
};
