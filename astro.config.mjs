import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
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
	vite: { esbuild: true },
});
