import {Anchor, Box, BoxProps, ResponsiveContext} from 'grommet';
import React, {useState} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import animationStyles from '../styles/_animate.scss';
import NoHover from './no-hover';

/**
 * Make a button using a Box.
 */
function BoxButton(props: {
	/** Where the box should take you when clicked. */
	href: string;
	/** Label for the box. */
	children: string;
	/** Icon to display in the box. */
	icon?: IconDefinition;
	/** Extra props to pass to the box. */
	extras?: BoxProps;
}): JSX.Element {
	const [hovered, setHovered] = useState(false);

	return (
		// Double wrapped anchor
		// This one here actually links this whole box that we have made look like a button
		<Anchor
			href={props.href}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
		>
			<ResponsiveContext.Consumer>
				{size => (
					<Box
						direction='column'
						pad={
							size === 'small'
								? {horizontal: 'large', vertical: 'medium'}
								: 'small'
						}
						justify='center'
						background='accent-1'
						round='small'
						elevation={hovered ? 'xlarge' : 'medium'}
						width={{min: 'small'}}
						className={animationStyles.transition}
						{...props.extras}
					>
						<NoHover>
							{/* Second anchor */}
							{/* This one has all the styles that we like (the inline icon especially), but no actual href */}
							<Anchor
								color={{dark: '#ffffff', light: '#000000'}}
								size={size === 'large' ? 'large' : 'medium'}
								a11yTitle={props.children}
								icon={
									props.icon && <FontAwesomeIcon icon={props.icon} size='lg' />
								}
								label={props.children}
								as='span'
							/>
						</NoHover>
					</Box>
				)}
			</ResponsiveContext.Consumer>
		</Anchor>
	);
}

export default BoxButton;
