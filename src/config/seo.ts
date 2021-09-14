import process from 'process';

// eslint-env node
import {NextSeoProps} from 'next-seo';

const description = 'Jonah Snider, full-stack developer. View my resume or get in touch.';

export const url =
	process.env.URL ?? process.env.NODE_ENV === 'production' ? 'https://jonahsnider.com' : 'http://localhost:3000';

export const seo: NextSeoProps = {
	titleTemplate: '%s | Jonah Snider',
	description,
	openGraph: {
		type: 'website',
		// eslint-disable-next-line camelcase
		site_name: 'Jonah Snider',
		url,
		locale: 'en_US',

		images: [
			{
				url: `${url}/images/js/banner.png`,
				width: 1280,
				height: 640,
				alt: 'JS'
			}
		]
	},
	twitter: {
		handle: '@jonahsnider0',
		cardType: 'summary_large_image'
	}
};
