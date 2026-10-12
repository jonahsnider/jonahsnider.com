import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	ignoreDependencies: [
		// Used to deploy the static assets configured in wrangler.jsonc.
		'wrangler',
	],
};

export default config;
