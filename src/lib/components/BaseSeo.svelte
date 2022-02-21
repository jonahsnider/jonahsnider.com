<script lang="ts">
	import {description, url, siteName} from '$lib/config/seo';
	import type {Theme} from '$lib/utils/theme';

	const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

	export let theme: Theme;

	const themeColor = theme === 'light' ? '#ffbbcc' : '#000000';
</script>

<meta name="theme-color" content={themeColor} />
<link rel="manifest" href={`${url}/manifests/${theme}.webmanifest`} />
<meta name="robots" content="index,follow" />
<meta name="color-scheme" content="light dark" />

<!-- Icons -->
<link rel="icon" href={`${url}/images/js/${theme}/favicon.ico`} type="image/x-icon" />
{#each sizes as size}
	<link rel="icon" type="image/png" sizes={`${size}x${size}`} href={`${url}/images/js/${theme}/js-${size}x.png`} />
	<link rel="apple-touch-icon" type="image/png" sizes={`${size}x${size}`} href={`${url}/images/js/${theme}/js-${size}x.png`} />
{/each}

<meta name="description" content={description} />

<!-- Open Graph -->
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:description" content={description} />
<meta property="og:site_name" content={siteName} />
<meta property="og:image" content={`${url}/images/js/banner.png`} />
<meta property="og:image:alt" content="JS" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="640" />
