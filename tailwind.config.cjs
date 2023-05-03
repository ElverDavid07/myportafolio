/** @type {import('tailwindcss').Config} */
module.exports = {
	// darkMode:"class",
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: "'Nunito', sans-serif",
				kalam: "'Kalam', cursive",
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('flowbite/plugin')
	],
}
