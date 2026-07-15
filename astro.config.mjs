// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://barbu.es',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      // Draft infrastructure placeholders must not enter the public sitemap.
      filter: (page) => !page.includes('/placeholder-'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});