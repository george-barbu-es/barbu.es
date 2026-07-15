import { entityIds, external, site } from './site';

/**
 * Canonical Person facts for barbu.es.
 * Open Facts (ARCHITECTURE.md §17): worksFor employer URL still deferred.
 * Employment history is described in Experience prose; JSON-LD worksFor waits for a stable Organization URL.
 */

export const person = {
  '@id': entityIds.person,
  name: 'George Barbu',
  givenName: 'George',
  familyName: 'Barbu',
  url: site.url,
  jobTitle: 'Frontend Platform Lead',
  description: site.description,
  email: 'george@barbu.es',
  homeLocation: {
    name: 'Spain',
    description: 'EU Remote',
  },
  knowsLanguage: [
    { name: 'English', alternateName: 'en', proficiency: 'C1' },
    { name: 'Spanish', alternateName: 'es', proficiency: 'B2' },
    { name: 'Romanian', alternateName: 'ro', proficiency: 'Native' },
  ],
  knowsAbout: [
    'Engineering Leadership',
    'Software Architecture',
    'Platform Engineering',
    'AI and Business Automation',
    'Technical Strategy',
    'Product and Delivery',
    'Knowledge Platforms',
    'Business Systems',
  ],
  sameAs: [
    'https://www.linkedin.com/in/barbugeorge/',
    'https://github.com/george-barbu-es',
    external.resume,
    external.portfolio,
  ],
  image:
    'https://res.cloudinary.com/barbu-es/image/upload/v1732977429/george.barbu.es/profile-picture.jpg',
  logo: 'https://res.cloudinary.com/barbu-es/image/upload/george.barbu.cc/logo.png',
} as const;

/**
 * Employer Organization for worksFor — deferred until Organization URL is locked.
 * CV materials state Liquidity Media (2025–present); do not invent a canonical @id/URL here.
 */
export const employer: {
  name: string;
  url: string;
  '@id'?: string;
} | null = null;
