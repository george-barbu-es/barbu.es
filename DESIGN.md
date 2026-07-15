# DESIGN.md

Design system for **barbu.es**.  
Compatible with [ARCHITECTURE.md](./ARCHITECTURE.md) v1.0.

## Intent

Simple **programmer style** Knowledge Platform.

Optimize for: clarity, scan speed, trust, entity recognition.  
Reject: SaaS landing polish, glassmorphism, purple glow, card grids, decorative animation.

## Typography

| Role | Family | Use |
|------|--------|-----|
| UI / body | **IBM Plex Sans** | Prose, lede |
| Display / chrome | **IBM Plex Mono** | H1–H3, nav, brand, buttons, paths |

Self-hosted via `@fontsource`.

## Color

Palette derived from the portrait: silver-gray backdrop + burgundy shirt.

| Token | Light | Dark |
|-------|-------|------|
| `--color-bg` | `#f3f1f0` | `#100c0d` |
| `--color-fg` | `#1c1214` | `#ece7e5` |
| `--color-muted` | `#6e5c60` | `#a09294` |
| `--color-accent` | `#6b2834` | `#c47882` |
| `--color-surface` | `#faf8f7` | `#1a1416` |

Theme: **dark** default; toggle persists `barbu-theme` (`light` when user opts in).

## Layout

- One column width: `--page-max` = `--measure` = `40rem`
- Header, main, and footer share `.site-shell`
- Sharp corners (`--radius: 0`)
- Hairline borders, no shadows (except focus)
- Portrait: small square, not full-bleed fashion hero

## Components

| Component | Notes |
|-----------|--------|
| `SiteHeader` | Brand = Home; primary routes only (no Resume/Portfolio) |
| `SiteFooter` | Identity left, dot-separated profiles/outbound right; compact copyright |
| `Hero` | Name as brand; `~/barbu.es` path; compact portrait |
| `Button` | Mono, sharp |
| `ContentListItem` | Mono titles, rule rows |
| `ThemeToggle` | Text label (`dark` / `light`) |

## Do not

- Serif “executive magazine” display faces
- Soft rounded SaaS chrome
- Card grids / gradient washes
- Animation for decoration
- Terminal-green accent (not in the portrait)
