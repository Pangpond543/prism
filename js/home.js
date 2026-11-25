(async () => {
'use strict';
const Prism = window.Prism = window.Prism || {};
// Home: hero orbit of app logos, app cards, a live mini guide (Prism Cam), install steps.
const { boot, APPS, t, I, esc, onLang, openPalette, reveal, release, mountGuide } = Prism;

boot('home');
document.getElementById('hero-search').onclick = () => openPalette();

/* ---------------- app cards */
const grid = document.getElementById('app-grid');
onLang(() => {
  grid.innerHTML = APPS.map((a, i) => `<a class="app-card glass lit rv" href="${a.id}.html" style="--i:${i};--c:${a.c[1]}88">
    <div class="logos">${a.logos.map((k) => `<img src="img/logos/${k}.svg" alt="" width="58" height="58">`).join('')}</div>
    <h3>${esc(a.name)} <small>by 543</small></h3>
    <p>${esc(t(a.tag))}</p>
    <div class="chips">${a.stack.slice(0, 3).map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
    <div class="foot">${a.repo ? `<span class="dot"></span><span data-ver="${a.id}">${t(['ดาวน์โหลดได้', 'Available'])}</span>` : `<span class="dot wip"></span><span>${t(['คู่มือพร้อม · ดาวน์โหลดเร็ว ๆ นี้', 'Guide ready · download soon'])}</span>`}
      <span class="go">${t(['เปิดคู่มือ', 'Open guide'])} ${I.arrow}</span></div></a>`).join('');
  reveal(grid);
  APPS.filter((a) => a.repo).forEach(async (a) => {
    const r = await release(a);
    const el = grid.querySelector(`[data-ver="${a.id}"]`);
    if (el && r?.tag) el.textContent = `${t(['ดาวน์โหลดได้', 'Available'])} · ${r.tag}`;
  });
});

/* ---------------- orbit: a flat solar system around the Prism mark.
   Every app has its own ring (inner rings turn faster, like real planets) and a comet trail in its colour.
   Prism Player + Prism Studio share one ring and circle each other — they are used together.
   Pointer → gentle parallax (outer rings drift more). Hover a planet → everything slows, its ring lights up. */
const orbit = document.getElementById('orbit');
const RINGS = { size: .14, cam: .185, media: .238, rec: .29, voiceopen: .325, code: .36, llearn: .395, shot: .428, hub: .46 }; // radius ÷ orbit width
const PAIR = .046;                                                                     // Player ⇄ Studio distance from their centre
const mk = (cls, css = {}) => {
  const e = document.createElement('div'); e.className = cls;
  for (const [k, v] of Object.entries(css)) k.startsWith('--') ? e.style.setProperty(k, v) : (e.style[k] = v); // custom props need setProperty
  orbit.appendChild(e); return e;
};
const planet = (a, k, small) => {
  const el = document.createElement('a');
  el.className = 'planet' + (small ? ' small' : ''); el.href = `${a.id}.html`; el.tabIndex = -1; el.style.setProperty('--c', a.c[1]);
  el.innerHTML = `<img src="img/logos/${k}.svg" alt=""><span>${k === 'studio' ? 'Prism Studio' : k === 'player' ? 'Prism Player' : a.name}</span>`;
  orbit.appendChild(el);
  return el;
};
for (let i = 0; i < 26; i++) mk('dust', { left: `${4 + Math.random() * 92}%`, top: `${4 + Math.random() * 92}%`, animationDelay: `${-Math.random() * 4.5}s`, animationDuration: `${3 + Math.random() * 4}s` });
const bodies = APPS.map((a, i) => {
  const r = RINGS[a.id] ?? .3 + i * .03;
  const ring = mk('ring' + (i % 2 ? ' dash' : ''), { '--r': r, '--c': a.c[1] });
  const b = { a, r, ring, ang: -Math.PI / 2 + i * 2.39996, w: .00042 * Math.pow(.15 / r, 1.5), els: [] }; // golden-angle start, Kepler speed
  if (a.logos.length > 1) {
    b.pairRing = mk('pair-ring', { '--pr': PAIR, '--c': a.c[1] });
    b.link = mk('pair-link', { '--c': a.c[1] });
    b.spin = 0;
    b.els = a.logos.map((k) => planet(a, k, true));
  } else b.els = [planet(a, a.logos[0])];
  b.els.forEach((el) => { el.onpointerenter = () => ring.classList.add('on'); el.onpointerleave = () => ring.classList.remove('on'); });
  return b;
});
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
let hover = false, speed = 1, last = performance.now(), px = 0, py = 0, mx = 0, my = 0, visible = true, raf = 0;
orbit.addEventListener('pointerenter', () => (hover = true));
orbit.addEventListener('pointerleave', () => (hover = false));
addEventListener('pointermove', (e) => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; }, { passive: true });
function draw(now) {
  const dt = Math.min(50, now - last); last = now;
  speed += ((hover ? .22 : 1) - speed) * .06;
  mx += (px - mx) * .05; my += (py - my) * .05;
  const W = orbit.clientWidth;
  for (const b of bodies) {
    if (!still) b.ang += dt * b.w * speed;
    const ox = mx * b.r * 46, oy = my * b.r * 46;          // parallax: outer rings drift more
    const sh = `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))`;
    b.ring.style.transform = sh;
    b.ring.style.setProperty('--p', `${(b.ang * 180 / Math.PI + 90).toFixed(2)}deg`);
    const cx = Math.cos(b.ang) * b.r * W + ox, cy = Math.sin(b.ang) * b.r * W + oy;
    if (b.els.length === 1) { b.els[0].style.transform = `translate(${cx}px, ${cy}px)`; continue; }
    // the pair: both circle their shared centre, three times faster than they go round the sun
    if (!still) b.spin -= dt * .0014 * speed;
    const d = PAIR * W, dx = Math.cos(b.spin) * d, dy = Math.sin(b.spin) * d;
    b.els[0].style.transform = `translate(${cx + dx}px, ${cy + dy}px)`;
    b.els[1].style.transform = `translate(${cx - dx}px, ${cy - dy}px)`;
    b.pairRing.style.transform = `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px)) rotate(${b.spin}rad)`;
    b.link.style.width = `${2 * d}px`;
    b.link.style.transform = `translate(${cx - dx}px, ${cy - dy}px) rotate(${b.spin}rad)`;
  }
  raf = visible && !still ? requestAnimationFrame(draw) : 0;
}
// only animate while the hero is on screen
new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf && !still) { last = performance.now(); raf = requestAnimationFrame(draw); } }).observe(orbit);
raf = requestAnimationFrame(draw);
if (still) addEventListener('resize', () => requestAnimationFrame(draw));

/* ---------------- live mini guide (real Prism Cam screen, a handful of spots + the Discord demo) */
const guide = window.PrismGuides.cam, shots = (window.PrismShots || {}).cam || {};
const st = guide.screens.find((s) => s.id === 'studio');
const pick = ['stage', 'vcam', 'camera', 'face', 'anim', 'layers', 'scenes', 'rec'];
const mini = { screens: [{ ...st, hot: Object.fromEntries(pick.map((k) => [k, st.hot[k]])) }], demos: guide.demos.filter((d) => d.id === 'discord') };
const box = document.getElementById('mini');
const g = mountGuide({ app: APPS.find((a) => a.id === 'cam'), guide: mini, shots, explorerEl: box, demosEl: null });
box.classList.add('explorer');
const play = document.createElement('div');
play.className = 'mini-actions';
onLang(() => {
  play.innerHTML = `<button class="btn primary" type="button">${I.play}${t(['ดูเมาส์สาธิต: ใช้เป็นกล้องใน Discord', 'Watch the demo: use it as your Discord camera'])}</button><a class="btn" href="cam.html#learn">${t(['คู่มือ Prism Cam เต็ม ๆ', 'Full Prism Cam guide'])} ${I.arrow}</a>`;
  play.querySelector('button').onclick = () => g.playDemo('discord');
});
box.after(play);
})();
