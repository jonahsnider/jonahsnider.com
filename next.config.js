const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

module.exports = withPlugins([
	[
		withSass,
		{
			cssModules: true
		}
	],
	[withOffline]
]);
