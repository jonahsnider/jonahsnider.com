import { MetadataRoute } from 'next';
import { openGraph, siteName } from './shared-metadata';

export default function manifest(): MetadataRoute.Manifest {
	return {
		// biome-ignore lint/style/useNamingConvention: Can't use camelcase here
		background_color: '#ffbbcc',
		description: 'Jonah Snider',
		display: 'standalone',
		lang: 'en-US',
		name: openGraph.title.default,
		// biome-ignore lint/style/useNamingConvention: Can't use camelcase here
		short_name: siteName,
		// biome-ignore lint/style/useNamingConvention: Can't use camelcase here
		start_url: '/',
		// biome-ignore lint/style/useNamingConvention: Can't use camelcase here
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
