<script lang="ts">
	import Text from './Text.svelte';

	export let id: string;
	export let date: {start: string; end: string};
	export let title: string;
	export let link: string | undefined;
</script>

<section {id}>
	<Text kind="h3">
		{title}{#if link} <a rel="noopener noreferrer" target="_blank" href={link}>(link)</a>{/if}
	</Text>
	<Text kind="p">
		{date.start} - {date.end}
	</Text>
	<Text kind="p"><slot /></Text>
</section>

<style lang="scss">
	section {
		margin-top: 1em;
	}

	a {
		transition: opacity 150ms ease;

		font-weight: 200;

		color: var(--color-text-muted);
		margin: {
			left: 0.5rem;
		}
		opacity: 0;

		section:hover & {
			opacity: initial;
		}
	}
</style>
