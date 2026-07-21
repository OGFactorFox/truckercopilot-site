import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://truckercopilot.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
