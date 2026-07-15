import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../config/site';

export async function GET(context: APIContext) {
  const writing = (await getCollection('writing'))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${site.name} Writing`,
    description: 'Cornerstones and essays by George Barbu: durable thinking on software, architecture, leadership, and being clear to cite. Not a cadence blog.',
    site: context.site ?? site.url,
    items: writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/writing/${entry.id}/`,
    })),
  });
}
