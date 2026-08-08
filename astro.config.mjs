import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://themohammadparwez.com',
  // TEMPORARY: only needed while previewing on the github.io/<repo> subpath.
  // Remove this "base" line entirely before switching over to the custom domain,
  // since the custom domain serves the site from the root.
  base: '/mohammadparwez-website',
  integrations: [tailwind(), sitemap(), mdx()],
});
