// Prism Shot — real main-window page + fake bridge (bridges/shot.js): made-up capture history drawn as SVG pictures.
// The app's picture URLs (pshot.localhost/thumb|shot|orig/<id>) are redirected to those pictures.
const { svg } = require('../bridges/shot.js');
// the pictures come from a tiny local server (a redirect to a data: URL is refused for images)
const PORT = 18977;
require('http').createServer((q, r) => {
  const k = (q.url.match(/^\/([a-z]+)/) || [])[1];
  const d = k && svg(k);
  if (!d) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Access-Control-Allow-Origin': '*' });
  r.end(decodeURIComponent(d.slice(d.indexOf(',') + 1)));
}).listen(PORT, '127.0.0.1');
const view = (v) => async (p) => { await p.click(`.dock-btn[data-view="${v}"]`); };
module.exports = {
  app: 'shot',
  root: '../../../../prism-shot/app/renderer',
  bridge: '../bridges/shot.js',
  size: [1480, 920],
  boot: 3500,
  redirect: { 'pshot\\.localhost/(?:thumb|shot|orig)/demo([a-z]+)': (m) => `http://127.0.0.1:${PORT}/${m[1]}` },
  shots: [
    {
      id: 'home', act: view('home'), wait: 1800,
      hot: { big: '#big-shot', acts: '#act-grid', ocr: '#st-ocr', tr: '#st-tr', ll: '#st-ll', target: '#st-target', recent: '#recent',
        dhome: '.dock-btn[data-view="home"]', dhist: '.dock-btn[data-view="history"]', dedit: '.dock-btn[data-view="edit"]', dset: '.dock-btn[data-view="settings"]',
        theme: ['#lang-switch', '#btn-theme', '#btn-info'] },
    },
    { id: 'history', act: view('history'), wait: 2000, hot: { list: '#hist', search: '#hist-search', filters: '#hist-filters', imp: '#hist-import', folder: '#hist-folder', count: '#hist-count' } },
    {
      id: 'edit', act: async (p) => { await p.click('.dock-btn[data-view="history"]'); await p.sleep(900); await p.js(`document.querySelector('#hist [data-do="edit"]').click();`); }, wait: 2500,
      hot: { editor: '#editor' },
    },
    { id: 'settings', act: view('settings'), wait: 1500, hot: { dir: '#set-dir', pick: '#btn-pick-dir' } },
  ],
};
