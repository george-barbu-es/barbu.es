# barbu.es

Canonical **Knowledge Platform** for the Person entity **George Barbu**.

Not a portfolio template, agency site, or marketing site.

## Constitution (read first)

Every change must align with:

1. [ARCHITECTURE.md](./ARCHITECTURE.md) — constitution (v1.0, frozen)
2. [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) — milestones
3. [DESIGN.md](./DESIGN.md) — design system
4. [CONTENT.md](./CONTENT.md) — how to add Work / Writing / `/now`
5. [KG_AUDIT.md](./KG_AUDIT.md) — Knowledge Graph expectations

If a change conflicts with the constitution, explain the conflict before implementing.

## Stack

Astro (static) · TypeScript · Tailwind CSS v4 · MDX Content Collections · Vercel

## Commands

```bash
npm install
npm run dev      # or: astro dev --background
npm run check
npm run build
npm run preview
```

## Deploy (Vercel)

```bash
npm run build
npx vercel --prod
```

Attach the custom domain `barbu.es` in the Vercel project settings. Post-deploy smoke:

- `/` `/about/` `/work/` `/writing/founder-how-i-think/` `/now/` `/contact/`
- `/llms.txt` `/robots.txt` `/sitemap-index.xml` `/rss.xml`
- View-source: JSON-LD `@id` values `https://barbu.es/#person` and InfoWebPlus org ref

## Project layout

```text
ARCHITECTURE.md          Constitution
CONTENT.md               Authoring guide
DESIGN.md                Design system
KG_AUDIT.md              Graph audit
KNOWN_ISSUES.md          Deferred items
IMPLEMENTATION_PLAN.md   Milestones
src/config/              Person / Org / site facts
src/content/             MDX (pages, work, writing, now)
src/components/          UI + SEO + JsonLd
src/layouts/             BaseLayout
src/pages/               Routes + RSS + robots
public/llms.txt          AI discoverability
public/humans.txt
```

## Domain roles

| Domain | Role |
|--------|------|
| barbu.es | Person + Knowledge Platform |
| infowebplus.com | Organization |
| george.barbu.es | Resume document |
| portfolio.barbu.es | Full project archive |

## Milestone status

- M1–M6 — **complete** (release candidate)
- Production: [https://barbues.vercel.app](https://barbues.vercel.app)
- Attach custom domain `barbu.es` in Vercel when ready ([KNOWN_ISSUES.md](./KNOWN_ISSUES.md))

## Content rules (short)

- Never invent achievements, metrics, or schema relationships
- `worksFor` deferred until Open Facts lock employer Organization URL
- Writing ≠ blog; Cornerstones over cadence
- `/now` exists but is not in primary nav
- Prefer amending content over inventing new top-level sections

## Theme

System preference by default. Toggle persists as `barbu-theme` in `localStorage`.
