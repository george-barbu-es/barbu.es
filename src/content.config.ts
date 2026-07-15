import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content collections for the Knowledge Platform.
 * Field rules follow ARCHITECTURE.md §8 (Work required vs optional).
 */

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cornerstone: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    overview: z.string(),
    problem: z.string(),
    solution: z.string(),
    role: z.string(),
    infoWebPlusRelationship: z.string(),
    architecture: z.string().optional(),
    businessOutcome: z.string().optional(),
    lessonsLearned: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().optional(),
    schemaType: z.enum(['CreativeWork', 'SoftwareApplication']).default('CreativeWork'),
    /** Schema credit — contributor for employer work. */
    credit: z.enum(['creator', 'contributor']).default('creator'),
    /** When true, CreativeWork.about → InfoWebPlus Organization. */
    aboutInfoWebPlus: z.boolean().default(false),
    /** External product URL if different from this page. */
    relatedUrl: z.url().optional(),
  }),
});

const now = defineCollection({
  loader: glob({ base: './src/content/now', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().default('Now'),
    description: z.string(),
    updatedDate: z.coerce.date(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    path: z.string(),
    schemaType: z
      .enum(['WebPage', 'ProfilePage', 'ContactPage', 'AboutPage'])
      .default('WebPage'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, work, now, pages };
