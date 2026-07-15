import type { APIRoute } from 'astro';
import { site } from '../config/site';

const body = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
