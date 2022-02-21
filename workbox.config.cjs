module.exports = {
	globDirectory: 'dist/',
	globPatterns: ['**/*.{html,js,css,jpg,ico}'],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
