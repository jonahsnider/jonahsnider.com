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
import {dark, pink, customFonts} from './config/theme';

export const JonahSniderTemplate = (props: {children: JSX.Element[] | JSX.Element}): JSX.Element => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const isAMP = useAmp();

	const fontURLs = customFonts.map(font => `local(${font})`);

	if (!isAMP) {
		// Load custom font if we aren't in AMP mode
		fontURLs.push(`url(${siteMetadata.url}/fonts/Cascadia.ttf) format('ttf')`);
	}

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
									fontFamily: isAMP ? 'Fira Mono' : "'Cascadia Code Regular'",
									fontStyle: 'normal',
									fontDisplay: 'swap',
									fontWeight: 400,
									src: isAMP ? undefined : `url(${siteMetadata.url}/fonts/Cascadia.ttf) format('ttf')`
								}
							]
						}
					}
				},
				typography: {
					h1: {
						fontFamily: [...customFonts, 'monospace'].join()
					},
					h2: {
						fontFamily: [...customFonts, 'monospace'].join()
					}
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
