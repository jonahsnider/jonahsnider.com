import {Box, Heading, ResponsiveContext} from 'grommet';
import React from 'react';
import Card from '../components/card';
import Description from '../components/description';
import Header from '../components/header';
import projects from '../config/projects';
import Colorful from '../layouts/colorful';

/**
 * Home page.
 */
function Home(): JSX.Element {
	return (
		<Colorful>
			<Header />

			<Description />

			<Heading margin={{horizontal: 'large'}}>Projects</Heading>

			<ResponsiveContext.Consumer>
				{size => (
					<Box
						wrap
						direction='row-responsive'
						justify={size === 'large' ? 'between' : 'stretch'}
						margin={{horizontal: 'large'}}
						gap='small'
					>
						{projects.map(project => (
							<Card
								key={project.title}
								icon={project.icon}
								title={project.title}
								href={project.url}
							>
								{project.description}
							</Card>
						))}
					</Box>
				)}
			</ResponsiveContext.Consumer>
		</Colorful>
	);
}

export default Home;
