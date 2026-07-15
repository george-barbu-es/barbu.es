# IMPLEMENTATION_PLAN.md

**Project:** barbu.es  
**Constitution:** [ARCHITECTURE.md](./ARCHITECTURE.md) v1.0 (frozen)  
**Plan version:** 1.0  
**Rule:** No implementation may violate the constitution unless we explicitly amend it.

---

## Operating rules

1. Read `ARCHITECTURE.md` before every milestone and every significant change.
2. Deliver **one milestone at a time**. Each milestone must be a complete, production-ready increment.
3. **Stop for approval** after each milestone. Do not start the next one automatically.
4. Prefer long-term architecture over speed. Prefer simpler solutions; propose them when better.
5. Optimize for maintainability, readability, and AI understanding — not Lighthouse vanity.
6. Question every decision. If a request weakens the Knowledge Platform, say so before coding.
7. Open Facts (`ARCHITECTURE.md` §17) must be confirmed or explicitly deferred **before Milestone 4 content ships publicly**.

### Workflow (roles)

```text
Strategy (ChatGPT / human)
        ↓
Constitution (ARCHITECTURE.md)
        ↓
This plan (milestones)
        ↓
Implementation (Cursor)
        ↓
Architecture critique (Grok / human)
        ↓
Approve → next milestone
```

---

## Challenges to the original milestone brief (accepted into this plan)

| Original risk | Decision in this plan |
|---------------|------------------------|
| M3 omitted `/now` | `/now` is constitutional — include in **M3** (structure) and finalize copy in **M4** |
| M2 listed “Cards” as a default | Cards only where they aid interaction/scan of Work/Writing lists — **not** hero chrome; prefer typographic lists |
| Theme split across M1/M2 | M1 = theme **infrastructure** (tokens + system preference toggle). M2 = visual **refinement** of the same system |
| Content before Open Facts | **Gate:** confirm §17 before M4 public factual claims / schema edges |
| “No polished pages” in M1 vs “production-ready” | M1 is production-ready **infrastructure** (builds, deploys, SEO pipes work) with unstyled/minimal shells — not a blank repo |

---

## Milestone map

| # | Name | Outcome |
|---|------|---------|
| **M1** | Foundation | Astro Knowledge Platform skeleton ships |
| **M2** | Design System | Visual/UX system complete |
| **M3** | Core Pages | Full IA routes with placeholder MDX |
| **M4** | Content | Factual Person content + first Cornerstone |
| **M5** | Knowledge Graph | Entity/schema/AI surface verified |
| **M6** | Final Polish | Ship-ready production release |

Evolution surfaces (Talks, Reading, Books, OSS, …) are **out of scope** until real content exists and the constitution is amended.

---

## Milestone 1 — Foundation

**Goal:** Production-ready Astro foundation for the Knowledge Platform. Infrastructure only.

### Deliverables

- Astro + TypeScript + Tailwind CSS + MDX
- Content Collections with typed schemas for:
  - `writing` (incl. `cornerstone` flag)
  - `work` (required vs optional fields per constitution)
  - `now` (dated current-focus entry or single file)
  - shared site/person config module (IDs, sameAs placeholders, org refs)
- Vercel configuration (`vercel.json` if needed; Astro adapter as required)
- SEO foundation: canonicals, metadata helpers, OG/Twitter plumbing
- `robots.txt`, sitemap, RSS (Writing), `llms.txt`, `humans.txt`
- Theme system: CSS variables, system-preference default, minimal toggle island
- Typography + spacing **token** layer (not final art direction)
- Image optimization path (Astro assets / documented remote portrait+logo URLs)
- JSON-LD infrastructure:
  - stable `@id`s: `#person`, `#website`
  - Person schema builder
  - Organization **references** (InfoWebPlus; employer only if Open Fact confirmed)
- Reusable `BaseLayout`, SEO component(s), JSON-LD injector
- Minimal route shells so sitemap/RSS/build succeed (unstyled or utility-styled only)
- README: how to run, how content collections work, pointer to constitution + this plan

### Explicitly out of scope

- Final visual design
- Polished page compositions
- Real CV rewrite / Cornerstone prose (placeholders OK)
- Evolution roadmap pages

### Done when

- [x] `astro check` / typecheck passes
- [x] Production build succeeds locally
- [x] Deployable to Vercel (static output; `vercel.json` present — connect project when ready)
- [x] `/robots.txt`, sitemap, RSS, `llms.txt`, `humans.txt` resolve
- [x] Person JSON-LD present with stable `@id`s (no invented `worksFor` if deferred)
- [x] Content collection schemas match constitution field rules
- [x] Theme toggle respects `prefers-color-scheme`
- [x] No constitution violations

### Approval gate

**Stop.** Await approval before M2.

**M1 status:** Complete — awaiting human approval (2026-07-15).

---

## Milestone 2 — Design System

**Goal:** Complete design system for a timeless executive Knowledge Platform.

### Deliverables

- Typography scale and font loading (expressive, non-default stack; readable body)
- Spacing scale, color tokens (light + dark), focus states
- Components (minimal set):
  - Navigation (primary IA only)
  - Footer (logo, Resume/Portfolio outbound, quiet `/now` link)
  - Hero (portrait-capable; identity-first)
  - Button / text link patterns
  - Prose styles for MDX
  - Work/Writing list items (card **only** if it improves scan; default to typographic rows)
- Dark + light modes polished
- Responsive behavior (mobile → desktop)
- Accessibility: focus, contrast, landmarks, skip link
- Motion: only if it supports UX hierarchy (constitution: no unnecessary animation)

### Explicitly out of scope

- Final marketing copy
- New IA routes
- Decorative SaaS patterns (glassmorphism, purple glow, fake trust bars)

### Done when

- [x] Design tokens documented (in code + short `DESIGN.md` or README section)
- [x] Nav/Footer/Hero/Prose/Buttons usable across pages
- [x] Light/dark verified; system default correct
- [x] Keyboard + basic screen-reader landmarks OK
- [x] No card-in-hero; no agency landing aesthetic

### Approval gate

**Stop.** Await approval before M3.

**M2 status:** Complete — awaiting human approval (2026-07-15).

---

## Milestone 3 — Core Pages

**Goal:** Implement full launch IA with placeholder MDX. Information architecture over polish.

### Routes

| Route | Notes |
|-------|--------|
| `/` | Home — identity summary shell |
| `/about` | Entity story shell |
| `/experience` | Executive narrative shell |
| `/work` + `/work/[slug]` | Collection + detail from content |
| `/writing` + `/writing/[slug]` | Collection + detail; Cornerstone-capable |
| `/contact` | Person contact |
| `/now` | Current focus (not in primary nav; linked from footer/home) |

External CTAs: Resume → `george.barbu.es`, Portfolio → `portfolio.barbu.es`.

### Deliverables

- All routes above wired to layouts + collections
- Placeholder MDX that encodes **structure** (headings matching page contracts) without fake achievements
- Breadcrumbs on nested pages
- Page-level JSON-LD types per constitution (`ProfilePage`/`WebPage`, `CollectionPage`, `Article`, `WebPage` for `/now`)
- Intent-clear H1s (one purpose per page)

### Explicitly out of scope

- Final factual rewrite (M4)
- Graph audit depth (M5)
- Evolution pages

### Done when

- [x] Every launch URL exists and is linked correctly (nav vs `/now`)
- [x] No empty primary-nav sections
- [x] Placeholders do not invent metrics, clients, or outcomes
- [x] Build + preview show coherent IA
- [x] Domain CTAs outbound only (no CV/portfolio duplication)

### Approval gate

**Stop.** Await approval before M4.  
**Also confirm Open Facts §17** (or deferrals) before M4.

**M3 status:** Complete — awaiting human approval (2026-07-15).

**Before M4, confirm:**

1. Employer Organization for `worksFor` (or defer)
2. Launch Work set (which drafts become real)
3. First Cornerstone scope
4. Contact channel(s)
5. `/now` factual snapshot

---

## Milestone 4 — Content

**Goal:** Replace placeholders with factual Knowledge Platform content.

### Deliverables

- About story (principles, InfoWebPlus origin, how George thinks)
- Experience in executive language (outcomes; not a resume dump)
- First Work entries (few; required fields only; optional only if real)
- First **Cornerstone** article (Person-anchored; living reference)
- `/now` initial dated content
- Contact facts
- Home identity sentence aligned with About + Cornerstone
- Update `llms.txt` to match real URLs and facts
- Align portrait/logo assets (stable URLs)

### Content rules (constitution)

- Never invent achievements, metrics, or relationships
- Employer platform work: restrained contribution framing or omit
- InfoWebPlus depth stays referenced, not catalogued
- Writing ≠ blog; no categories/tags yet

### Done when

- [x] Open Facts applied or explicitly omitted in schema/copy
- [x] No placeholder lorem or fake outcomes remain on launch paths
- [x] Cornerstone published and linked from Writing + `llms.txt`
- [x] Experience does not duplicate `george.barbu.es`
- [x] Work set is small and honest
- [x] `/now` has `last updated`

### Approval gate

**Stop.** Await approval before M5.

**M4 status:** Complete — awaiting human approval (2026-07-15).

**Deferred Open Facts (intentional):**

- JSON-LD `worksFor` — Liquidity Media is stated in Experience prose from CV materials; Organization URL/`@id` not locked, so schema edge remains unset.
- Purple Cars / ElevCode / Safe Box — omitted (insufficient public factual depth).
- CV performance metrics — omitted (not independently verified for Knowledge Platform).
- Phone number — omitted from Contact (email + profiles sufficient; phone remains on resume/portfolio if needed).

---

## Milestone 5 — Knowledge Graph

**Goal:** Verify the Knowledge Platform is machine-legible and internally consistent.

### Review checklist

- [x] Entity consistency (name, roles, founder edge, sameAs)
- [x] JSON-LD on every major page; stable `@id`s unchanged
- [x] No invented `worksFor` / ownership edges
- [x] Internal links reinforce graph (Person ↔ Org ↔ Work ↔ Writing) without artificial spam
- [x] Canonical URLs correct
- [x] Open Graph / Twitter match Person identity
- [x] `llms.txt` / `humans.txt` / RSS / sitemap accurate
- [x] AI answerability smoke test (manual): who / founder / built / thinks / now
- [x] Remove anything that weakens the graph (duplicate intent, contradictory copy, hollow schema)

### Done when

- [x] Checklist complete
- [x] Issues fixed or explicitly deferred with reason
- [x] Critique pass (architecture review) documented briefly in PR/notes

### Approval gate

**Stop.** Await approval before M6.

**M5 status:** Complete — awaiting human approval (2026-07-15).  
**Audit log:** [KG_AUDIT.md](./KG_AUDIT.md)

---

## Milestone 6 — Final Polish

**Goal:** Production release quality — craft, not vanity.

### Deliverables

- Performance pass (images, fonts, JS budget — theme island only if possible)
- Accessibility pass (axe/manual keyboard)
- Micro-animations only if they support hierarchy
- Visual refinement within design system
- Code cleanup; dead placeholders removed
- Documentation: README + how to add Work / Cornerstone / update `/now`
- Production deployment on Vercel for `barbu.es`
- Post-deploy smoke: key URLs, schema, `llms.txt`

### Done when

- [x] Production URL live ([https://barbues.vercel.app](https://barbues.vercel.app) — attach `barbu.es` in Vercel)
- [x] Constitution still intact (no last-minute Services/Blog/Speaking)
- [x] Known issues listed if any ([KNOWN_ISSUES.md](./KNOWN_ISSUES.md))
- [x] Handoff: “how to amend constitution vs how to add content” ([CONTENT.md](./CONTENT.md))

### Approval gate

**Release.** Further work = new milestones or constitution amendments (Talks, Reading, …).

**M6 status:** Complete — release candidate (2026-07-15).  
**Production:** https://barbues.vercel.app  
**Inspect:** https://vercel.com/infowebplus/barbu.es/J2ME4i9JDNC2JLzp2yug2HtNBCUT

---

## Cross-cutting non-goals (all milestones)

- Agency/services pages on barbu.es
- Blog chrome, tag/category/archive routes (until earned)
- Empty Evolution roadmap pages
- Duplicating resume or full portfolio
- Invented schema, testimonials, or metrics
- React/SPA complexity without necessity
- Optimizing for Lighthouse screenshots over trust

---

## Suggested implementation order inside M1 (when approved)

1. Scaffold Astro + TS + Tailwind + MDX  
2. Site config + entity constants (`#person`, `#website`, InfoWebPlus ref)  
3. Content collection schemas  
4. BaseLayout + SEO + JSON-LD helpers  
5. Theme tokens + toggle  
6. Utility routes (`robots`, sitemap, RSS, `llms.txt`, `humans.txt`)  
7. Minimal page shells + Vercel deploy check  
8. README  

Do not start M1 until you explicitly approve this plan and say to begin Milestone 1.

---

## Approval

| Artifact | Status |
|----------|--------|
| ARCHITECTURE.md v1.0 | Approved (constitution) |
| IMPLEMENTATION_PLAN.md v1.0 | Awaiting your approval |
| Milestone 1 implementation | Not started — requires explicit go-ahead |
