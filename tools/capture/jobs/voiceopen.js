// Prism VoiceOpen — real main-window page + fake bridge (bridges/voiceopen.js): demo commands and history.
const view = (v) => async (p) => { await p.click(`.dock-btn[data-view="${v}"]`); };
module.exports = {
  app: 'voiceopen',
  root: '../../../../prism-voiceopen/app/renderer',
  bridge: '../bridges/voiceopen.js',
  size: [1480, 920],
  boot: 3000,
  shots: [
    {
      id: 'home', act: view('home'), wait: 1500,
      hot: {
        mic: '#big-mic', title: ['#hero-title', '#hero-sub'], key: '#hero-key', modes: '#mode-chips', quick: '#quick-chips', last: '#last-heard',
        engine: '#kv-engine', kmic: '#kv-mic', search: '#cmd-search', add: '#btn-add', cmds: '#cmds', card: '#cmds .cmd:first-child',
        talk: '#btn-talk', dhome: '.dock-btn[data-view="home"]', dhist: '.dock-btn[data-view="history"]', dset: '.dock-btn[data-view="settings"]', dkeys: '.dock-btn[data-view="keys"]', dadd: '#dock-add',
        theme: ['#lang-switch', '#btn-theme', '#btn-info'],
      },
    },
    { id: 'history', act: view('history'), wait: 1500, hot: { hist: '#hist', row: '#hist > *:first-child', fail: '#hist > *:nth-child(4)', clear: '#hist-clear' } },
    {
      id: 'settings', act: view('settings'), wait: 1500,
      hot: { key: '#set-key', mic: '#sel-mic', mictest: '#mic-test', engine: '#set-engine', warm: '#btn-warm', c1: '#view-settings .set-grid > :nth-child(1)', c2: '#view-settings .set-grid > :nth-child(2)', c3: '#view-settings .set-grid > :nth-child(3)', c4: '#view-settings .set-grid > :nth-child(4)' },
    },
    {
      id: 'settings2', act: async (p) => { await p.click('.dock-btn[data-view="settings"]'); await p.sleep(500); await p.js(`document.getElementById('glow-preview')?.scrollIntoView({ block: 'center' });`); }, wait: 1200,
      hot: { glow: '#glow-preview', demo: '#btn-glow-demo', wake: '#wake-check', starter: '#btn-starter', startup: '#btn-startup-ask', c5: '#view-settings .set-grid > :nth-child(5)', c6: '#view-settings .set-grid > :nth-child(6)', c7: '#view-settings .set-grid > :nth-child(7)', c8: '#view-settings .set-grid > :nth-child(8)' },
    },
    { id: 'keys', act: view('keys'), wait: 1500, hot: { global: '#keys-global', local: '#keys-local', reset: '#keys-reset' } },
    {
      id: 'editor', act: async (p) => { await p.click('.dock-btn[data-view="home"]'); await p.sleep(500); await p.js(`const c = document.querySelector('#cmds .cmd:nth-child(11)') || document.querySelector('#cmds .cmd'); c.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));`); }, wait: 1500,
      hot: { head: '#ed .ed-head', left: '#ed .ed-body > .ed-col:nth-child(1)', right: '#ed .ed-body > .ed-col:nth-child(2)', try: '#ed-try', save: '#ed-save' },
    },
  ],
};
