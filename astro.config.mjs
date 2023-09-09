import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind(), sitemap()],
	site: "https://www.elvportafolio.website",
	image: {
		domains: ["res.cloudinary.com"],
		remotePatterns: [
			{
				hostname: "res.cloudinary.com",
				pathname: "dnbdpnvz1/image/upload",
				protocol: "https",
			},
		],
	},
	vite: {
		esbuild: true,
	},
});
