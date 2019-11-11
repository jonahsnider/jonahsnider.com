import { Grommet, grommet, ThemeValue } from 'grommet';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Seo from '../components/seo';
import siteMetadata from '../config/site-metadata';
import animationStyles from '../styles/_animate.scss';
// eslint-disable-next-line import/no-unassigned-import
import '../styles/_typography.scss';
import { getPageTitle, mergeDefault } from '../util/util';

/** Color palette to use. */
const colorPalette = {
	background: '#ffbacc',
	accent: '#000'
};

const theme: ThemeValue = {
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
				<title>{getPageTitle(siteMetadata)}</title>
				<Seo siteMetadata={siteMetadata} />
			</Head>

			<Grommet
				full
				theme={mergeDefault(grommet, theme)}
				className={animationStyles['fast-transition']}
			>
				{props.children}
			</Grommet>
		</>
	);
}

export default Colorful;
