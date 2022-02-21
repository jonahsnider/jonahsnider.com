<script lang="ts">
	import {siteName, url} from '$lib/config/seo';

	export let pageTitle: string | undefined = undefined;
	/** Relative to site base URL. */
	export let canonicalPagePath: string | undefined = undefined;

	const title = pageTitle ? `${siteName} | ${pageTitle}` : siteName;
	const canonicalUrl = canonicalPagePath ? `${url}/${canonicalPagePath}` : undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />

	{#if canonicalUrl}
		<meta property="og:url" content={canonicalUrl} />
		<link rel="canonical" href={canonicalUrl} />
	{/if}
</svelte:head>
