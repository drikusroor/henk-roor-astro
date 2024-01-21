/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'navy-blue': '#42527d',
				'sky-blue': '#e2e6ee',
				'sand-gold': '#f6c195',
				'copper-orange': '#f0a63f',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
