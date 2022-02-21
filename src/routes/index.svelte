<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ButtonGroup from '$lib/components/ButtonGroup.svelte';
	import Container from '$lib/components/Container.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageSeo from '$lib/components/PageSeo.svelte';
	import Text from '$lib/components/Text.svelte';
	import {links} from '$lib/config/links';
	import {header} from '$lib/config/page-header';
</script>

<PageSeo canonicalPagePath="/" />

<Container main id="main">
	<Header {...header} />

	<main>
		<ButtonGroup>
			{#each Object.values(links) as link, index}
				<Button sequentialFade={index} href={link.url}>{link.text}</Button>
			{/each}
		</ButtonGroup>
	</main>
</Container>

<Container id="experience">
	<Text kind="h1" as="h2">Experience</Text>

	<Text kind="p">
		You may also be interested in <a href="https://www.linkedin.com/in/jonahsnider/">my LinkedIn profile</a>.
	</Text>

	<Experience id="voiceflow" title="Voiceflow" date={{start: 'May 2021', end: 'present'}} link="https://voiceflow.com/">
		Design, prototype, and launch voice/chat assistants. Full-time backend developer position working on the Voiceflow platform team. Adding features to our
		publish & export system, developing internal tools, and working with customers using our runtimes.
	</Experience>

	<Experience id="team581" title="Team 581" date={{start: 'October 2017', end: 'present'}} link="https://team581.club/">
		<a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer">FIRST robotics (FRC)</a> team. Started as a student, worked primarily
		on software, specializing in image recognition and autonomous routines. Graduated 2021 and then returned as a volunteer mentor in the 2022 season to help train
		new students on the software team.
	</Experience>

	<Experience id="gameface" title="GameFace" date={{start: 'November 2020', end: 'May 2021'}} link="https://gamefaced.gg/">
		Esports tournament host. Part-time software developer position, took over development of their Discord integration with the GameFace platform.
	</Experience>
</Container>
