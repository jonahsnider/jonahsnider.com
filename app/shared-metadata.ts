import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const siteDescription = [
	"Hi, I'm Jonah.",
	"I'm a software engineer with extensive experience in the Node.js & TypeScript ecosystem.",
	'Currently I work at Uptool, building an AI operating system for manufacturing.',
	'I also do a lot of open source full-stack work which you can view on my GitHub.',
	'Visit my site to view my résumé or get in touch.',
].join(' ');

export const siteName = 'Jonah Snider';

export const metadataBase = new URL(
	process.env.VERCEL_ENV === 'production' ? 'https://jonahsnider.com' : `https://${process.env.VERCEL_URL}`,
);

export const openGraph = {
	title: {
		default: `${siteName} | Senior software engineer`,
		template: `%s | ${siteName}`,
	},
	siteName,
	description: siteDescription,
	type: 'website',
} satisfies OpenGraph;
