// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  adapter: node({
    mode: 'standalone' // Recommended for Fly.io / Docker
  }),
  server: {
    host: true,
  }
});