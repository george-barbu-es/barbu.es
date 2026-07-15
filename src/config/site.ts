/**
 * Site-level constants for barbu.es.
 * Stable IDs must not change casually — see ARCHITECTURE.md §10.
 */

export const site = {
  name: 'George Barbu',
  title: 'George Barbu',
  description:
    'George Barbu is the founder of InfoWebPlus and a Frontend Platform Lead. Engineering leadership, software architecture, platform engineering, AI and business automation, and a Knowledge Platform for who he is. Spain, EU Remote.',
  url: 'https://barbu.es',
  locale: 'en',
  language: 'en',
  gtmId: 'GTM-WVFQ3DT6',
} as const;

/** Stable JSON-LD @id values (do not change casually). */
export const entityIds = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
  organizationInfoWebPlus: 'https://infowebplus.com/#organization',
} as const;

export const external = {
  resume: 'https://george.barbu.es',
  portfolio: 'https://portfolio.barbu.es',
  company: 'https://infowebplus.com',
  calendar: 'https://calendar.barbu.es/',
  calendarBook30: 'https://calendar.barbu.es/george/book-30',
  calendarBook60: 'https://calendar.barbu.es/george/book-60',
} as const;

/**
 * Primary nav (ARCHITECTURE §6). Home is the brand mark, not a nav item.
 * Resume / Portfolio live in footer + home CTAs — not chrome.
 * Paths use trailing slash (`trailingSlash: 'always'`).
 */
export const navigation = [
  { href: '/about/', label: 'About' },
  { href: '/work/', label: 'Work' },
  { href: '/experience/', label: 'Experience' },
  { href: '/writing/', label: 'Writing' },
  { href: '/contact/', label: 'Contact' },
] as const;

/** Outbound CTAs — not primary content pages. */
export const externalCtas = [
  { href: external.resume, label: 'Resume' },
  { href: external.portfolio, label: 'Portfolio' },
] as const;

/** Public social profiles (also in Person `sameAs`). */
export const socialProfiles = [
  { href: 'https://www.linkedin.com/in/barbugeorge/', label: 'LinkedIn' },
  { href: 'https://github.com/george-barbu-es', label: 'GitHub' },
] as const;

/** Quiet link targets (not primary nav). */
export const utilityLinks = [{ href: '/now/', label: 'Now' }] as const;
