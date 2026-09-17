# Open Graph images

Static **1200×630** PNG share images for LinkedIn / Open Graph / Twitter.

PNG (not JPEG) — text cards stay sharp after LinkedIn recompression.

| Path | Use |
|------|-----|
| `/og/default.png` | Site-wide fallback (home, about, work, …) |
| `/og/writing.png` | Writing articles without a dedicated image |
| `/og/writing/{slug}.png` | Optional per-article image (preferred when present) |

Do not use the Person portrait here — it is a large portrait unsuitable for link previews. Person schema `image` stays in `src/config/person.ts`.

To add an article image: place `public/og/writing/{slug}.png` (1200×630) or set frontmatter `image: /og/writing/{slug}.png`.

Render tip: generate at 2× then LANCZOS-downscale; use a bold mono face.
