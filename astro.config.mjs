import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://SlavaDemo.github.io',
  // base: '/SlavaDemo',
  integrations: [image(
    {serviceEntryPoint: '@astrojs/image/sharp'}
  )]
});