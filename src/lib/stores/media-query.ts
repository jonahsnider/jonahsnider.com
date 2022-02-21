import type {Readable} from 'svelte/store';
import {readable} from 'svelte/store';
import {browser} from '$app/env';

export function createMediaQueryStore(mediaQuery: string): Readable<undefined | boolean> {
	return readable(browser ? window.matchMedia(mediaQuery).matches : undefined, set => {
		const onChange = (query: MediaQueryListEvent): void => {
			set(query.matches);
		};

		if (browser) {
			const matcher = window.matchMedia(mediaQuery);
			matcher.addEventListener('change', onChange);

			return () => {
				matcher.removeEventListener('change', onChange);
			};
		}
	});
}
