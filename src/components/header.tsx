import {Box, Heading} from 'grommet';
import React from 'react';

function Header(props: {title: string; subtitle?: string}): JSX.Element {
	return (
		<header>
			<Box
				direction='row-responsive'
				justify='start'
				margin={{bottom: 'large', left: 'large'}}
			>
				<Box direction='column' justify='end'>
					<Heading level={1} size='xlarge' color='accent-1' margin='small'>
						{props.title}
					</Heading>
				</Box>
				{props.subtitle && (
					<Box direction='column' justify='end'>
						<Heading level={2} size='large' margin='small'>
							{props.subtitle}
						</Heading>
					</Box>
				)}
			</Box>
		</header>
	);
}

export default Header;
