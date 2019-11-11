import { Box, Heading } from "grommet";
import React from "react";
import Card from "../components/card";
import Description from "../components/description";
import Header from "../components/header";
import projects from "../config/projects";
import Colorful from "../layouts/colorful";

/**
 * Home page.
 */
function Home(): JSX.Element {
	return (
		<Colorful>
			<Header />
			<Description />
			<Heading margin={{ horizontal: "large" }}>Projects</Heading>
			<Box direction="row-responsive" wrap justify="around">
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
		</Colorful>
	);
}

export default Home;
