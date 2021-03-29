// eslint-env node
import {NextSeoProps} from 'next-seo';

const description = 'Jonah Snider, full-stack developer. View my resume or get in touch.';

export const url = process.env.URL ?? 'https://jonah.pw';

export const seo: NextSeoProps = {
	titleTemplate: '%s | Jonah Snider',
	description,
	openGraph: {
		type: 'website',
		// eslint-disable-next-line camelcase
		site_name: 'Jonah Snider',
		url,
		locale: 'en_US',

		defaultImageWidth: 512,
		defaultImageHeight: 512
	}
};
