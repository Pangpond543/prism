# Prism Web — changelog

## 2026-11-26 — guide pages for Prism LLearn, Prism Shot, Prism Hub (9 apps)
- New pages `llearn.html`, `shot.html`, `hub.html` (+ catalog entries, logos from `tools/brand/logos.js` tileSvg, home
  orbit rings for 9 apps, "9 โปรแกรม" text). VoiceOpen, LLearn and Hub now have `repo` (published to GitHub the same day).
- Capture jobs `hub`, `llearn`, `shot`, `shotcard` with made-up demo bridges: Hub data built from the SHAPE of a sandbox
  recording (`make-hub-demo.py`, asserts no real path), LLearn demo lesson on a gradient video (`demo/llearn-demo.mp4`),
  Shot pictures drawn as SVG and served by a tiny local server (a redirect to `data:` is refused for images).
- `tools/capture/cdp-eval.js`: read a running Tauri app's replies through WebView2's DevTools port to learn their shape
  (never publish what it returns — the Shot test copy returned the user's real capture history).
- Checked: every guide spot + demo step has a box in all 4 variants; all pages open by file:// with no errors.

## 2026-11-23 — credit Claude AI · published
- Wording no longer says the user designed/built the apps alone: hero ("ที่ผมสร้างโดยใช้ Claude AI" / "I made using Claude AI"),
  eyebrow + meta description ("สร้างด้วย Claude AI"), footer on every page ("Thanakorn · สร้างด้วย Claude AI").
  Same in My-Web (Prism panel + Roblox map kicker: "made with Claude AI"). Why: the user asked for honest credit.
- Published: repo Pangpond543/prism → GitHub Pages https://pangpond543.github.io/prism/

## 2026-11-22 — opens by double-click · blue Prism mark · 2D orbit
- **Fix: pages were blank when opened by double-click** (file://). Browsers refuse ES modules / fetch there; I had only tested
  through the http preview. Every script is now a plain `<script defer>` sharing `window.Prism`; guides fill
  `window.PrismGuides`, spot boxes are `data/shots/<app>.js` (`window.PrismShots`, written by the capture tool). Tested
  all 7 pages from disk (Electron, file://): spots, search, orbit all work.
- Prism mark: the centre square is aqua-blue (was peach), like the original Prism icon — here and in My-Web's Prism panel.
- Home orbit is now flat (2D): every app has its own ring with a comet trail in its colour, inner rings turn faster,
  Player + Studio share a ring and circle each other (they are used together); halo of split light around the mark,
  twinkling dust, pointer parallax, hover slows everything and lights the ring. Pauses when off-screen.

## 2026-11-21 — first version
- Built the site: home + 6 guide pages (Size, Cam, Player·Studio, Rec, VoiceOpen, Code), TH/EN, light/dark, glass theme.
  Why: the user wanted a big, elegant site whose focus is teaching each app "by pointing at it".
- Capture tool (`tools/capture`) that screenshots the real app pages with made-up demo data and records exact spot boxes,
  in 4 variants (light/dark × TH/EN) so the guide matches what the visitor's own app will look like.
- Rec floating bar + VoiceOpen glow are re-drawn (`mock/`) instead of captured: the real ones refract the user's screen.
- Ctrl+K search with Thai fuzzy matching (Thai has no spaces between words).
- Phones: explain box below the picture + zoom onto the spot (the full app is ~350 px wide there).

## 2026-11-27 — Android download on the Prism Cam page, Prism Hub shortcut on Home
- Cam page: second download button "Android app (APK)" reads the newest `prism-cam-android` release (`android:` field in `data/apps.js`, `apk` in `release()`), plus an Android feature card and FAQ.
- Home install step 01: tip to install Prism Hub once and get every app from it.
- Shot and Player/Studio stay without `repo` until the user makes `prism-shot` / `prism-media` public (they are private on GitHub now; a repo here would show a broken download).
