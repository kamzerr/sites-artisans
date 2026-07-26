import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kamzerr.github.io',
  base: '/sites-artisans',
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: true
  }
});
