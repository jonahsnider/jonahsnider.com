import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: colors.zinc[100],
			pink: {
				200: '#ffbbcc35',
				500: '#ffbbcc',
			},
			dark: {
				200: '#17171c35',
				500: '#17171c'
			}
		},
		fontFamily: {
			display: ['var(--font-rubik)', 'sans-serif'],
			body: ['var(--font-inter)', 'sans-serif'],
		}
	},
	plugins: [],
};
export default config;
