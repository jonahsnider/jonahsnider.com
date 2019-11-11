import { Box, Heading } from "grommet";
import React from "react";

function Header(): JSX.Element {
	return (
		<header>
			<Box
				direction="row-responsive"
				justify="start"
				margin={{ bottom: "large", left: "large" }}
			>
				<Box direction="column" justify="end">
					<Heading level={1} size="xlarge" color="accent-1" margin="small">
						{/* <Heading level={1} size="large" margin="small"> */}
						Jonah Snider
					</Heading>
				</Box>
				<Box direction="column" justify="end">
					{/* <Heading level={2} color="accent-1" size="large" margin="small"> */}
					<Heading level={2} size="large" margin="small">
						Full-stack developer
					</Heading>
				</Box>
			</Box>
		</header>
	);
}

export default Header;
