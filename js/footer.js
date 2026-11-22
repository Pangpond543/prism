(() => {
'use strict';
const Prism = window.Prism = window.Prism || {};
// Footer shared by every page.
const { t, onLang, I, APPS } = Prism;
const el = document.getElementById('foot');
onLang(() => {
  el.innerHTML = `<div class="wrap">
    <a class="brand" href="index.html"><span class="mark" aria-hidden="true"><i></i><i></i><i></i></span>Prism <small>by 543</small></a>
    <div class="links">${APPS.map((a) => `<a href="${a.id}.html">${a.name}</a>`).join('')}</div>
    <div class="links"><a href="https://github.com/Pangpond543" target="_blank" rel="noopener">${I.github} GitHub</a><a href="https://pangpond543.github.io/" target="_blank" rel="noopener">Thanakorn · ${t(['สร้างด้วย Claude AI', 'made with Claude AI'])}</a></div>
  </div>`;
});
})();
