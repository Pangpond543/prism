// Prism Cam — the real page in browser-preview mode. Never opens a camera: the scene is built from
// a generated background picture, an avatar, text and a shape (no personal data).
const scene = `
  const m = await import('/js/studio.js'); const s = m.studio; window.__s = s;
  s.reset(); await new Promise((r) => setTimeout(r, 300));
  const c = document.createElement('canvas'); c.width = 1280; c.height = 720; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 1280, 720); gr.addColorStop(0, '#2c2a7a'); gr.addColorStop(.55, '#a24c9c'); gr.addColorStop(1, '#ffb070');
  g.fillStyle = gr; g.fillRect(0, 0, 1280, 720);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 46; i++) { g.fillStyle = 'rgba(255,255,255,' + (rnd() * .14) + ')'; g.beginPath(); g.arc(rnd() * 1280, rnd() * 720, 18 + rnd() * 120, 0, 7); g.fill(); }
  g.fillStyle = 'rgba(255,255,255,.9)'; g.font = '700 54px Segoe UI'; g.fillText('GAME NIGHT', 70, 640);
  const b = await new Promise((r) => c.toBlob(r, 'image/jpeg', .92));
  await s.addImageFile(new File([b], 'stream-bg.jpg', { type: 'image/jpeg' }));
  await new Promise((r) => setTimeout(r, 400));
  const im = s.layers().find((l) => l.type === 'image'); Object.assign(im, { x: 640, y: 360, w: 1280, h: 720 });
  s.addShape();
  const sh = s.layers().find((l) => l.type === 'shape'); Object.assign(sh, { x: 330, y: 92, w: 520, h: 96, radius: 48, op: .92 });
  s.addText('LIVE · Prism Cam');
  const tx = s.layers().find((l) => l.type === 'text'); Object.assign(tx, { x: 330, y: 92, w: 440, h: 60 });
  s.commit(); await new Promise((r) => setTimeout(r, 300));
`;
const pick = (type) => `window.__s ||= (await import('/js/studio.js')).studio; const L = window.__s.layers().find((l) => l.type === '${type}'); if (L) window.__s.select(L.id);`;

module.exports = {
  app: 'cam',
  root: '../../../../prism-cam/app/renderer',
  size: [1480, 920],
  boot: 3500,
  shots: [
    {
      id: 'studio',
      act: async (p) => { await p.js(scene + pick('image') + `(window.__s ||= (await import('/js/studio.js')).studio).showTab('layers');`); },
      wait: 1200,
      hot: {
        vcam: '#btn-vcam',
        camera: '[data-add="camera"].dock-btn',
        screen: '[data-add="screen"].dock-btn',
        media: ['[data-add="image"].dock-btn', '[data-add="video"].dock-btn'],
        deco: ['[data-add="text"].dock-btn', '[data-add="sticker"].dock-btn', '[data-add="shape"].dock-btn', '[data-add="frame"].dock-btn'],
        area: '[data-add="area"].dock-btn',
        handfx: '[data-add="handfx"].dock-btn',
        face: '[data-add="face"].dock-btn',
        anim: '#dock-anim',
        stage: '#scene-box',
        gizmo: '#gizmo',
        tabs: '#panel-tabs',
        layers: '#tab-layers .layer*',
        eye: '#tab-layers .layer.sel [data-act="vis"]',
        scenes: ['#scenes', '#scene-add'],
        size: 'label:has(#out-res)',
        fps: 'label:has(#out-fps)',
        speed: '#st-text',
        undo: '#btn-undo',
        snap: '#btn-snap',
        rec: '#btn-rec',
        theme: ['#lang-switch', '#btn-theme', '#btn-info'],
      },
    },
    {
      id: 'props',
      act: async (p) => { await p.js(pick('image') + `(window.__s ||= (await import('/js/studio.js')).studio).showTab('props');`); },
      wait: 900,
      hot: {
        place: '#tab-props > .sec:nth-child(1)',
        handf: '#tab-props > .sec:nth-child(2)',
        facef: '#tab-props > .sec:nth-child(3)',
        shape: '#tab-props > .sec:nth-child(4)',
        filter: '#tab-props > .sec:nth-child(5)',
        ai: '#tab-props > .sec:nth-child(6)',
        chroma: '#tab-props > .sec:nth-child(7)',
        blend: '#tab-props > .sec:nth-child(8)',
        gizmo: '#gizmo',
      },
    },
    {
      id: 'props2',
      act: async (p) => { await p.js(pick('image') + "(window.__s ||= (await import('/js/studio.js')).studio).showTab('props'); await new Promise((r) => setTimeout(r, 300)); document.querySelector('#tab-props > .sec:nth-child(5)').scrollIntoView({ block: 'start' });"); },
      wait: 900,
      hot: {
        filter: '#tab-props > .sec:nth-child(5)',
        ai: '#tab-props > .sec:nth-child(6)',
        chroma: '#tab-props > .sec:nth-child(7)',
        blend: '#tab-props > .sec:nth-child(8)',
      },
    },
    {
      id: 'track',
      act: async (p) => { await p.js("(window.__s ||= (await import('/js/studio.js')).studio).showTab('hand'); await new Promise((r) => setTimeout(r, 300)); document.querySelector('#tab-hand > .sec:nth-child(1)').scrollIntoView({ block: 'start' });"); },
      wait: 900,
      hot: {
        hand: '#tab-hand > .sec:nth-child(1)',
        facet: '#tab-hand > .sec:nth-child(2)',
        profile: '#tab-hand > .sec:nth-child(3)',
        ride: '#tab-hand > .sec:nth-child(4)',
        gest: '#tab-hand > .sec:nth-child(5)',
        pc: '#tab-hand > .sec:nth-child(6)',
      },
    },
    {
      id: 'lib',
      act: async (p) => { await p.js(`(window.__s ||= (await import('/js/studio.js')).studio).showTab('lib');`); },
      wait: 900,
      hot: {
        search: '#tab-lib .lib-head',
        filter: '#tab-lib .lib-f',
        grid: '#tab-lib .lib-grid',
      },
    },
    {
      id: 'anim',
      act: async (p) => { await p.js(pick('text') + `document.getElementById('dock-anim').click();`); },
      wait: 1400,
      hot: {
        clip: '#anim-top .at-clip',
        transport: '#anim-top .at-tr',
        time: '#anim-top .at-time',
        autokey: '#anim-top .at-tog.rec',
        presets: '#anim-top .pill-btn.small:not(.primary)',
        done: '#anim-top .pill-btn.primary',
        tltabs: '#anim-tl .tl-tabs',
        keytools: ['#anim-tl .tl-head > .icon-btn*'],
        ease: '#anim-tl .tl-ease',
        tracks: '#anim-tl .tl-body',
        side: '#anim-side',
        stage: '#scene-box',
      },
      after: async (p) => { await p.js(`document.querySelector('#anim-top .pill-btn.primary')?.click();`); },
    },
    {
      id: 'track2',
      act: async (p) => { await p.js("(window.__s ||= (await import('/js/studio.js')).studio).showTab('hand'); await new Promise((r) => setTimeout(r, 300)); document.querySelector('#tab-hand > .sec:nth-child(4)').scrollIntoView({ block: 'start' });"); },
      wait: 900,
      hot: {
        ride: '#tab-hand > .sec:nth-child(4)',
        gest: '#tab-hand > .sec:nth-child(5)',
        pc: '#tab-hand > .sec:nth-child(6)',
      },
    },
  ],
};
