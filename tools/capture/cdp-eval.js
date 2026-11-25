// Evaluate JS inside a running Tauri app's page over the WebView2 DevTools port (dev helper for writing demo bridges:
// record the SHAPE of real replies, then write made-up data in bridges/*.js — never publish recorded data).
// Start the app with WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--remote-debugging-port=<port> (+ its own
// WEBVIEW2_USER_DATA_FOLDER), then: node tools/capture/cdp-eval.js <port> <url-part> "<expression>"  → JSON on stdout.
const [port, part, expr] = process.argv.slice(2);
(async () => {
  const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const t = list.find((p) => p.type === 'page' && p.url.includes(part));
  if (!t) { console.error('no page with', part, list.map((p) => p.url)); process.exit(1); }
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id !== 1) return;
    const r = d.result && d.result.result;
    if (d.result && d.result.exceptionDetails) console.error(JSON.stringify(d.result.exceptionDetails).slice(0, 800));
    console.log(r && 'value' in r ? (typeof r.value === 'string' ? r.value : JSON.stringify(r.value, null, 1)) : JSON.stringify(d));
    ws.close(); process.exit(0);
  };
  ws.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression: expr, awaitPromise: true, returnByValue: true } }));
})();
