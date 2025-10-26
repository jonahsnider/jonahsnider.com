import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	productionBrowserSourceMaps: true,
	reactCompiler: true,
};

export default nextConfig;
