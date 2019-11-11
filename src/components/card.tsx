import {Anchor, Box, BoxProps, Heading, Paragraph, ThemeContext} from 'grommet';
import {IconProps} from 'grommet-icons';
import {ElevationType} from 'grommet/utils';
import React, {cloneElement, CSSProperties, useState} from 'react';
import animationStyles from '../styles/_animate.scss';
import typographyStyles from '../styles/_typography.scss';
import NoHover from './no-hover';

/** Base elevation for the card. */
const baseElevation: ElevationType = 'medium';

/**
 * A collection of information with a title.
 */
function Card(props: {
	/** Title of the card. */
	title: string;
	/** Description for the card. */
	children: string | string[];
	/** Link for more information about this card. */
	href?: string;
	/** An icon to display alongside the title. */
	icon?: JSX.Element;
}): JSX.Element {
	const [hovered, setHovered] = useState(false);

	const baseProps: BoxProps = {
		direction: 'column',
		round: 'small',
		background: 'accent-1',
		pad: 'small',
		margin: {
			vertical: 'small'
		}
	};

	const card = (
		<>
			<Box responsive direction='row' justify='between' align='start'>
				<ThemeContext.Extend
					value={{
						heading: {
							extend: {
								textDecoration: hovered ? 'underline' : 'none'
							} as CSSProperties
						}
					}}
				>
					<Heading
						level={3}
						margin='none'
						color={{dark: '#ffffff', light: '#000000'}}
					>
						{props.title}
					</Heading>
				</ThemeContext.Extend>
				{props.icon && (
					<Box
						margin={{
							left: 'small',
							bottom: 'small'
						}}
					>
						{cloneElement(props.icon, {
							color: 'brand',
							size: 'large'
						} as IconProps)}
					</Box>
				)}
			</Box>

			<Paragraph
				color={{dark: '#dddddd', light: '#222222'}}
				className={typographyStyles['normal-weight']}
			>
				{props.children}
			</Paragraph>
		</>
	);

	if (props.href) {
		return (
			<NoHover>
				<Anchor key={props.title} href={props.href}>
					<Box
						{...baseProps}
						elevation={hovered ? 'xlarge' : baseElevation}
						className={animationStyles.transition}
						onMouseOver={() => setHovered(true)}
						onMouseOut={() => setHovered(false)}
					>
						{card}
					</Box>
				</Anchor>
			</NoHover>
		);
	}

	return (
		<Box {...baseProps} elevation={baseElevation}>
			{card}
		</Box>
	);
}

export default Card;
