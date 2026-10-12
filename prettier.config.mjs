import config from './.oxfmtrc.json' with { type: 'json' };

export default {
	...config,
	plugins: ['prettier-plugin-astro'],
};
