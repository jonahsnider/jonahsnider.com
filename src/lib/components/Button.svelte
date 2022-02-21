<script lang="ts">
	import Text from './Text.svelte';

	export let href: string;
	export let sequentialFade: undefined | number = undefined;
</script>

<a
	{href}
	class:fade={sequentialFade !== undefined}
	class:fade-0={sequentialFade === 0}
	class:fade-1={sequentialFade === 1}
	class:fade-2={sequentialFade === 2}
	class:fade-3={sequentialFade === 3}
>
	<Text kind="p"><slot /></Text>
</a>

<style lang="scss">
	@use 'sass:math';
	@use '../../styles/breakpoints.scss';
	@use '../../styles/animations.scss';

	a {
		text-decoration: none;
		text-align: center;
		font-family: 'Inter', sans-serif;

		padding: 1em 2.5em;
		margin: 1em 0;
		flex: 0 0 25%;

		outline: none;

		@include breakpoints.tablet {
			margin: 1em;
		}

		@include breakpoints.laptop {
			flex: inherit;
			margin: 0 1em;
		}

		transition: color, background-color 150ms linear;

		color: var(--color-foreground);
		border: 0.25rem solid var(--color-foreground);

		&:hover {
			color: var(--color-background);
			background-color: var(--color-foreground);

			*::selection {
				background-color: var(--color-background);
				color: var(--color-foreground);
			}
		}

		&:focus:not(:hover) {
			background-color: var(--color-foreground-light);
			color: var(--color-foreground);
		}

		&.fade {
			$total-animation-delay: animations.$all-header-duration - 0.75s;
			$header-animation-delay-percentage: '#{100 * math.div($total-animation-delay, animations.$all-duration)}%';

			@keyframes fade {
				0% {
					opacity: 0;
				}

				#{$header-animation-delay-percentage} {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}

			animation: {
				name: fade;
			}

			@for $i from 0 through 4 - 1 {
				&.fade-#{$i} {
					animation: {
						duration: animations.$all-duration + (0.15s * $i);
					}
				}
			}
		}
	}
</style>
