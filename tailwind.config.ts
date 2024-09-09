import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: colors.zinc[100],
			black: colors.zinc[900],
			pink: {
				500: '#ffbbcc',
			},
			dark: {
				500: '#17171c',
			},
		},
		fontFamily: {
			display: ['var(--font-rubik)', 'sans-serif'],
			body: ['var(--font-inter)', 'sans-serif'],
		},
	},
	plugins: [],
};

// biome-ignore lint/style/noDefaultExport: This must be a default export
export default config;
