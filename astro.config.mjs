import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kamzerr.github.io',
  base: '/sites-artisans',
  integrations: [tailwind()]
});
