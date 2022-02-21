const base = require('@jonahsnider/xo-config');

const config = {...base};

config.extends ??= [];

config.overrides.push(
	{
		files: ['*.svelte'],
		processor: 'svelte3/svelte3',
		plugins: ['svelte3'],
		extends: ['xo/browser'],
	},
	{
		files: ['src/app.d.ts'],
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
);

config.settings = {
	'svelte3/typescript': () => require('typescript'),
};

config.ignore ??= [];
config.ignore.push('static');

config.rules['unicorn/prefer-node-protocol'] = 'off';
config.rules['import/extensions'] = 'off';

module.exports = config;
