// Prism Hub — real main-window page + fake bridge (bridges/hub.js): made-up installs, versions, usage and disk sizes.
const view = (v) => async (p) => { await p.click(`.dock-btn[data-view="${v}"]`); };
module.exports = {
  app: 'hub',
  root: '../../../../prism-hub/app/renderer',
  bridge: '../bridges/hub.js',
  size: [1480, 920],
  boot: 3500,
  shots: [
    {
      id: 'apps', act: view('apps'), wait: 1800,
      hot: {
        grid: '#app-grid', card: '#app-grid > :first-child', search: '#app-search', sort: '#app-sort', filters: '#app-filters',
        quick: '#btn-quick', dapps: '.dock-btn[data-view="apps"]', dupd: '.dock-btn[data-view="updates"]', ddisk: '.dock-btn[data-view="disk"]',
        dstats: '.dock-btn[data-view="stats"]', dcare: '.dock-btn[data-view="care"]', dset: '.dock-btn[data-view="settings"]',
        theme: ['#lang-switch', '#btn-theme', '#btn-info'],
      },
    },
    { id: 'updates', act: view('updates'), wait: 1800, hot: { list: '#upd-list', row: '#upd-list > :first-child', check: '#btn-check', all: '#btn-update-all', hist: '#hist' } },
    { id: 'disk', act: view('disk'), wait: 2500, hot: { cards: '#disk-cards', legend: '#disk-legend', list: '#disk-list', again: '#btn-disk' } },
    { id: 'stats', act: view('stats'), wait: 2200, hot: { cards: '#stat-cards', range: '#stat-range' } },
    { id: 'care', act: view('care'), wait: 2200, hot: { health: '#health', again: '#btn-health' } },
    { id: 'care2', act: async (p) => { await p.click('.dock-btn[data-view="care"]'); await p.sleep(700); await p.js(`document.getElementById('startup').scrollIntoView({ block: 'start' });`); }, wait: 1500, hot: { startup: '#startup', backup: '#bk-apps', bkbtn: '#btn-backup' } },
    { id: 'insp', act: async (p) => { await p.click('.dock-btn[data-view="apps"]'); await p.sleep(600); await p.js(`document.querySelector('#app-grid .app-card[data-key="rec"]').click();`); }, wait: 1800, hot: { insp: '#inspector', body: '#insp-body' } },
    { id: 'settings', act: view('settings'), wait: 1500, hot: { settings: '#settings' } },
  ],
};
