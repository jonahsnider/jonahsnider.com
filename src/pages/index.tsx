import {Grid, Box} from '@material-ui/core';
import React from 'react';
import Header from '../components/header';
import {Projects} from '../components/projects';
import ResumeButton from '../components/resume-button';
import {SocialButtons} from '../components/social-buttons';
import siteMetadata from '../config/site-metadata';
import {JonahSniderTemplate} from '../template';

export const config = {amp: 'hybrid'};

/**
 * Home page.
 */
function Home(): JSX.Element {
	return (
		<JonahSniderTemplate>
			<Header title={siteMetadata.title} subtitle='Full-stack developer' />

			<SocialButtons />

			<Box marginY={3}>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={6} md={4}>
						<ResumeButton />
					</Grid>
				</Grid>
			</Box>

			<Header subtitle='Projects' />

			<Projects />
		</JonahSniderTemplate>
	);
}

export default Home;
