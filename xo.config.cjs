const base = require('@jonahsnider/xo-config');

const config = {...base};

config.extends ??= [];
config.extends.push('xo', 'xo/browser', 'xo-react');

config.overrides.push({
	files: ['*.config.js', '*.config.cjs', 'src/config/*.ts'],
	extends: ['xo'],
});

config.ignore ??= [];
config.ignore.push('next-env.d.ts', 'public');

config.rules['react/no-unescaped-entities'] = 'off';
config.rules['react/prop-types'] = 'off';
config.rules['react/react-in-jsx-scope'] = 'off';
config.rules['unicorn/prefer-node-protocol'] = 'off';
config.rules['import/extensions'] = 'off';

module.exports = config;
