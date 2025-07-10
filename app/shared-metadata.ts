import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const siteDescription = [
	"Hi, I'm Jonah.",
	"I'm a software engineer with extensive experience in the Node.js & TypeScript ecosystem.",
	'Currently I work at Sanity, expanding the platform with AI-driven features and agents.',
	'I also do a lot of open source full-stack work which you can view on my GitHub.',
	'Visit my site to view my résumé or get in touch.',
].join(' ');

export const siteName = 'Jonah Snider';

export const metadataBase = new URL(process.env.CF_PAGES_URL ?? 'https://jonahsnider.com');

export const openGraph = {
	title: {
		default: `${siteName} | Software engineer`,
		template: `%s | ${siteName}`,
	},
	siteName,
	description: siteDescription,
	type: 'website',
} satisfies OpenGraph;
