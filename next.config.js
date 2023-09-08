/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	env: {
		// biome-ignore lint/nursery/useNamingConvention: Shouldn't be in camelcase
		NEXT_PUBLIC_URL: process.env.URL || process.env.DEPLOY_URL || 'http://localhost:3000',
	},
	productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
