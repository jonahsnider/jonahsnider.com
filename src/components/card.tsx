import { Anchor, Box, BoxProps, Heading, Paragraph, ThemeContext } from "grommet";
import { IconProps } from "grommet-icons";
import React, { cloneElement, useState } from "react";
import animationStyles from "../styles/_animate.scss";
import { normalWeight } from "../styles/_typography.scss";

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
		direction: "column",
		round: "small",
		background: "accent-1",
		pad: "small",
		width: "medium"
	};

	const card = (
		<>
			<Box direction="row" justify="between" align="start" responsive>
				<Heading
					level={3}
					margin="none"
					color={{ dark: "#ffffff", light: "#000000" }}
				>
					{props.title}
				</Heading>
				{props.icon && (
					<Box
						margin={{
							left: "small",
							bottom: "small"
						}}
					>
						{cloneElement(props.icon, {
							color: "brand",
							size: "large"
						} as IconProps)}
					</Box>
				)}
			</Box>

			<Paragraph
				color={{ dark: "#dddddd", light: "#222222" }}
				className={normalWeight}
			>
				{props.children}
			</Paragraph>
		</>
	);

	if (props.href) {
		return (
			<ThemeContext.Extend
				value={{ anchor: { hover: { textDecoration: "none" } } }}
			>
				<Anchor key={props.title} href={props.href}>
					<Box
						{...baseProps}
						elevation={hovered ? "xlarge" : "medium"}
						className={animationStyles.transition}
						onMouseOver={() => setHovered(true)}
						onMouseOut={() => setHovered(false)}
					>
						{card}
					</Box>
				</Anchor>
			</ThemeContext.Extend>
		);
	} else {
		return (
			<Box {...baseProps} elevation="small">
				{card}
			</Box>
		);
	}
}

export default Card;
