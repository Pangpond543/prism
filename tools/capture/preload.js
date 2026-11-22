// Runs before the app page: (for Tauri apps) install a fake window.__TAURI__ that answers with demo data.
const arg = (k) => (process.argv.find((a) => a.startsWith(`--pw-${k}=`)) || '').split('=').slice(1).join('=');
const bridge = arg('bridge');
if (bridge) {
  try { require(bridge)(window); } catch (e) { console.error('bridge failed', e); }
}
// no blinking caret / no scrollbars in screenshots
window.addEventListener('DOMContentLoaded', () => {
  const st = document.createElement('style');
  st.textContent = '*{caret-color:transparent!important} ::-webkit-scrollbar{width:0!important;height:0!important}';
  document.head.appendChild(st);
});
