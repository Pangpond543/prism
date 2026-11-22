// Prism Rec — real main-window page + fake bridge (bridges/rec.js): demo recordings, demo GPU. The floating bar is native (see bar shot).
const view = (v) => async (p) => { await p.click(`.dock-btn[data-view="${v}"]`); };
module.exports = {
  app: 'rec',
  root: '../../../../prism-rec/app/renderer',
  bridge: '../bridges/rec.js',
  size: [1480, 920],
  boot: 3000,
  shots: [
    {
      id: 'home', act: view('home'), wait: 1500,
      hot: {
        big: '#big-rec', title: ['#hero-title', '#hero-sub'], modes: '#mode-chips', quick: '#quick-chips', replay: '#replay-row',
        enc: '#kv-enc', video: '#kv-video', dir: '#kv-dir', search: '#lib-search', folder: '#lib-open-folder', lib: '#lib .day:first-child',
        card: '#lib .vid:first-child', rail: '#date-rail', bar: '#btn-bar', dhome: '.dock-btn[data-view="home"]', dset: '.dock-btn[data-view="settings"]', dkeys: '.dock-btn[data-view="keys"]',
        theme: ['#lang-switch', '#btn-theme', '#btn-info'],
      },
    },
    {
      id: 'settings', act: view('settings'), wait: 1500,
      hot: { video: '#view-settings .set-grid > :nth-child(1)', screen: '#view-settings .set-grid > :nth-child(2)', audio: '#view-settings .set-grid > :nth-child(3)', hlcard: '#view-settings .set-grid > :nth-child(4)', enc: '#set-enc', monitor: '#row-monitor', mic: '#sel-mic', mictest: '#mic-test' },
    },
    {
      id: 'settings2', act: async (p) => { await p.click('.dock-btn[data-view="settings"]'); await p.sleep(500); await p.js(`document.getElementById('set-replay')?.scrollIntoView({ block: 'center' });`); }, wait: 1200,
      hot: { c5: '#view-settings .set-grid > :nth-child(5)', c6: '#view-settings .set-grid > :nth-child(6)', c7: '#view-settings .set-grid > :nth-child(7)', c8: '#view-settings .set-grid > :nth-child(8)', replay: '#set-replay', dir: ['#set-dir', '#btn-pick-dir', '#btn-open-dir', '#btn-reset-dir'], startup: '#btn-startup-ask' },
    },
    {
      id: 'keys', act: view('keys'), wait: 1500,
      hot: { rec: '#keys-rec', draw: '#keys-draw', reset: '#keys-reset' },
    },
  ],
};
