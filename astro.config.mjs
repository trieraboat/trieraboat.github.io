import { defineConfig } from 'astro/config';

// BASE_PATH задаётся при публикации на GitHub Pages (имя репозитория), локально — «/»
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
