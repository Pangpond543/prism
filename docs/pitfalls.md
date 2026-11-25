# Prism Web — pitfalls

- **The user opens pages by double-click (file://).** No ES modules, no `import()`, no `fetch` of local files — they are
  blocked there and the page goes blank. Plain `<script defer>` in a fixed order (see `tools/pages.js`), data as `.js`.
  New shared function → add it to the `Object.assign(Prism, …)` list at the end of `js/core.js`.
- CSS custom properties can't be set with `Object.assign(el.style, {'--x': 1})` — use `style.setProperty`.

- **Hidden Electron windows draw ~1 fps** → animated backgrounds never finish (dark mode half-faded). Capture uses
  `offscreen: true` + `setFrameRate(60)`. Moving a window off-screen instead makes `capturePage` fail (UnknownVizError).
- Reusing one window across variants: set `prism.theme` / `prism.lang` in localStorage, then reload. Creating a new
  window per variant failed with ERR_FAILED.
- Template literals in job files: a regex like `/\*$/` inside a page-script template becomes `/*$/` = a comment → syntax
  error. Use `[*]`. Selectors like `#btn-font+` need `[id="btn-font+"]`.
- A trailing `*` on a selector in `hot:` means "union of all matches" (and is stripped before querySelectorAll).
- Prism Code's `?act=` list is split on commas → demo code must not contain commas.
- Electron `.dock-btn` click via `element.click()` is not enough for some controls — `page.click()` sends the full
  pointerdown → click sequence (LESSONS #4).
- egui (Player/Studio) uses OpenGL → `PrintWindow` returns black. Use topmost + copy of the window rect only.
- Player's "File info" shows the folder → demo clip lives in `C:\Users\Public\Videos` (no user name). Its "Recent"
  list shows old test files from Claude's AppData copy → don't publish the playlist tab shot.
- Python `http.server` lets the browser cache ES modules (old code after reload) → preview with `tools/serve.js`.
- `container-type` on the stage makes it the containing block for `position: fixed` children → the explain box lives
  outside the stage (`.stage-wrap`).
- **Recording replies from a real app shows real data**: Prism Shot's history lives in Pictures (not virtualised), so a
  test copy returned the user's real captures. Record shapes only, delete the recording, write demo data by hand.
- Image redirects in a capture job: `redirectURL` to a `data:` URL fails for images → serve them from a local http
  server started in the job file (`jobs/shot.js`).
