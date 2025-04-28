import type { MetadataRoute } from 'next';
import { openGraph, siteName } from './shared-metadata';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: '#ffbbcc',
		description: 'Jonah Snider',
		display: 'standalone',
		lang: 'en-US',
		name: openGraph.title.default,
		short_name: siteName,
		start_url: '/',
		theme_color: '#17171c',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
				purpose: 'maskable',
			},
			{
				src: '/icon.svg',
				sizes: 'any',
				type: 'image/svg+xml',
				purpose: 'maskable',
			},
			{
				src: '/logomark-256px.png',
				sizes: '256x256',
				type: 'image/png',
				purpose: 'maskable',
			},
			{
				src: '/logomark-monochrome-256px.png',
				sizes: '256x256',
				type: 'image/png',
				purpose: 'monochrome',
			},
		],
	};
}
