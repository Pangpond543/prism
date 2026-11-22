(() => {
'use strict';
const Prism = window.Prism = window.Prism || {};
// The guide engine: a real screenshot of the app with live "spots".
//  · hover / tap a spot → the area lights up and a glass box explains what it does (+ tip + keys)
//  · side list of every spot, "tour" (the ghost cursor visits each spot), numbers toggle
//  · demos: a ghost cursor performs a task step by step on the real screens, with narration
//  · deep links: #spot=<screen>.<spot>  ·  #demo=<id>
const { t, I, esc, isDark, store, onLang } = Prism;

const T = {
  where: ['คุณกำลังดู', 'You are looking at'],
  sideTitle: ['ตรงนี้ทำอะไรได้บ้าง', 'What each part does'],
  sideHint: ['ชี้เมาส์ที่ภาพ หรือกดรายการ', 'Point at the picture or pick from the list'],
  tour: ['พาเที่ยวทีละจุด', 'Tour every spot'],
  numbers: ['โชว์เลข', 'Numbers'],
  step: ['ขั้นที่', 'Step'],
  demo: ['กำลังสาธิต', 'Demo'],
  done: ['ดูจบแล้ว', 'Watched'],
  steps: ['ขั้น', 'steps'],
  tip: ['เคล็ดลับ', 'Tip'],
  tourSay: ['จุดที่', 'Spot'],
};
const CURSOR = '<svg viewBox="0 0 24 24"><path d="M4 2.5 19.5 12l-7 1.4L9 20.5Z" fill="#fff" stroke="#232a47" stroke-width="1.6" stroke-linejoin="round"/></svg>';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ease = (x) => (x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

function mountGuide({ app, guide, shots, explorerEl, demosEl }) {
  const screens = guide.screens || [];
  let si = 0, active = null, pinned = false, demo = null, tourOn = false;
  const variant = () => `${isDark() ? 'dark' : 'light'}.${Prism.L}`;

  explorerEl.innerHTML = `
    <div>
      <div class="screens" role="tablist"></div>
      <div class="stage-wrap"><div class="stage-frame glass">
        <div class="stage hint"><div class="zoomer">
          <img class="shot" alt="" draggable="false"><img class="shot out" alt="" draggable="false" aria-hidden="true">
          <div class="dim"></div><div class="hots"></div>
          <div class="ghost">${CURSOR}</div></div>
          <div class="demo-bar"><div class="say"><b></b><span></span></div><span class="step-n"></span>
            <div class="ctl"><button class="icon-btn d-prev" aria-label="prev">${I.prev}</button><button class="icon-btn d-play" aria-label="pause">${I.pause}</button><button class="icon-btn d-next" aria-label="next">${I.next}</button><button class="icon-btn d-close" aria-label="close">${I.close}</button></div>
            <div class="prog"><i></i></div></div>
        </div>
      </div><div class="callout" role="status"></div></div>
    </div>
    <aside class="side glass"><h4></h4><p class="hint-line"></p><div class="list"></div>
      <div class="tools"><button class="btn small b-tour">${I.play}<span></span></button><button class="btn small b-num">${I.grid}<span></span></button></div></aside>`;
  const $ = (s) => explorerEl.querySelector(s);
  const stage = $('.stage'), [imgA, imgB] = explorerEl.querySelectorAll('img.shot'), hotsEl = $('.hots'), callout = $('.callout');
  const ghost = $('.ghost'), bar = $('.demo-bar'), list = $('.list');
  let front = imgA;

  const screen = () => screens[si];
  const boxes = (s = screen()) => {
    const d = shots?.[s.shot || s.id];
    const v = d?.hot?.[variant()] || d?.hot?.['light.th'] || {};
    const out = {};
    for (const [id, h] of Object.entries(s.hot || {})) { const r = h.r || v[id]; if (r) out[id] = r; }
    return out;
  };
  const shotSrc = (s = screen(), v = variant()) => {
    const vs = s.variants || ['light.th', 'dark.th', 'light.en', 'dark.en'];
    const use = vs.includes(v) ? v : vs.find((x) => x.startsWith(isDark() ? 'dark' : 'light')) || vs.find((x) => x.endsWith(Prism.L)) || vs[0];
    return `shots/${app.id}/${s.shot || s.id}.${use}.webp`;
  };
  const setRatio = () => { const d = shots?.[screen().shot || screen().id]; const [w, h] = d?.size || screen().size || [1480, 920]; stage.style.setProperty('--ar', `${w} / ${h}`); };

  /* ---------------- render */
  function renderTabs() {
    const tabs = $('.screens');
    tabs.innerHTML = screens.map((s, i) => `<button role="tab" class="${i === si ? 'on' : ''}" data-i="${i}">${esc(t(s.title))}</button>`).join('');
    tabs.querySelectorAll('button').forEach((b) => (b.onclick = () => { stopDemo(); go(+b.dataset.i); }));
    tabs.style.display = screens.length > 1 ? '' : 'none';
  }
  function renderHots() {
    const bx = boxes();
    const ids = Object.keys(screen().hot || {});
    hotsEl.innerHTML = ids.filter((id) => bx[id]).map((id) => {
      const [x, y, w, h] = bx[id];
      const n = ids.indexOf(id) + 1;
      return `<div class="hot" tabindex="0" data-id="${id}" style="left:${x * 100}%;top:${y * 100}%;width:${w * 100}%;height:${h * 100}%;--i:${n}" aria-label="${esc(t(screen().hot[id].t))}"><span class="num">${n}</span></div>`;
    }).join('');
    hotsEl.querySelectorAll('.hot').forEach((el) => {
      el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse' && !demo && !tourOn && !pinned) show(el.dataset.id); });
      el.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !demo && !tourOn && !pinned) hide(); });
      el.addEventListener('click', (e) => { e.stopPropagation(); if (demo || tourOn) return; if (pinned && active === el.dataset.id) { pinned = false; hide(); } else { pinned = true; show(el.dataset.id); } });
      el.addEventListener('focus', () => { if (!demo && !tourOn) show(el.dataset.id); });
    });
  }
  function renderSide() {
    $('.side h4').textContent = t(T.sideTitle);
    $('.side .hint-line').textContent = t(T.sideHint);
    $('.b-tour span').textContent = t(T.tour);
    $('.b-num span').textContent = t(T.numbers);
    const bx = boxes();
    list.innerHTML = Object.entries(screen().hot || {}).filter(([id]) => bx[id]).map(([id, h], i) =>
      `<button class="item" data-id="${id}"><i>${Object.keys(screen().hot).indexOf(id) + 1}</i><div><b>${esc(t(h.t))}</b><span>${esc(t(h.s || h.d)).slice(0, 70)}${t(h.s || h.d).length > 70 ? '…' : ''}</span></div></button>`).join('');
    list.querySelectorAll('.item').forEach((b) => {
      b.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse' && !demo && !tourOn && !pinned) show(b.dataset.id, { noScroll: true }); });
      b.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !demo && !tourOn && !pinned) hide(); });
      b.onclick = () => { if (demo || tourOn) return; pinned = true; show(b.dataset.id); };
    });
  }
  function setImage(instant) {
    const src = shotSrc();
    const back = front === imgA ? imgB : imgA;
    if (instant || !front.getAttribute('src')) {
      front.src = src; front.classList.remove('out'); back.classList.add('out');
      front.onerror = () => { if (!front.src.endsWith('.light.th.webp')) front.src = `shots/${app.id}/${screen().shot || screen().id}.light.th.webp`; };
      return;
    }
    back.onload = () => { back.classList.remove('out'); front.classList.add('out'); front = back; };
    back.onerror = () => { back.src = `shots/${app.id}/${screen().shot || screen().id}.light.th.webp`; };
    back.src = src;
  }
  function render(instant) {
    setRatio(); renderTabs(); setImage(instant); renderHots(); renderSide();
    if (active && screen().hot[active]) show(active, { noScroll: true }); else hide();
  }
  function go(i, instant) {
    if (i === si && !instant) return;
    si = i; active = null; pinned = false;
    render(instant);
  }

  /* ---------------- show / hide one spot */
  function show(id, o = {}) {
    const h = screen().hot[id];
    if (!h) return;
    active = id;
    hotsEl.querySelectorAll('.hot').forEach((el) => el.classList.toggle('on', el.dataset.id === id));
    list.querySelectorAll('.item').forEach((el) => el.classList.toggle('on', el.dataset.id === id));
    stage.classList.add('focus'); stage.classList.remove('hint');
    const n = Object.keys(screen().hot).indexOf(id) + 1;
    callout.innerHTML = `<div class="k"><i>${n}</i>${esc(t(screen().title))}</div><h4>${esc(t(h.t))}</h4><p>${esc(t(h.d))}</p>
      ${h.tip ? `<div class="tip"><b>${t(T.tip)}:</b> ${esc(t(h.tip))}</div>` : ''}
      ${h.keys ? `<div class="keys">${h.keys.map((k) => `<span class="kbd">${esc(k)}</span>`).join('')}</div>` : ''}`;
    place(id); zoomTo(id);
    callout.classList.add('show');
    if (!o.noScroll) list.querySelector('.item.on')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function hide() {
    active = null; zoomTo(null);
    hotsEl.querySelectorAll('.hot.on').forEach((el) => el.classList.remove('on'));
    list.querySelectorAll('.item.on').forEach((el) => el.classList.remove('on'));
    stage.classList.remove('focus');
    callout.classList.remove('show');
  }
  // put the box beside the spot: right, left, below or above — wherever it fits
  function place(id) {
    const r = boxes()[id];
    if (!r) return;
    const W = stage.clientWidth, H = stage.clientHeight;
    if (W < 620) return; // phones: fixed bottom sheet (CSS)
    const [x, y, w, h] = [r[0] * W, r[1] * H, r[2] * W, r[3] * H];
    const cw = callout.offsetWidth || 320, ch = callout.offsetHeight || 140, gap = 16;
    let left, top;
    if (x + w + gap + cw < W - 8) { left = x + w + gap; top = y + h / 2 - ch / 2; }
    else if (x - gap - cw > 8) { left = x - gap - cw; top = y + h / 2 - ch / 2; }
    else if (y + h + gap + ch < H - 8) { left = x + w / 2 - cw / 2; top = y + h + gap; }
    else { left = x + w / 2 - cw / 2; top = y - gap - ch; }
    left = Math.max(8, Math.min(W - cw - 8, left));
    top = Math.max(8, Math.min(H - ch - 8, top));
    // the box lives beside the frame (not inside the clipped stage): shift by the frame padding
    callout.style.left = left + stage.offsetLeft + 'px'; callout.style.top = top + stage.offsetTop + 'px';
  }
  stage.addEventListener('click', () => { if (pinned && !demo) { pinned = false; hide(); } });
  addEventListener('resize', () => { if (active) place(active); });

  // On a phone the whole app is ~350 px wide: glide-zoom onto the active spot so it is readable.
  const zoomer = explorerEl.querySelector('.zoomer');
  function zoomTo(id) {
    const r = id && boxes()[id];
    if (!r || stage.clientWidth >= 620) { zoomer.style.transform = ''; zoomer.style.setProperty('--z', 1); return; }
    const k = Math.max(1, Math.min(3.2, 0.62 / Math.max(r[2], r[3] * 0.62)));
    const cx = r[0] + r[2] / 2, cy = r[1] + r[3] / 2;
    const tx = Math.min(0, Math.max(1 - k, 0.5 - cx * k)), ty = Math.min(0, Math.max(1 - k, 0.5 - cy * k));
    zoomer.style.transform = `translate(${tx * 100}%, ${ty * 100}%) scale(${k})`;
    zoomer.style.setProperty('--z', k); // keeps number badges at their normal size
  }

  /* ---------------- ghost cursor */
  let gx = 50, gy = 60;
  const center = (id, s = screen()) => { const r = boxes(s)[id]; return r ? [(r[0] + r[2] / 2) * 100, (r[1] + r[3] / 2) * 100] : [50, 50]; };
  const moveGhost = (tx, ty, ms = 900) => new Promise((res) => {
    const sx = gx, sy = gy, t0 = performance.now();
    // a soft arc, like a hand moving a mouse
    const mx = (sx + tx) / 2 + (ty - sy) * .18, my = (sy + ty) / 2 - Math.abs(tx - sx) * .12;
    ghost.classList.add('show');
    const step = (now) => {
      const k = ease(Math.min(1, (now - t0) / ms));
      const ix = (1 - k) * (1 - k) * sx + 2 * (1 - k) * k * mx + k * k * tx, iy = (1 - k) * (1 - k) * sy + 2 * (1 - k) * k * my + k * k * ty;
      ghost.style.left = `calc(${ix}% - 4px)`; ghost.style.top = `calc(${iy}% - 3px)`;
      if (k < 1) requestAnimationFrame(step); else { gx = tx; gy = ty; res(); }
    };
    requestAnimationFrame(step);
  });
  const clickFx = async () => {
    ghost.classList.add('press');
    const rp = document.createElement('div'); rp.className = 'ripple'; rp.style.left = gx + '%'; rp.style.top = gy + '%';
    zoomer.appendChild(rp); setTimeout(() => rp.remove(), 800);
    await sleep(160); ghost.classList.remove('press');
  };
  const keyFx = (k) => { const p = document.createElement('div'); p.className = 'key-pop'; p.textContent = k; p.style.left = gx + '%'; p.style.top = `calc(${gy}% - 52px)`; zoomer.appendChild(p); setTimeout(() => p.remove(), 1200); };

  /* ---------------- tour: the ghost visits every spot */
  let tourTok = 0;
  async function tour() {
    if (tourOn) { tourOn = false; tourTok++; ghost.classList.remove('show'); hide(); return; }
    stopDemo(); tourOn = true; pinned = false;
    const tok = ++tourTok;
    $('.b-tour').innerHTML = `${I.pause}<span>${t(T.tour)}</span>`;
    const ids = Object.keys(boxes());
    for (const id of ids) {
      if (tok !== tourTok) break;
      await moveGhost(...center(id), 700);
      if (tok !== tourTok) break;
      show(id);
      await sleep(Math.max(2600, t(screen().hot[id].d).length * 38));
    }
    if (tok === tourTok) { tourOn = false; ghost.classList.remove('show'); hide(); }
    $('.b-tour').innerHTML = `${I.play}<span>${t(T.tour)}</span>`;
  }
  $('.b-tour').onclick = tour;
  $('.b-num').onclick = () => stage.classList.toggle('numbers');

  /* ---------------- demos */
  let demoTok = 0, paused = false, stepI = 0;
  const done = () => { try { return JSON.parse(store.get('prism.web.done', '{}')); } catch { return {}; } };
  function renderDemos() {
    if (!demosEl) return;
    const d = done();
    demosEl.innerHTML = (guide.demos || []).map((x, i) => `<button class="demo-card glass lit rv${d[`${app.id}.${x.id}`] ? ' done' : ''}" data-id="${x.id}" style="--i:${i}">
      <span class="play">${d[`${app.id}.${x.id}`] ? I.check : I.play}</span><b>${esc(t(x.title))}</b><span>${esc(t(x.sub || ''))} · ${x.steps.length} ${t(T.steps)}</span></button>`).join('');
    demosEl.querySelectorAll('.demo-card').forEach((b) => (b.onclick = () => { explorerEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => playDemo(b.dataset.id), 450); }));
    demosEl.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
  }
  async function runStep(d, i, tok) {
    const st = d.steps[i];
    const sIdx = screens.findIndex((s) => s.id === (st.s || screen().id));
    if (sIdx >= 0 && sIdx !== si) { si = sIdx; render(false); await sleep(450); }
    if (tok !== demoTok) return;
    bar.querySelector('.say b').textContent = `${t(T.demo)} · ${t(d.title)}`;
    bar.querySelector('.say span').textContent = t(st.say);
    bar.querySelector('.step-n').textContent = `${i + 1} / ${d.steps.length}`;
    bar.querySelector('.prog i').style.width = `${((i + 1) / d.steps.length) * 100}%`;
    if (st.h) {
      await moveGhost(...center(st.h), st.ms || 850);
      if (tok !== demoTok) return;
      show(st.h, { noScroll: true });
      if (st.a === 'click' || st.a === 'dbl') { await clickFx(); if (st.a === 'dbl') await clickFx(); }
      if (st.a === 'drag' && st.to) { ghost.classList.add('press'); await moveGhost(...center(st.to), 1100); ghost.classList.remove('press'); show(st.to, { noScroll: true }); }
      if (st.a === 'key' && st.k) keyFx(st.k);
    } else if (st.k) { keyFx(st.k); hide(); } else hide();
    if (st.then) { const n = screens.findIndex((s) => s.id === st.then); if (n >= 0) { await sleep(500); if (tok !== demoTok) return; si = n; active = null; render(false); } }
  }
  async function playDemo(id, from = 0) {
    const d = (guide.demos || []).find((x) => x.id === id);
    if (!d) return;
    tourOn = false; tourTok++;
    demo = d; paused = false; pinned = false; stepI = from;
    const tok = ++demoTok;
    bar.classList.add('show'); stage.classList.remove('hint');
    bar.querySelector('.d-play').innerHTML = I.pause;
    while (stepI < d.steps.length && tok === demoTok) {
      await runStep(d, stepI, tok);
      const wait = Math.max(2400, t(d.steps[stepI].say).length * 52);
      const t0 = performance.now();
      while (tok === demoTok && (paused || performance.now() - t0 < wait)) await sleep(100);
      if (tok !== demoTok) return;
      stepI++;
    }
    if (tok === demoTok) {
      const all = done(); all[`${app.id}.${d.id}`] = 1; store.set('prism.web.done', JSON.stringify(all));
      bar.querySelector('.say span').textContent = t(['เสร็จแล้ว! ลองทำตามในโปรแกรมจริงได้เลย', 'Done! Now try it in the real app.']);
      await sleep(2200);
      if (tok === demoTok) stopDemo();
      renderDemos();
    }
  }
  function stopDemo() {
    if (!demo) return;
    demo = null; demoTok++; paused = false;
    bar.classList.remove('show'); ghost.classList.remove('show'); hide();
  }
  bar.querySelector('.d-close').onclick = stopDemo;
  bar.querySelector('.d-play').onclick = () => { paused = !paused; bar.querySelector('.d-play').innerHTML = paused ? I.play : I.pause; };
  bar.querySelector('.d-next').onclick = () => { if (!demo) return; const d = demo.id, n = Math.min(demo.steps.length - 1, stepI + 1); playDemo(d, n); };
  bar.querySelector('.d-prev').onclick = () => { if (!demo) return; const d = demo.id, n = Math.max(0, stepI - 1); playDemo(d, n); };
  addEventListener('keydown', (e) => {
    if (!demo) return;
    if (e.key === 'Escape') stopDemo();
    else if (e.key === ' ' && document.activeElement === document.body) { e.preventDefault(); bar.querySelector('.d-play').click(); }
    else if (e.key === 'ArrowRight') bar.querySelector('.d-next').click();
    else if (e.key === 'ArrowLeft') bar.querySelector('.d-prev').click();
  });

  /* ---------------- deep links (#spot=screen.spot, #demo=id) */
  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    const m = h.match(/^spot=([^.]+)\.(.+)$/), d = h.match(/^demo=(.+)$/);
    if (m) {
      const i = screens.findIndex((s) => s.id === m[1]);
      if (i < 0) return;
      stopDemo(); go(i, true);
      explorerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(async () => { await moveGhost(...center(m[2]), 800); pinned = true; show(m[2]); setTimeout(() => ghost.classList.remove('show'), 900); }, 600);
    } else if (d) { explorerEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => playDemo(d[1]), 650); }
  }
  addEventListener('hashchange', fromHash);

  /* ---------------- theme / language */
  document.addEventListener('prism:theme', () => render(false));
  let first = true;
  onLang(() => { if (first) { first = false; return; } render(false); renderDemos(); });
  render(true); renderDemos();
  if (location.hash) setTimeout(fromHash, 500);
  return { playDemo, go, show };
}

Prism.mountGuide = mountGuide;
})();
