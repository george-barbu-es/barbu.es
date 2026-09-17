import { employer, person } from '../../config/person';
import { infoWebPlus } from '../../config/organizations';
import { entityIds, site } from '../../config/site';

export type JsonLd = Record<string, unknown>;

export function buildPersonJsonLd(): JsonLd {
  const node: JsonLd = {
    '@type': 'Person',
    '@id': entityIds.person,
    name: person.name,
    givenName: person.givenName,
    familyName: person.familyName,
    url: `${site.url}/`,
    email: person.email,
    image: person.image,
    jobTitle: person.jobTitle,
    description: person.description,
    sameAs: [...person.sameAs],
    knowsAbout: [...person.knowsAbout],
    knowsLanguage: person.knowsLanguage.map((lang) => ({
      '@type': 'Language',
      name: lang.name,
      alternateName: lang.alternateName,
    })),
    homeLocation: {
      '@type': 'Place',
      name: person.homeLocation.name,
      description: person.homeLocation.description,
    },
    /**
     * Schema.org encodes founder on Organization → Person.
     * @reverse keeps the Person → InfoWebPlus founding edge machine-readable.
     */
    '@reverse': {
      founder: { '@id': entityIds.organizationInfoWebPlus },
    },
  };

  if (employer) {
    node.worksFor = {
      '@type': 'Organization',
      name: employer.name,
      url: employer.url,
      ...(employer['@id'] ? { '@id': employer['@id'] } : {}),
    };
  }

  return node;
}

export function buildWebsiteJsonLd(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': entityIds.website,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { '@id': entityIds.person },
    author: { '@id': entityIds.person },
    mainEntity: { '@id': entityIds.person },
  };
}

export function buildInfoWebPlusOrgRef(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': infoWebPlus['@id'],
    name: infoWebPlus.name,
    url: infoWebPlus.url,
    description: infoWebPlus.description,
    founder: { '@id': entityIds.person },
    foundingDate: infoWebPlus.foundingDate,
  };
}

export function buildWebPageJsonLd(options: {
  url: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'ProfilePage' | 'CollectionPage' | 'ContactPage' | 'AboutPage';
  /** When true, WebPage.mainEntity → Person (Home). */
  mainEntityPerson?: boolean;
}): JsonLd {
  const node: JsonLd = {
    '@type': options.type ?? 'WebPage',
    '@id': `${options.url.replace(/\/$/, '')}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': entityIds.website },
    about: { '@id': entityIds.person },
    author: { '@id': entityIds.person },
  };

  if (options.mainEntityPerson) {
    node.mainEntity = { '@id': entityIds.person };
  }

  return node;
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleJsonLd(options: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  /** Absolute OG / social image URL when available. */
  image?: string;
}): JsonLd {
  const pageId = `${options.url.replace(/\/$/, '')}#webpage`;
  const node: JsonLd = {
    '@type': 'Article',
    '@id': `${options.url.replace(/\/$/, '')}#article`,
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: { '@id': entityIds.person },
    publisher: { '@id': entityIds.website },
    mainEntityOfPage: { '@id': pageId },
    about: [
      { '@id': entityIds.person },
      { '@id': entityIds.organizationInfoWebPlus },
    ],
  };

  if (options.image) {
    node.image = options.image;
  }

  return node;
}

export function buildCreativeWorkJsonLd(options: {
  url: string;
  name: string;
  description: string;
  schemaType: 'CreativeWork' | 'SoftwareApplication';
  /**
   * creator = owned/authored work; contributor = employment contribution
   * (avoids over-claiming product ownership).
   */
  credit?: 'creator' | 'contributor';
  /** Link Work node to InfoWebPlus Organization when factual. */
  aboutInfoWebPlus?: boolean;
  /** External product/archive URL when different from barbu.es page. */
  relatedUrl?: string;
}): JsonLd {
  const credit = options.credit ?? 'creator';
  const node: JsonLd = {
    '@type': options.schemaType,
    '@id': `${options.url.replace(/\/$/, '')}#work`,
    name: options.name,
    description: options.description,
    url: options.relatedUrl ?? options.url,
  };

  if (credit === 'creator') {
    node.creator = { '@id': entityIds.person };
    node.author = { '@id': entityIds.person };
  } else {
    node.contributor = { '@id': entityIds.person };
  }

  if (options.aboutInfoWebPlus) {
    node.about = { '@id': entityIds.organizationInfoWebPlus };
  }

  return node;
}

export function buildItemListJsonLd(options: {
  name: string;
  items: Array<{ name: string; url: string }>;
}): JsonLd {
  return {
    '@type': 'ItemList',
    name: options.name,
    numberOfItems: options.items.length,
    itemListElement: options.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/** Graph document used sitewide: Person + WebSite + InfoWebPlus ref. */
export function buildEntityGraph(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildPersonJsonLd(), buildWebsiteJsonLd(), buildInfoWebPlusOrgRef()],
  };
}

export function toJsonLdScript(data: JsonLd): string {
  return JSON.stringify(data);
}
