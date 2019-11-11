import { Grommet, grommet, ThemeValue } from "grommet";
import React, { ReactNode } from "react";
import animationStyles from "../styles/_animate.scss";
// eslint-disable-next-line import/no-unassigned-import
import "../styles/_typography.scss";
import { colorPalettes, mergeDefault } from "../util/util";

/**
 * A template that wraps your content in a colorful background.
 * @param props
 */
function Colorful(props: {
	/** Anything you want to wrap in the colorful layout. */
	children: ReactNode;
}): JSX.Element {
	const randomPalette =
		colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

	const theme: ThemeValue = {
		name: "jonah.pw",
		rounding: 4,
		spacing: 24,
		global: {
			colors: {
				brand: randomPalette.background,
				"accent-1": randomPalette.accent,
				background: randomPalette.background
			},
			font: {
				weight: 400,
				family: "Roboto, sans-serif"
			}
		},
		heading: {
			level: {
				1: {
					font: {
						family: "Open Sans, sans-serif",
						weight: 700
					}
				},
				2: {
					font: {
						family: "Roboto, sans-serif",
						weight: 700
					}
				}
			}
		}
	};

	return (
		<Grommet
			full
			theme={mergeDefault(grommet, theme)}
			className={animationStyles["fast-transition"]}
		>
			{props.children}
		</Grommet>
	);
}

export default Colorful;
