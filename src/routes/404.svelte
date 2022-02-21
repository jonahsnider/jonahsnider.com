<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ButtonGroup from '$lib/components/ButtonGroup.svelte';

	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageSeo from '$lib/components/PageSeo.svelte';
	import Text from '$lib/components/Text.svelte';
	import {header} from '$lib/config/page-header';
</script>

<Container main id="main">
	<Header {...header} />

	<PageSeo pageTitle="404" />

	<main id="links">
		<Text kind="h3" animation="fade">Page not found</Text>
		<ButtonGroup>
			<Button href="/" sequentialFade={0}>Home</Button>
		</ButtonGroup>
	</main>
</Container>
