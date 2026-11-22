// Dev helper: PROBE_APP=rec PROBE_PRE="<js before>" PROBE_JS="<js returning a string>" → prints the result. Writes no shots.
const base = require('./' + process.env.PROBE_APP + '.js');
module.exports = { ...base, app: 'probe-' + base.app, variants: [{ theme: 'light', lang: 'th' }], shots: [{ id: 'probe', act: async (p) => {
  if (process.env.PROBE_SHOT) { const s = base.shots.find((x) => x.id === process.env.PROBE_SHOT); if (s && s.act) await s.act(p); await p.sleep(s && s.wait || 1500); }
  console.log('PROBE>\n' + await p.js(process.env.PROBE_JS)); throw new Error('probe done'); } }] };
