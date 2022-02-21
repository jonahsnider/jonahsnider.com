<script lang="ts">
	import TemplateSeo from '$lib/components/TemplateSeo.svelte';
	import {preferredTheme} from '$lib/stores/theme';
	import type {Theme} from '$lib/utils/theme';
	import 'modern-normalize/modern-normalize.css';
	import {onMount} from 'svelte';
	import {get} from 'svelte/store';

	let theme: Theme = get(preferredTheme);

	// TODO: This never seems to run
	onMount(() => {
		preferredTheme.subscribe(newTheme => {
			theme = newTheme;
		});
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Rubik:wght@700&display=swap" rel="stylesheet" />
</svelte:head>

<TemplateSeo {theme} />

<slot />

<style lang="scss">
	@use 'sass:color';
	@use '../styles/theme.scss';

	$color-foreground: #000000;
	$color-background: #ffbbcc;

	:global(:root) {
		$color-text: black;

		--color-foreground: #{$color-foreground};
		--color-background: #{$color-background};
		--color-foreground-light: #{color.adjust($color-foreground, $alpha: -0.75)};
		--color-text: #{$color-text};
		--color-text-muted: #{color.adjust($color-text, $alpha: -0.4)};

		@include theme.theme('dark') {
			$color-text: white;

			--color-foreground: #{$color-background};
			--color-background: #{$color-foreground};
			--color-foreground-light: #{color.adjust($color-background, $alpha: -0.75)};
			--color-text: #{$color-text};
			--color-text-muted: #{color.adjust($color-text, $alpha: -0.2)};
		}
	}

	:global(body) {
		background-color: var(--color-background);
		color: var(--color-text);

		&::-webkit-scrollbar-track,
		&::-webkit-scrollbar {
			background-color: var(--color-background);
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--color-foreground);
		}
	}

	:global(*::selection) {
		background-color: var(--color-foreground);
		color: var(--color-background);
	}
</style>
