# Design: Cláudio Arte

World: the yard wall Cláudio paints against. Sunlit lime-washed plaster, a painted green dado band, works hung with real cast shadows, names sprayed through stencils.

## Colour (src/styles.css :root)
- `--wall #e3e7e0` ground, `--wall-lit #eef1ea` sun falloff (upper left), `--wall-shade #d3d9d0` image placeholders.
- `--band #4d786b` committed green band (hero lower third, Artista, Encomendas), `--band-deep #3f6a5e` paint edge and footer, `--band-ink #f2f5f0` text on band.
- `--ink #1c2422`, `--ink-soft #46524e` text on wall.
- `--spray #f2c230` the only accent: primary buttons, selection, focus on dark surfaces. Never text colour on the wall.
- Viewer uses its own dark room `#121816` so works read without the wall.

## Type
- Display: Big Shoulders Stencil Display 800/900, uppercase, self-hosted via @fontsource. Hero wordmark max 6rem, section titles clamp(2.6rem, 6vw, 4.75rem).
- Text: Schibsted Grotesk Variable (newsroom grotesk, nods to his journalism), 17px base, measure under 60ch.

## Shape and depth
- Sharp corners everywhere (canvases are rectangles). No radius on buttons, tabs or images.
- One depth system: `--hang` shadow (offset down-right, soft blur) for anything hung on the wall; `--hang-lift` on hover.

## Components
- `.plate` stencil-plate button: spray fill with inset bottom edge; `.ghost` outline variant. Press scales to 0.97.
- `.tab` filter buttons with counts, `aria-pressed`.
- `.salon` 12-column salon hang with cycling spans and drops; 2 columns on phones.
- `.strip` horizontal snap strip for photos of the artist in public, captions under images.
- Viewer: full-screen vertical snap, one work per screen, caption low left, rail (close, previous, next) on the right, bottom on phones. Esc and arrow keys.

## Motion
- One authored moment: the hero wordmark is sprayed in (clip-path wipe plus blur, 900ms, ease-out cubic-bezier(0.23,1,0.32,1)).
- UI feedback under 300ms. Everything gated by prefers-reduced-motion.

## Content rules
- No invented titles, prices, awards or quotes. Works carry descriptions only.
- No em dashes, no eyebrow labels, no section numbers.
- Contact buttons appear only when WHATSAPP / INSTAGRAM constants are filled in src/App.jsx.

## Assets
- public/img/*.webp: paintings and photos sent by the artist over WhatsApp (3 and 4 Oct 2026), resized to 1600px and 720px. public/og.jpg cropped from obra-13 for link previews.
