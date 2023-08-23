import process from 'process';

import type {NextSeoProps} from 'next-seo';

const description = [
	"Hi, I'm Jonah.",
	"I'm a backend developer with extensive experience in the Node.js & TypeScript ecosystem.",
	'Previously, I worked at Voiceflow on the platform team.',
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
				url: `${url}/images/logomark/banner.png`,
				width: 1280,
				height: 640,
				alt: 'J',
			},
		],
	},
	/* eslint-enable camelcase, @typescript-eslint/naming-convention */
};
