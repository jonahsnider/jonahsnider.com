import {
	Container,
	createMuiTheme,
	CssBaseline,
	responsiveFontSizes,
	ThemeProvider,
	useMediaQuery,
	SimplePaletteColorOptions
} from '@material-ui/core';
import {TypographyStyleOptions} from '@material-ui/core/styles/createTypography';
import Head from 'next/head';
import React, {useMemo} from 'react';
import Seo from './components/seo';
import siteMetadata from './config/site-metadata';

const fontFamilies = {
	// eslint-disable-next-line @typescript-eslint/quotes
	monospace: ["'Cascadia Code'", 'monospace'].join(',')
};

const monospace: TypographyStyleOptions = {
	fontFamily: fontFamilies.monospace
};

const pink: SimplePaletteColorOptions = {light: '#ffedff', main: '#ffbacc', dark: '#cb8a9b', contrastText: '#000000'};
const dark: SimplePaletteColorOptions = {light: '#2c2c2c', main: '#000000', dark: '#000000', contrastText: '#ffffff'};

export const JonahSniderTemplate = (props: {children: JSX.Element[] | JSX.Element}): JSX.Element => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(() => {
		return responsiveFontSizes(
			createMuiTheme({
				spacing: 12,
				palette: {
					type: prefersDarkMode ? 'dark' : 'light',
					background: prefersDarkMode
						? {default: dark.main, paper: pink.main}
						: {default: pink.main, paper: dark.light},
					primary: prefersDarkMode ? pink : dark,
					secondary: prefersDarkMode ? dark : pink
				},
				overrides: {
					MuiCssBaseline: {
						'@global': {
							'@font-face': [
								{
									fontFamily: 'Cascadia Code',
									fontStyle: 'normal',
									fontDisplay: 'swap',
									fontWeight: 400,
									// eslint-disable-next-line @typescript-eslint/quotes
									src: "local('Cascadia Code'),local('Cascadia Code Regular'),url('/fonts/Cascadia') format('ttf')"
								}
							]
						}
					}
				},
				typography: {
					h1: monospace,
					h2: monospace
				}
			})
		);
	}, [prefersDarkMode]);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{siteMetadata.title}</title>
				<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' />
				<link rel='stylesheet' href='/fonts/Cascadia.ttf' />
				<Seo theme={theme} />
			</Head>
			<CssBaseline />
			<Container>{props.children}</Container>
		</ThemeProvider>
	);
};
