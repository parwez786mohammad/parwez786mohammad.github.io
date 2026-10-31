import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://themohammadparwez.com',
  integrations: [
    tailwind(),
    // /journey/ only forwards to /about/#journey, so it stays out of the sitemap.
    sitemap({ filter: (page) => !page.endsWith('/journey/') }),
    mdx(),
  ],
});
