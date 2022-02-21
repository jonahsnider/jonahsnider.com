<script lang="ts">
	import Text from './Text.svelte';

	export let title: string | undefined;
	export let subtitle: string | undefined;
</script>

<header id="header">
	<Text kind="h1" animation="underline">{title}</Text>
	<Text kind="h2" as="p" animation="fade">{subtitle}</Text>
</header>

<style lang="scss">
	header {
		margin-bottom: 3em;
	}
</style>
