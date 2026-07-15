import { entityIds, external } from './site';
import { person } from './person';

/**
 * Organization references.
 * Primary Organization entity for InfoWebPlus lives on infowebplus.com.
 */

export const infoWebPlus = {
  '@id': entityIds.organizationInfoWebPlus,
  '@type': 'Organization' as const,
  name: 'InfoWebPlus',
  url: external.company,
  foundingDate: '2016',
  description:
    'Product engineering studio focused on web applications, integrations, pragmatic AI, and business systems.',
  founder: {
    '@id': person['@id'],
  },
} as const;
