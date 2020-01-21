import {
	Container,
	createMuiTheme,
	CssBaseline,
	responsiveFontSizes,
	ThemeProvider,
	useMediaQuery
} from '@material-ui/core';
import {useAmp} from 'next/amp';
import Head from 'next/head';
import React, {useMemo} from 'react';
import Seo from './components/seo';
import siteMetadata from './config/site-metadata';
import {dark, monospace, pink} from './config/theme';

export const JonahSniderTemplate = (props: {children: JSX.Element[] | JSX.Element}): JSX.Element => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const isAMP = useAmp();

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
									fontFamily: isAMP ? 'Fira Mono' : 'Cascadia Code',
									fontStyle: 'normal',
									fontDisplay: 'swap',
									fontWeight: 400,
									src: isAMP
										? undefined
										: `local('Cascadia Code'),local('Cascadia Code Regular'),url('${siteMetadata.url}/fonts/Cascadia') format('ttf')`
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
	}, [isAMP, prefersDarkMode]);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{siteMetadata.title}</title>
				{isAMP ? (
					<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Fira+Mono|Roboto:400,500&display=swap' />
				) : (
					<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' />
				)}
			</Head>
			<Seo theme={theme} />
			<CssBaseline />
			<Container>{props.children}</Container>
		</ThemeProvider>
	);
};
