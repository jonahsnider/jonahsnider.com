import process from 'process';

import type {NextSeoProps} from 'next-seo';

const description = [
	"Hi, I'm Jonah.",
	'I work as a backend developer at Voiceflow writing Node.js & TypeScript apps for our platform team.',
	'I also do a lot of open source full-stack work which you can view on my GitHub.',
	'Visit my site to view my résumé or get in touch.',
].join(' ');

export const url = process.env.URL ?? process.env.NODE_ENV === 'production' ? 'https://jonahsnider.com' : 'http://localhost:3000';

export const seo: NextSeoProps = {
	/* eslint-disable camelcase, @typescript-eslint/naming-convention */
	titleTemplate: '%s | Jonah Snider',
	description,
	openGraph: {
		type: 'website',
		site_name: 'Jonah Snider',
		url,
		locale: 'en_US',

		images: [
			{
				url: `${url}/images/js/banner.png`,
				width: 1280,
				height: 640,
				alt: 'JS',
			},
		],
	},
	twitter: {
		handle: '@jonahsnider0',
		cardType: 'summary_large_image',
	},
	/* eslint-enable camelcase, @typescript-eslint/naming-convention */
};
