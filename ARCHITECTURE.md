# ARCHITECTURE.md

**Version:** 1.0 (frozen)  
**Role:** Project constitution for **barbu.es**  
**Entity:** George Barbu (Person)  
**Horizon:** 5–10+ years

---

## Constitution

This document is the permanent governance source for barbu.es.

**Every future task must:**

1. Read this file first.
2. Evaluate the requested change against it.
3. If the change conflicts, explain the conflict **before** implementing anything.
4. Prefer amending reality-based facts over inventing pages, edges, or marketing.

Amendments to this constitution are allowed when reality changes (new role, durable new content type with real material, corrected facts).  
Amendments are **not** allowed to justify trendy UI, thin SEO pages, cadence theater, or short-term ranking tricks.

**Status:** Version 1.0 — approved and frozen. Application implementation proceeds under this constitution. Open Facts (§17) may still be confirmed during build without amending the constitutional principles.

---

## 1. Mission — Knowledge Platform

We are not building a personal portfolio, agency site, or marketing site.

We are building a **Knowledge Platform** around one Person entity: **George Barbu**.

A Knowledge Platform is more than a profile page or a Knowledge Graph dump. It is:

- the canonical source describing who George Barbu is
- a durable map of how he relates to InfoWebPlus and his work
- a growing body of thinking (Writing / Cornerstones)
- a machine-readable entity surface for search engines and LLMs
- a reference humans and AI systems can trust for the next decade

### Primary goals (in order)

1. **Knowledge Platform** — identity, relationships, thinking, and work as one coherent system
2. **Entity SEO** — clear Person / Organization boundaries and signals
3. **AI Discoverability** — retrieval-friendly, factual, non-contradictory public truth

Traditional SEO (rankings, keyword tactics) is secondary.

Knowledge Graph structure is a **mechanism** inside the Knowledge Platform — not the product name and not the only goal.

**Success metric:** Humans and AI systems can confidently and accurately answer who George Barbu is, what he does, how he relates to InfoWebPlus, what he has built, and how he thinks — without hallucinating.

Success is **not** Lighthouse vanity, animations, or visual novelty.

---

## 2. Business Goal

barbu.es exists to make George Barbu **legible, trusted, and referenceable**.

Business outcomes the platform should enable over time:

1. **Authority** — George is understood as a founder, engineering leader, and architect — not as a interchangeable frontend contractor identity.
2. **Trust** — recruiters, founders, engineers, partners, and AI systems use this site as the primary reference.
3. **Clarity of relationship** — InfoWebPlus is clearly the company George founded; company depth lives on infowebplus.com.
4. **Opportunity quality** — inbound conversations (leadership, architecture, AI/automation, technical strategy, InfoWebPlus work) arrive pre-contextualized.
5. **Compounding IP** — Cornerstones, Work, and Experience become durable intellectual property that compounds trust.

This is not a lead-gen landing page. Conversion is secondary to becoming the canonical reference.

---

## 3. Personal Principles

These principles guide product decisions, Writing, Work narratives, and engineering choices on this platform:

1. Software exists to solve business problems.
2. Architecture is a business decision.
3. Complexity is technical debt.
4. Measure outcomes, not output.
5. Prefer systems over heroics.
6. Automate repetitive work.
7. Truth beats marketing.
8. Trust compounds.
9. Document decisions.
10. Build for the next decade, not the next sprint.

If a page, feature, or claim violates these principles, it does not ship.

---

## 4. Knowledge Areas

The Knowledge Platform concentrates on a small set of areas. These inform `knowsAbout`, Writing / Cornerstones, and Work framing — not a menu of service pages.

| Area | What it means here |
|------|--------------------|
| Engineering Leadership | How teams ship; decision quality; maturity |
| Software Architecture | Systems that survive handover and scale |
| Platform Engineering | Reducing delivery friction; reusable foundations |
| AI & Business Automation | Pragmatic AI and automation where it earns its place |
| Technical Strategy | Aligning engineering choices with business outcomes |
| Product & Delivery | Shipping thin vertical value; honest scope |
| Knowledge Platforms & Entity clarity | Making people, companies, and work machine-understandable |
| Business Systems | Software as operational leverage, not decoration |

Do not expand Knowledge Areas into empty topic landing pages. Earn coverage through Cornerstones, Work, and Experience.

---

## 5. Domain responsibilities (non-negotiable)

Each domain has **one** primary responsibility. Never blur them.

| Domain | Canonical role | What lives here | What must not live here |
|--------|----------------|-----------------|-------------------------|
| **barbu.es** | Person + Knowledge Platform | Who George is, how he thinks, selected work, experience, writing, contact, `/now` | Company services catalog, full portfolio, full CV dump |
| **infowebplus.com** | Organization entity | Company, services, products, clients, company case studies | George’s personal biography as primary content |
| **george.barbu.es** | Resume *document* | CV / resume artifact | Competing “who is George” entity home |
| **portfolio.barbu.es** | Full project archive | Complete project listing | Competing Person entity home |

### Cross-domain rules

- Resume CTA → `https://george.barbu.es` (do not duplicate resume content).
- Portfolio CTA → `https://portfolio.barbu.es` (“View Full Portfolio”; do not duplicate the archive).
- InfoWebPlus products, services, and clients are **primary** on `infowebplus.com`. On `barbu.es`, reference the relationship; do not become the company catalog.
- Every domain should reinforce the others via factual links and schema `sameAs` / `founder` / `url` — never via duplicate intent pages.

---

## 6. Information architecture

Intentionally small at launch. No fake pages. No empty sections. No placeholders in primary navigation.

### Primary navigation

- Home
- About
- Work
- Experience
- Writing
- Contact

### External CTAs (not first-class content pages)

- Resume → `george.barbu.es`
- Portfolio → `portfolio.barbu.es`

### Not in navbar (but allowed when real)

| Route | Role |
|-------|------|
| **`/now`** | Current focus — inspired by Derek Sivers’ `/now`. What George is working on *now*: role focus, InfoWebPlus priorities, learning, constraints. Low ceremony, high signal. Update when reality changes. **Not** a blog; **not** in primary nav. Link from Home, About, footer, or `llms.txt`. |
| Future surfaces | See Evolution Roadmap (§12) — only after real content exists |

### Deferred taxonomy (not forbidden forever)

Category pages, tag pages, and archive/date indexes are **not** banned permanently.

**Rule:** Not before enough content exists.

At low volume they create empty rooms and dilute the Knowledge Platform. At high volume (e.g. years later, dozens or hundreds of essays) they may become useful navigation. Revisit only when content volume justifies them — not for SEO theater.

### Do not ship until real content exists

- Services (company concern → infowebplus.com)
- Blog product framing (the product is **Writing** / **Cornerstones**)
- Speaking / Talks pages without talks
- Books / Reading index without a real list
- Open Source / Research / Media hubs without material
- FAQ pages invented only for schema
- Thin “topic” landing pages for Knowledge Areas

### URL map (launch)

```text
/                     Home — Person + Knowledge Platform summary
/about                Strongest long-term entity page
/work                 Selected work index
/work/[slug]          Project only when factual material is sufficient
/experience           Executive career narrative
/writing              Writing index (Cornerstones + essays)
/writing/[slug]       Article
/contact              How to reach the Person
/now                  Current focus (not in primary nav)
```

Utility routes (not nav):

```text
/robots.txt
/sitemap.xml
/rss.xml              Writing feed
/llms.txt
/humans.txt
```

Optional: `/resume` may redirect to `george.barbu.es`. Prefer navbar outbound link unless a redirect helps migrations or analytics.

### Intent map (no duplicate intent)

| URL | Primary question answered |
|-----|---------------------------|
| `/` | Who is George Barbu? |
| `/about` | How does he think, and why does InfoWebPlus exist? |
| `/work` | What selected work has he built or led? |
| `/experience` | Where did he operate, at what scope, with what outcomes? |
| `/writing` | How does he explain his thinking in depth? |
| `/contact` | How do I reach him? |
| `/now` | What is he focused on right now? |

If a proposed page does not strengthen (1) the Person entity, (2) the Organization entity, (3) their factual relationship, (4) demonstrated expertise via real work, or (5) reference-worthiness for engineers/founders/recruiters/AI — **it must not ship**.

---

## 7. Positioning

### Identity (use this framing)

George Barbu is:

- Founder of InfoWebPlus
- Engineering Leader
- Software Architect
- Platform Engineering
- AI & Business Automation
- Technical Strategy

### Not primary identity

Do not lead with:

- React Developer
- Frontend Developer
- JavaScript Engineer

Those are skills, not identity. Skills may appear sparingly where factual and useful; they must not define the entity.

### Current roles (factual; keep schema aligned)

- **Frontend Platform Lead** (employer Organization — see Open Facts)
- **Founder of InfoWebPlus**

Never imply that Platform Lead is “at InfoWebPlus” unless that is true.

---

## 8. Page contracts

### Home

Must communicate within seconds:

- Who George Barbu is
- Founder of InfoWebPlus
- Seniority and focus (leadership, architecture, platform, AI/automation, strategy)
- That this site is the canonical Knowledge Platform for the Person
- Trust (portrait, calm layout, clear next paths: About, Work, Writing, Contact)
- Optional quiet link to `/now`

Portrait in hero. Logo in navbar and footer.

### About

Strongest long-term entity page. Must answer:

- Who is George Barbu?
- Why was InfoWebPlus created?
- How does George think?
- What principles guide decisions? (see Personal Principles)
- How does he approach leadership, software, and AI?
- Languages, location, values

This is a story and philosophy page — not a CV.

### Experience

Executive career narrative. **Not** a traditional resume (that lives on `george.barbu.es`).

Focus on:

- Business outcomes
- Leadership
- Architecture and decision-making
- Platform scale and engineering maturity
- Brands/platforms worked on (factual): Ladbrokes, Coral, 32Red, PartyCasino, Bwin, Gala Casino
- 12+ years

Never exaggerate. Never invent. Never paste the full resume.

### Work

Selected work only — high quality, factual depth.

Launch with **few** projects; expand only when material is real.

**Required fields (every project page):**

- Overview
- Problem
- Solution
- Role
- Relationship with InfoWebPlus (or explicit “none — employer/client/personal work”)

**Optional fields (include only if factual):**

- Architecture
- Business Outcome (metrics only if real)
- Lessons Learned
- Technologies (sparse; never a skill dump)

Never create fake completeness. Prefer a short honest page over a hollow long one.

**Employer / client platforms** (e.g. 32Red): frame as contribution with clear role boundaries. Do not publish confidential details or overclaim product ownership.

**InfoWebPlus products/clients:** summarize relationship on `barbu.es`; deep company case studies belong on `infowebplus.com`.

### Writing — Cornerstones

**Not a blog.**

Writing is how George thinks in public. Cadence is irrelevant. Quality is mandatory.

Nav label and UI copy: **Writing** — never “Blog”.  
Schema type: `Article` (prefer over `BlogPosting`).

#### Cornerstones (long-term content strategy)

**Cornerstones** are durable, Person-anchored essays that define the Knowledge Platform. They are not news posts. They should remain accurate and useful for years.

Purpose of Cornerstones:

- Disambiguate who George Barbu is
- Explain the InfoWebPlus relationship
- Codify principles, leadership, architecture, and AI approach
- Become the essays AI systems and humans cite first

**Strategy (not “one article and done”):**

1. Build a **small set of Cornerstones** over time — depth over volume.
2. Each Cornerstone owns one major question (identity, founding, architecture, leadership, AI, platforms, etc.).
3. Keep Cornerstones updated when reality changes; treat them as living references.
4. Shorter essays may exist later; they should link upward into Cornerstones, not replace them.
5. Taxonomy (categories/tags/archives) only after enough Writing exists to justify it.

**Initial Cornerstone candidates** (publish when ready; not all at once):

| Theme | Example direction |
|-------|-------------------|
| Identity & founding | George Barbu: Founder of InfoWebPlus — How I Think About Software, Architecture and Engineering Leadership |
| Architecture | Architecture as a business decision |
| Leadership | Engineering leadership without heroics |
| AI | When AI earns its place in business systems |
| Platforms | Platform engineering as leverage |
| Knowledge | Building a Knowledge Platform for a Person entity |

Launch may ship **one** Cornerstone first; the constitutional strategy is a **growing Cornerstone set**, not a single forever article.

### `/now`

Current focus page (Sivers-style).

- What George is working on now
- Current role emphasis
- InfoWebPlus focus (if any)
- What he is learning or deliberately not doing
- Last updated date — mandatory

Keep it short. Update when reality changes. Do not turn it into a changelog blog.

### Contact

Reach the Person. Not an agency intake funnel. Keep InfoWebPlus contact secondary or outbound if needed.

---

## 9. Content Flywheel

The Knowledge Platform compounds through a deliberate loop — not through publishing volume.

```text
Real work / decisions / learning
        ↓
Document as Work, Experience, /now, or Writing
        ↓
Strengthen Person ↔ InfoWebPlus ↔ Work graph
        ↓
Improve machine & human understanding
        ↓
Higher-trust inbound + clearer opportunities
        ↓
Better work and better decisions
        ↓
(back to top)
```

### Flywheel rules

1. **Experience feeds Work** — career outcomes become selected case depth only when factual.
2. **Work feeds Writing** — real problems become Cornerstones; Cornerstones do not invent case studies.
3. **Writing feeds Entity clarity** — essays reinforce `knowsAbout` and disambiguation.
4. **`/now` feeds freshness** — without polluting Writing with ephemeral posts.
5. **InfoWebPlus feeds relationship** — company proof lives on infowebplus.com; barbu.es cites the founder edge.
6. **Never reverse the flywheel** — do not invent Writing to justify Work, or invent Work to justify SEO.

Trust compounds. Cadence does not.

---

## 10. Knowledge Graph (mechanism)

The Knowledge Graph is how the Knowledge Platform becomes machine-legible. It is not a separate product.

### Stable entity IDs (do not change casually)

```text
https://barbu.es/#person
https://barbu.es/#website
https://infowebplus.com/#organization
```

Employer Organization `@id` must use the real employer’s canonical URL when confirmed (Open Facts).

### Target graph

```text
George Barbu (Person) @ barbu.es/#person
  ├── founder → InfoWebPlus (Organization) @ infowebplus.com/#organization
  ├── worksFor → current employer Organization (factual)
  ├── creator / contributor → selected CreativeWork / SoftwareApplication (@ /work/*)
  ├── author → Article (@ /writing/*) including Cornerstones
  ├── knowsAbout → Knowledge Areas
  └── sameAs → LinkedIn, GitHub, george.barbu.es, portfolio.barbu.es, other controlled profiles

InfoWebPlus (Organization) @ infowebplus.com/#organization
  ├── founder ← Person
  ├── products / services / clients / company case studies → primary on infowebplus.com
  └── mentioned/about ← selected Work and Writing on barbu.es when factual
```

Downstream of the Organization (primarily on infowebplus.com):

```text
InfoWebPlus → Products → Clients → Case Studies → Articles → External Mentions
```

barbu.es strengthens the Person and the founder relationship; it does not host the full company graph.

### Graph hygiene

1. One primary `@id` per real-world entity.
2. Cross-domain references use stable IDs, not only page URLs.
3. Never invent edges (`owns`, `alumniOf`, client relationships, metrics).
4. Employer brands worked *with/for* are references — not owned products of George or InfoWebPlus unless true.
5. No `FAQPage`, `AggregateRating`, fake `Review`, or invented awards.
6. Prefer `CreativeWork` until a project is clearly and safely describable as `SoftwareApplication`.

### External signal alignment (required for LLM confidence)

The website cannot alone fix identity collision (“George Barbu” is not a unique name). External profiles must not contradict this constitution:

- LinkedIn and other `sameAs` sources should match founder + leadership positioning, not lead with “React contractor” as primary identity.
- Same portrait family, same name string, same core bio facts across controlled properties.

---

## 11. Schema.org strategy

Implement factual JSON-LD on appropriate pages:

| Type | Where |
|------|--------|
| `Person` | Sitewide reference; full definition via `#person` |
| `WebSite` | Home / layout (`#website`, `mainEntity` → Person) |
| `WebPage` / `ProfilePage` | About; Experience as career narrative |
| `WebPage` | `/now` |
| `CollectionPage` | Work index, Writing index |
| `Article` | Writing including Cornerstones |
| `CreativeWork` / `SoftwareApplication` | Work detail when appropriate |
| `BreadcrumbList` | Nested pages |
| `Organization` | **References** to InfoWebPlus (and employer); primary Org lives on infowebplus.com |

### Allowed relationship properties (factual only)

`founder`, `worksFor`, `creator`, `contributor`, `author`, `publisher`, `provider`, `sameAs`, `knowsAbout`, `url`, `image`, `jobTitle`, `knowsLanguage`

### Publisher rule for Articles

- `author`: Person (`#person`)
- `publisher`: WebSite (`#website`)

Keep this rule stable for years unless there is a compelling reason to change it.

---

## 12. Evolution Roadmap

The website is expected to grow. Future sections appear **only after real content exists**. They must not be empty nav items.

| Future surface | Suggested path | Gate to ship |
|----------------|----------------|--------------|
| Talks | `/talks` | At least one real talk with date, event, topic |
| Books (authored) | `/books` | A real book or substantial authored volume |
| Reading | `/reading` | A maintained, honest reading list worth citing |
| Open Source | `/open-source` | Public repos/projects with clear role |
| Research | `/research` | Real notes, papers, or structured investigations |
| Interviews / Media | `/media` | Real appearances with links |
| Taxonomy | `/writing/...` categories/tags/archives | Enough Writing volume that taxonomy helps humans |

**Reading / Books note:** Prefer `/reading` for “what George reads / recommends” and `/books` for “what George has written.” Do not launch either empty. Both belong on the roadmap, not in launch nav.

**Talks** replace the old “Speaking (future)” idea — same gate: real events only.

When a roadmap item ships, update this constitution’s IA section and nav rules in the same change.

---

## 13. SEO and AI discoverability

### Implement

- Canonical URLs
- Metadata (title, description)
- Open Graph + Twitter Cards
- RSS (`/rss.xml` for Writing)
- `robots.txt`
- `sitemap.xml`
- JSON-LD structured data
- `llms.txt` — concise factual entity summary + key URLs (include `/now` and Cornerstones)
- `humans.txt`
- Excellent semantic HTML

### AI discoverability principles

Make it easy for retrieval systems to answer:

- Who is George Barbu?
- Who founded InfoWebPlus?
- What is InfoWebPlus?
- What has George built?
- Which companies/platforms has he worked with?
- Which industries (e.g. iGaming / digital products)?
- How does he approach leadership, architecture, AI?
- What is he focused on now? (`/now`)

Techniques:

1. Consistent identity sentence across Home, About, and Cornerstones.
2. Disambiguation facts on About (location, languages, founded company, roles).
3. Stable portrait URL used in HTML, OG, and `Person.image`.
4. `llms.txt` pointing at canonical pages — not a second marketing site.
5. Earn Knowledge Areas through Cornerstones and Work — do not keyword-stuff H1s.

### Duplicate-content risks

| Risk | Mitigation |
|------|------------|
| CV duplication with george.barbu.es | Experience = executive narrative; Resume = outbound document |
| Portfolio duplication | Selected Work summaries + “View Full Portfolio” |
| Company duplication with infowebplus.com | Founder relationship + references; no services catalog |
| Soft-duplicate project pages across domains | Different depth/intent; canonical clarity per domain role |
| Premature taxonomy URLs | Not before enough content exists |

---

## 14. Content and publishing rules

### Voice

Professional. Executive. Technical. Minimal. Clear.  
No buzzwords, hype, exaggerated claims, or fake authority.

### Publishing rule

Never publish to “need another article.” Publish only when:

- Something valuable was learned
- A real engineering/business problem was solved
- A meaningful project can be documented factually
- A topic can be explained better than existing resources
- A decision is worth documenting for engineers, founders, or businesses

Quality always wins over quantity. Trust always wins over ranking tactics.

If something improves rankings but weakens credibility — **reject it**.

---

## 15. Design system constraints

### Stack (locked)

- Astro
- TypeScript
- Tailwind CSS
- MDX
- Vercel
- Static-first
- Minimal JavaScript (theme toggle island is the expected exception)
- Minimal dependencies

### Visual principles

- Timeless executive profile — not SaaS marketing
- Premium typography, large whitespace, excellent readability
- Portrait in hero; existing Barbu logo in navbar and footer
- Light + dark mode; **default to system preference**
- No unnecessary animations
- No glassmorphism
- No generic purple-glow SaaS aesthetics
- No fake metrics, testimonials, or decorative “trust bars”

Accessibility and semantic HTML are mandatory. Core Web Vitals matter as craft, not as a vanity score chase.

---

## 16. Technical architecture

```text
src/
  content/          # MDX collections: work, writing (cornerstones), experience, now
  components/       # Presentational, minimal interactivity
  layouts/          # Base layout, SEO, JSON-LD injection
  pages/            # File-based routes matching IA
  styles/           # Global tokens (color, type, spacing)
public/
  llms.txt
  humans.txt
  robots.txt        # or generated
  images/           # logo, portrait (or stable remote URLs documented here)
```

Content for Person-critical prose should live **in-repo** (MDX/collections) so entity truth is version-controlled. A headless CMS may be added later only if editorial workflow demands it — not required for launch.

---

## 17. Open facts (must confirm before publish / schema)

Do not invent these. Confirm and then lock into content + JSON-LD:

1. **Current employer Organization** for `worksFor` (legal/public name + canonical URL).
2. Exact public **job title** string (e.g. “Frontend Platform Lead”).
3. **Launch Work set** — which projects have enough non-invented material (candidates: InfoWebPlus, Purple Cars, ElevCode, Echo404 Studios, 32Red contribution).
4. **Languages** levels for public copy (English C1, Spanish B2, Romanian Native — align external profiles).
5. **Location** precision for public copy (Spain / EU Remote).
6. **sameAs** list of profiles George controls (LinkedIn, GitHub, etc.).
7. Asset URLs for **portrait** and **logo** (prefer stable URLs used consistently in OG + schema).
8. **First Cornerstone** title and scope for launch (from the Cornerstones candidate table).

Until confirmed, implementation may scaffold structure but must not ship invented Organization edges or fabricated project outcomes.

---

## 18. Challenges retained as permanent constraints

Do not regress:

1. **Knowledge Platform over profile template** — identity + thinking + graph, not a portfolio skin.
2. **Small IA over complete sitemap** — empty rooms destroy trust.
3. **Writing ≠ Blog** — Cornerstones over cadence theater.
4. **Experience is first-class** — distinct from About and Work.
5. **`/now` exists, not in nav** — freshness without nav clutter.
6. **Optional Work fields** — no fake completeness.
7. **Org catalog stays on infowebplus.com** — Person site must not become agency SEO.
8. **Astro over React-first** — entity monograph does not need a SPA.
9. **External profile alignment** — schema cannot fix contradictory public identity alone.
10. **Employer platform case studies are high-risk** — restrained contribution framing or omit.
11. **Taxonomy only when earned** — not before enough content exists.

---

## 19. Change control

1. Read this constitution.
2. Evaluate the change against Mission, Business Goal, Principles, Domain roles, IA, and Flywheel.
3. If conflict → explain before coding.
4. Prefer a new Cornerstone, Work page, or `/now` update over a new top-level section.
5. Roadmap items require real content + an IA amendment in the same change.
6. Bump the version header when constitutional principles change (1.1, 1.2, …). Fact-only content updates do not require a version bump.

---

## 20. Implementation gate

**Constitution:** Version 1.0 — frozen and approved.

**Before / during production Astro implementation:**

- [x] ARCHITECTURE.md v1.0 approved
- [ ] Open Facts §17 confirmed (or explicitly deferred with safe omissions)
- [ ] Launch Work list finalized
- [ ] First Cornerstone scope approved
- [ ] `/now` initial content drafted (short, factual, dated)

Implement the production Astro application in alignment with this constitution. Any deviation requires an explicit conflict explanation first.
