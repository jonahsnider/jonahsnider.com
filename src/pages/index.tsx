import {Box, Grid, useTheme} from '@material-ui/core';
import React, {FC} from 'react';
import Header from '../components/header';
import {Projects} from '../components/projects';
import ResumeButton from '../components/resume-button';
import Seo from '../components/seo';
import {SocialButtons} from '../components/social-buttons';
import {siteMetadata} from '../config/site-metadata';

export const config = {amp: 'hybrid'};

/**
 * Home page.
 */
const Portfolio: FC = () => {
	const theme = useTheme();
	return (
		<>
			<Seo theme={theme} pageTitle='Portfolio' />
			<Header title={siteMetadata.title} subtitle='Full-stack developer' />

			<SocialButtons />

			<Box marginY={3}>
				<Grid container spacing={1}>
					<Grid item xs={12} md={4}>
						<ResumeButton />
					</Grid>
				</Grid>
			</Box>

			<Header subtitle='Projects' />

			<Projects />
		</>
	);
};

export default Portfolio;
