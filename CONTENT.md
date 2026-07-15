# CONTENT.md

How to change content on **barbu.es** without weakening the Knowledge Platform.

Read [ARCHITECTURE.md](./ARCHITECTURE.md) first. If a change conflicts with it, stop and amend the constitution explicitly.

---

## Amend constitution vs add content

| Change type | What to do |
|-------------|------------|
| New Work / Writing / `/now` / copy edits | Edit MDX under `src/content/` — **no constitution change** |
| New top-level nav section (Talks, Reading, …) | Requires real content **and** ARCHITECTURE.md IA amendment |
| New schema relationship (`worksFor`, etc.) | Confirm Open Fact, then update `src/config/` + JSON-LD |
| Design token / component change | Keep [DESIGN.md](./DESIGN.md) in sync |

---

## Update `/now`

1. Edit `src/content/now/current.mdx`
2. Set `updatedDate` to today (`YYYY-MM-DD`)
3. Keep it short: Focus / Building / Learning / Not doing
4. Run `npm run build`

Only one “current” entry should matter; sort uses latest `updatedDate`.

---

## Add a Work entry

1. Create `src/content/work/your-slug.mdx`
2. Fill **required** frontmatter:

```yaml
title: ...
description: ...
overview: ...
problem: ...
solution: ...
role: ...
infoWebPlusRelationship: ... # or "none — …"
featured: false
draft: false
order: 10
schemaType: CreativeWork # or SoftwareApplication
credit: creator # use contributor for employer work
aboutInfoWebPlus: false
# relatedUrl: https://…   # optional external product URL
```

3. Optional fields only when factual: `architecture`, `businessOutcome`, `lessonsLearned`, `technologies`
4. Never invent metrics or ownership
5. Run `npm run check && npm run build`

---

## Add a Cornerstone / Writing essay

1. Create `src/content/writing/your-slug.mdx`
2. Frontmatter:

```yaml
title: ...
description: ...
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD # optional
cornerstone: true # only for durable entity essays
draft: false
```

3. Prefer Person-anchored H1s for Cornerstones
4. No categories/tags until earned (ARCHITECTURE.md)
5. Build and confirm it appears in `/writing/` and `/rss.xml`

---

## Edit About / Experience / Contact

These live in `src/content/pages/*.mdx` (`path`, `schemaType`, `draft`).

Keep **one intent per page**. Do not turn About into a resume dump (resume stays on george.barbu.es).

---

## Entity config (rare)

| File | Purpose |
|------|---------|
| `src/config/person.ts` | Person facts, `sameAs`, employer (`worksFor` when unlocked) |
| `src/config/organizations.ts` | InfoWebPlus org reference |
| `src/config/site.ts` | Site URL, nav, external CTAs |

Stable `@id`s must not change casually (`https://barbu.es/#person`, etc.).

---

## Publish checklist

- [ ] Factual only — no invented outcomes
- [ ] Domain roles respected (Person vs Org vs Resume vs Portfolio)
- [ ] `draft: false` only when ready to index
- [ ] `npm run check` and `npm run build` pass
- [ ] Update `/now` if the change reflects current focus
- [ ] If Graph edges changed, skim [KG_AUDIT.md](./KG_AUDIT.md) expectations
