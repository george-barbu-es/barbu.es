import { site } from '../config/site';

/** LinkedIn / Open Graph preferred share image size. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export type OgImageInput = {
  /** Path beginning with `/`, or absolute URL. */
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type ResolvedOgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

/** Site-wide social share fallback (1200×630, served from /public/og). */
export const DEFAULT_OG_IMAGE: Required<OgImageInput> = {
  src: '/og/default.png',
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: `${site.name} - Knowledge Platform`,
};

/** Writing share fallback when an article has no dedicated OG image. */
export const WRITING_OG_IMAGE: Required<OgImageInput> = {
  src: '/og/writing.png',
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: `Writing on ${site.name}`,
};

export type SeoProps = {
  title?: string;
  description?: string;
  /** Path beginning with `/`, or absolute URL. */
  path?: string;
  /** Absolute URL, site path, or structured OG image. */
  image?: string | OgImageInput;
  /** Alt text when `image` is a bare URL/path. */
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  /**
   * Article Open Graph fields (LinkedIn Post Inspector reads these).
   * Only emitted when `type` is `article`.
   */
  publishedTime?: string | Date;
  modifiedTime?: string | Date;
  /** Display name for `article:author` / `<meta name="author">`. */
  authorName?: string;
  /** Optional profile URL also emitted as `article:author`. */
  authorUrl?: string;
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
 * Asset paths that include a file extension keep their filename as-is.
 */
export function resolveUrl(path = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    const url = new URL(path);
    const leaf = url.pathname.split('/').pop() ?? '';
    if (!leaf.includes('.') && !url.pathname.endsWith('/')) {
      url.pathname = `${url.pathname}/`;
    }
    return url.toString();
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') {
    return `${site.url}/`;
  }

  const leaf = normalized.split('/').pop() ?? '';
  if (leaf.includes('.')) {
    return new URL(normalized, `${site.url}/`).toString();
  }

  const withSlash = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return new URL(withSlash, `${site.url}/`).toString();
}

/** Convention path for a writing article OG image in `/public/og/writing/`. */
export function writingOgImagePath(slug: string): string {
  return `/og/writing/${slug}.png`;
}

export function resolveOgImage(
  image?: string | OgImageInput,
  fallback: Required<OgImageInput> = DEFAULT_OG_IMAGE,
  imageAlt?: string,
): ResolvedOgImage {
  if (!image) {
    return {
      url: resolveUrl(fallback.src),
      width: fallback.width,
      height: fallback.height,
      alt: imageAlt ?? fallback.alt,
    };
  }

  if (typeof image === 'string') {
    return {
      url: resolveUrl(image),
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: imageAlt ?? fallback.alt,
    };
  }

  return {
    url: resolveUrl(image.src),
    width: image.width ?? OG_IMAGE_WIDTH,
    height: image.height ?? OG_IMAGE_HEIGHT,
    alt: image.alt ?? imageAlt ?? fallback.alt,
  };
}

function toIsoDatetime(value?: string | Date): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export function buildSeo(props: SeoProps = {}) {
  const pageTitle = props.title ?? site.name;
  const documentTitle =
    pageTitle === site.name ? site.name : `${pageTitle} · ${site.name}`;
  /** Social title omits the site suffix — `og:site_name` already carries it. */
  const socialTitle = pageTitle;

  const description = props.description ?? site.description;
  const canonical = resolveUrl(props.path ?? '/');
  const ogImage = resolveOgImage(props.image, DEFAULT_OG_IMAGE, props.imageAlt);
  const ogType = props.type ?? 'website';
  const publishedTime = toIsoDatetime(props.publishedTime);
  const modifiedTime = toIsoDatetime(props.modifiedTime) ?? publishedTime;

  return {
    title: documentTitle,
    socialTitle,
    description,
    canonical,
    ogImage,
    ogType,
    noindex: props.noindex ?? false,
    twitterCard: 'summary_large_image' as const,
    publishedTime: ogType === 'article' ? publishedTime : undefined,
    modifiedTime: ogType === 'article' ? modifiedTime : undefined,
    authorName: ogType === 'article' ? props.authorName : undefined,
    authorUrl: ogType === 'article' ? props.authorUrl : undefined,
  };
}
