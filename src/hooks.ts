import {minify} from 'html-minifier';
import type {Options} from 'html-minifier';
import type {Handle} from '@sveltejs/kit';
import {prerendering} from '$app/env';

const minificationOptions: Options = {
	/* eslint-disable @typescript-eslint/naming-convention */
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true,
	/* eslint-enable @typescript-eslint/naming-convention */
};

export const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event);

	if (prerendering && response.headers.get('content-type') === 'text/html') {
		return new Response(minify(await response.text(), minificationOptions), {
			status: response.status,
			headers: response.headers,
		});
	}

	return response;
};
