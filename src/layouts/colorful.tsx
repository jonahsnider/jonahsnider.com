import { Grommet } from 'grommet';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Seo from '../components/seo';
import siteMetadata from '../config/site-metadata';
// eslint-disable-next-line import/no-unassigned-import
import '../styles/_typography.scss';

/** Color palette to use. */
const colorPalette = {
	background: '#ffbacc',
	accent: '#000'
};

export const theme = {
	name: 'jonah.pw',
	rounding: 4,
	spacing: 24,
	global: {
		colors: {
			brand: colorPalette.background,
			'accent-1': colorPalette.accent,
			background: colorPalette.background
		},
		font: {
			weight: 400,
			family: 'Roboto, sans-serif'
		}
	},
	heading: {
		level: {
			1: {
				font: {
					family: 'Open Sans, sans-serif',
					weight: 700
				}
			},
			2: {
				font: {
					family: 'Roboto, sans-serif',
					weight: 700
				}
			}
		}
	}
};

/**
 * A template that wraps your content in a colorful background.
 * @param props
 */
function Colorful(props: {
	/** Anything you want to wrap in the colorful layout. */
	children: ReactNode;
}): JSX.Element {
	return (
		<>
			<Head>
				<title>{siteMetadata.title}</title>
				<Seo siteMetadata={siteMetadata} />
			</Head>

			<Grommet
				full
				theme={theme}
			>
				{props.children}
			</Grommet>
		</>
	);
}

export default Colorful;
