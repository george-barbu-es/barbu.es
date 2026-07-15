import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPageByPath(
  path: string,
): Promise<CollectionEntry<'pages'> | undefined> {
  const pages = await getCollection('pages');
  return pages.find((page) => page.data.path === path);
}

/** For M3 IA review: include drafts; label them. M4 publishes by clearing draft. */
export function sortWork(entries: CollectionEntry<'work'>[]) {
  return [...entries].sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

export function sortWriting(entries: CollectionEntry<'writing'>[]) {
  return [...entries].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
