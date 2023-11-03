const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: "nunito",
				kalam: "kalam",
			},
			colors: {
				primary: "#06A0F9",
				base:"#f6f6f6"
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true }), nextui(),require('tailwindcss-animated')],
};
