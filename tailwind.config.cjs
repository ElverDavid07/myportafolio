const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: "'nunito', sans-serif",
				kalam: "'kalam', cursive",
			},
			colors: {
				primary: "#0693E3",
				base:"#f6f6f6"
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true }), nextui()],
};
