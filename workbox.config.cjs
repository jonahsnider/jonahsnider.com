module.exports = {
	globDirectory: 'build/',
	globPatterns: ['**/*.{html,js,css,jpg,ico,json,png,svg,webmanifest}'],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
