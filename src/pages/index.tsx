import React from 'react';
export const config = {amp: 'hybrid'};
import {Box} from '@material-ui/core';
import Header from '../components/header';
import {Projects} from '../components/projects';
import ResumeButton from '../components/resume-button';
import {SocialButtons} from '../components/social-buttons';
import siteMetadata from '../config/site-metadata';
import {JonahSniderTemplate} from '../template';

/**
 * Home page.
 */
function Home(): JSX.Element {
	return (
		<JonahSniderTemplate>
			<Header title={siteMetadata.title} subtitle='Full-stack developer' />

			<SocialButtons />

			<Box marginY={3}>
				<ResumeButton />
			</Box>

			<Header subtitle='Projects' />

			<Projects />
		</JonahSniderTemplate>
	);
}

export default Home;
