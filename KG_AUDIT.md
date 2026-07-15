# Knowledge Graph audit — Milestone 5

**Date:** 2026-07-15  
**Constitution:** ARCHITECTURE.md v1.0  
**Scope:** Machine legibility of barbu.es as Person Knowledge Platform

---

## Stable entity IDs (unchanged)

| Entity | `@id` |
|--------|-------|
| Person | `https://barbu.es/#person` |
| WebSite | `https://barbu.es/#website` |
| InfoWebPlus | `https://infowebplus.com/#organization` |

---

## Checklist

| Item | Status | Notes |
|------|--------|-------|
| Entity consistency (name, roles, founder) | Pass | Home / About / Cornerstone / llms.txt aligned |
| JSON-LD on major pages | Pass | Entity graph sitewide + page types |
| No invented `worksFor` | Pass (deferred) | Liquidity Media in Experience prose only; schema edge unset until org URL Open Fact |
| No ownership overclaim on employer brands | Pass | 32Red Work uses `contributor`, not `creator` |
| Internal links reinforce graph | Pass | Cross-links About ↔ Cornerstone ↔ Work ↔ Experience ↔ Now; outbound domain roles |
| Canonical URLs | Pass (fixed) | Trailing slash always; matches sitemap |
| Open Graph / Twitter | Pass | Person image fallback; About/Experience as `profile` where set |
| `llms.txt` / `humans.txt` / RSS / sitemap | Pass | Cornerstone in RSS; all launch URLs in sitemap |
| AI answerability smoke test | Pass | See below |
| Hollow / contradictory copy removed | Pass (fixed) | Removed schema-meta digression from Experience |

---

## Fixes applied in M5

1. **Canonical / sitemap alignment** — `resolveUrl()` always emits trailing slash; `trailingSlash: 'always'`.
2. **Credit honesty** — Work schema `credit: creator | contributor`; 32Red = contributor.
3. **Org edge on InfoWebPlus Work** — `aboutInfoWebPlus` + `relatedUrl` → Company.
4. **Echo404** — `SoftwareApplication` URL → `https://music.barbu.es`.
5. **Collection ItemList** — Work and Writing indexes expose enumerated entries in JSON-LD.
6. **Home `mainEntity`** — WebPage → Person.
7. **Experience honesty** — Names Liquidity Media in prose; removes “worksFor Open Fact” meta language that diluted the entity page.
8. **About Continue** — Explicit graph paths to Cornerstone / Experience / Work / Now.

---

## AI answerability smoke test (expected answers)

| Question | Primary source |
|----------|----------------|
| Who is George Barbu? | `/` + `/about` + Cornerstone |
| Who founded InfoWebPlus? | About, Work/infowebplus, Organization JSON-LD `founder`, Person `@reverse.founder` |
| What is InfoWebPlus? | Work/infowebplus + infowebplus.com (org) |
| What has he built / led? | `/work` ItemList + Experience |
| How does he think? | `/writing/founder-how-i-think` |
| Companies / brands? | `/experience` |
| What now? | `/now` |

---

## Deferred (explicit, not defects)

- JSON-LD `worksFor` → Liquidity Media (need stable Organization URL)
- Purple Cars / ElevCode / Safe Box Work pages
- Wikidata / external KG nodes
- SameAs expansion beyond controlled profiles

---

## Residual risks

- LinkedIn headline/positioning may still conflict with founder/leadership framing off-site (external signal alignment).
- Cloudinary logo URL remains provisional; portrait URL is in active use.
- Name collision (“George Barbu”) requires continued sameAs + consistent photo/bio discipline.
