import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  site: 'https://www.elvportafolio.website',
  image: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        pathname: 'dnbdpnvz1/image/upload',
        protocol: 'https',
      },
    ],
  },

})
