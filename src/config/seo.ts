import {NextSeoProps} from 'next-seo';

const description = 'Jonah Snider, full-stack developer. View my resume or get in touch.';

export const seo: NextSeoProps = {
	titleTemplate: '%s | Jonah Snider',
	description,
	openGraph: {
		type: 'website',
		site_name: 'Jonah Snider',
		url: process.env.DEPLOY_URL,
		locale: 'en_US',

		defaultImageWidth: 512,
		defaultImageHeight: 512
	}
};
