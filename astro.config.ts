import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://jonahsnider.com',
	trailingSlash: 'never',
	build: { format: 'file' },
	vite: {
		plugins: [tailwindcss()],
	},
});
