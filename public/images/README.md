# Image assets

Prefer stable URLs used consistently in HTML, Open Graph, and Person JSON-LD `image`.

Provisional remote assets are configured in `src/config/person.ts` (Cloudinary).

For Milestone 2+, consider vendoring optimized logo and portrait into this folder (or `src/assets/`) to reduce CDN coupling and enable Astro image optimization locally.

Do not invent alternate identity photos that diverge from controlled sameAs profiles.
