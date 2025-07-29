// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  site: 'https://portafolio-alexis-artigas.vercel.app/',
  
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.PORTFOLIO_NAME': JSON.stringify(process.env.PORTFOLIO_NAME),
      'process.env.PORTFOLIO_SURNAME': JSON.stringify(process.env.PORTFOLIO_SURNAME),
      'process.env.PORTFOLIO_PHONE': JSON.stringify(process.env.PORTFOLIO_PHONE),
      'process.env.PORTFOLIO_EMAIL': JSON.stringify(process.env.PORTFOLIO_EMAIL),
      'process.env.PORTFOLIO_ADDRESS': JSON.stringify(process.env.PORTFOLIO_ADDRESS),
      'process.env.PORTFOLIO_SHORT_TITLE': JSON.stringify(process.env.PORTFOLIO_SHORT_TITLE),
      'process.env.PORTFOLIO_TITLE': JSON.stringify(process.env.PORTFOLIO_TITLE),
      'process.env.PORTFOLIO_DESCRIPTION': JSON.stringify(process.env.PORTFOLIO_DESCRIPTION),
    },
  },
});