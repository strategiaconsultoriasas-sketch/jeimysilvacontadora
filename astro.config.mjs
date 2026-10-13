import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.jeimysilvacontadora.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-CO' },
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
