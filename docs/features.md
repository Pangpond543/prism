# Prism Web — features (behaviour to keep)

## Home (`index.html`)
- Hero ("สวย เบา และสอนตัวเองได้"), Ctrl+K search button, facts row, 3D orbit of the 7 app logos around the Prism mark
  (tilts toward the pointer, slows on hover, click a logo → its page).
- App cards: logo(s), tagline, stack chips, live version from GitHub (or "guide ready · download soon").
- "How Prism teaches": a live mini guide on the real Prism Cam screen (8 spots) + "watch the demo" (Discord camera).
- Install: download → SmartScreen helper (drawn dialog, "More info → Run anyway" highlighted) → updates via ⓘ.

## App pages (`<app>.html`)
- Hero: logos, name "by 543", tagline, stack, long description, download card (Setup / Portable with size + date from the
  newest GitHub Release, SmartScreen note) or "download coming soon".
- Sticky sub-nav: Explore · Demos · Features · Keys · FAQ (highlights the section on screen).
- **Explorer**: screen tabs; real screenshot that swaps with the site theme + language; spots breathe softly until first use;
  hover/tap/focus a spot → glow + dim around + explain box (title, what it does, tip, keys) placed beside it; click pins it;
  side list mirrors the spots; "Tour every spot" (ghost cursor visits each); "Numbers" toggle.
- **Demos** ("what do you want to do?"): a ghost cursor moves on an arc, clicks (ripple), drags, shows key presses, changes
  screens, with a narration bar (prev / pause / next / close, ← → Space Esc); watched demos get a ✓ (localStorage `prism.web.done`).
- Features grid, keyboard shortcuts, FAQ (details/summary).
- Deep links: `#spot=<screen>.<spot>` (ghost points at it and pins the box), `#demo=<id>` (plays it).

## Everywhere
- Ctrl+K / "/" palette: apps, every spot, every demo, every shortcut, in both languages; Thai without spaces matched by
  2-letter pieces; ↑ ↓ Enter; jumps to the exact spot on the right page.
- TH/EN switch and dark mode (shared keys with the apps), Prism WebGL background (still on phones), reveal on scroll.
- Phones: no backdrop blur, explain box under the picture, the picture glides-zooms onto the active spot.
