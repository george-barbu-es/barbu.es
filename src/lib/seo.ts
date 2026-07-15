import { site } from '../config/site';

export type SeoProps = {
  title?: string;
  description?: string;
  /** Path beginning with `/`, or absolute URL. */
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
};

/**
 * Internal HTML route with trailing slash (`trailingSlash: 'always'`).
 * Leaves absolute URLs, mailto, and file paths (e.g. `.xml`) unchanged.
 */
export function withTrailingSlash(path: string): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('#')
  ) {
    return path;
  }
  if (path === '/') return '/';
  const leaf = path.split('/').pop() ?? '';
  if (leaf.includes('.')) return path;
  return path.endsWith('/') ? path : `${path}/`;
}

/**
 * Canonical URLs always use a trailing slash for HTML routes
 * (matches Astro static output + sitemap). Root is `https://barbu.es/`.
 */
export function resolveUrl(path = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    const url = new URL(path);
    if (!url.pathname.split('/').pop()?.includes('.')) {
      if (!url.pathname.endsWith('/')) url.pathname = `${url.pathname}/`;
    }
    return url.toString();
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') {
    return `${site.url}/`;
  }

  const withSlash = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return new URL(withSlash, `${site.url}/`).toString();
}

export function buildSeo(props: SeoProps = {}) {
  const title = props.title
    ? props.title === site.name
      ? site.name
      : `${props.title} · ${site.name}`
    : site.name;

  const description = props.description ?? site.description;
  const canonical = resolveUrl(props.path ?? '/');
  const image = props.image ?? undefined;
  const ogType = props.type ?? 'website';

  return {
    title,
    description,
    canonical,
    image,
    ogType,
    noindex: props.noindex ?? false,
    twitterCard: image ? 'summary_large_image' : 'summary',
  };
}
