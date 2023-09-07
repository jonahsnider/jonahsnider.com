/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	env: {
		NEXT_PUBLIC_URL: process.env.URL || process.env.DEPLOY_URL || 'http://localhost:3000',
	},
	productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
