import type {Readable} from 'svelte/store';
import {derived} from 'svelte/store';
import {createMediaQueryStore} from './media-query';
import {Theme} from '$lib/utils/theme';

const DEFAULT_THEME = Theme.Light;

export const preferredTheme: Readable<Theme> = derived(
	[createMediaQueryStore('(prefers-color-scheme: light)'), createMediaQueryStore('(prefers-color-scheme: dark)')],
	([isLight, isDark]) => {
		if (isLight) {
			return Theme.Light;
		}

		if (isDark) {
			return Theme.Dark;
		}

		return DEFAULT_THEME;
	},
);
