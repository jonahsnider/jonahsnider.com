const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					register: true,
					dest: 'public',
				},
			},
		],
	],
	{
		experimental: {
			concurrentFeatures: true,
			serverComponents: true,
		},
	},
);
