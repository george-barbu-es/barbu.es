# Open Graph images

Static **1200×630** JPEG share images for LinkedIn / Open Graph / Twitter.

| Path | Use |
|------|-----|
| `/og/default.jpg` | Site-wide fallback (home, about, work, …) |
| `/og/writing.jpg` | Writing articles without a dedicated image |
| `/og/writing/{slug}.jpg` | Optional per-article image (preferred when present) |

Do not use the Person portrait here — it is a large portrait unsuitable for link previews. Person schema `image` stays in `src/config/person.ts`.

To add an article image: place `public/og/writing/{slug}.jpg` (1200×630) or set frontmatter `image: /og/writing/{slug}.jpg`.
