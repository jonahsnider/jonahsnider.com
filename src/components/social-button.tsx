import { Anchor, Box, ResponsiveContext } from "grommet";
import React, { useState } from "react";
import animationStyles from "../styles/_animate.scss";

function SocialButton(props: {
	href: string;
	children: string;
	icon?: JSX.Element;
}): JSX.Element {
	const [hovered, setHovered] = useState(false);

	return (
		<ResponsiveContext.Consumer>
			{size => (
				<Box
					direction="column"
					pad={
						size === "small"
							? { horizontal: "large", vertical: "medium" }
							: "small"
					}
					justify="center"
					background="accent-1"
					round="medium"
					elevation={hovered ? "large" : "small"}
					width={{ min: "small" }}
					className={animationStyles.transition}
					onMouseOver={() => setHovered(true)}
					onMouseOut={() => setHovered(false)}
				>
					<Anchor
						color={{ dark: "#ffffff", light: "#000000" }}
						size={size === "large" ? "large" : "medium"}
						a11yTitle={props.children}
						icon={props.icon}
						href={props.href}
						label={props.children}
					/>
				</Box>
			)}
		</ResponsiveContext.Consumer>
	);
}

export default SocialButton;
