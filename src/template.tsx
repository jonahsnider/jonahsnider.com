import {
	Container,
	createMuiTheme,
	CssBaseline,
	Fab,
	Grid,
	responsiveFontSizes,
	ThemeProvider as ThemeProvider
} from '@material-ui/core';
import {FlashOnRounded} from '@material-ui/icons';
import {useTheme} from 'next-themes';
import {useAmp} from 'next/amp';
import Head from 'next/head';
import Link from 'next/link';
import React, {FC, ReactChild, useMemo} from 'react';
import Seo from './components/seo';
import {siteMetadata} from './config/site-metadata';
import {customFonts, dark, pink} from './config/theme';

export const JonahSniderTemplate: FC<{
	children: ReactChild;
}> = props => {
	const isAMP = useAmp();
	const {theme: colorTheme} = useTheme();
	const prefersDarkMode = colorTheme === 'dark';

	const theme = useMemo(() => {
		return responsiveFontSizes(
			createMuiTheme({
				spacing: 12,
				palette: {
					type: prefersDarkMode ? 'dark' : 'light',
					background: prefersDarkMode ? {default: dark.main, paper: pink.main} : {default: pink.main, paper: dark.main},
					primary: prefersDarkMode ? pink : dark,
					secondary: prefersDarkMode ? dark : pink
				},
				overrides: {
					MuiCssBaseline: {
						'@global': {
							'@font-face': [
								{
									fontFamily: isAMP ? "'Fira Mono'" : "'Cascadia Code Regular'",
									fontStyle: 'normal',
									fontDisplay: 'swap',
									fontWeight: 400,
									src: isAMP
										? undefined
										: [
												"url('/fonts/CascadiaCode.woff2') format('woff2')",
												"url('/fonts/CascadiaCode.ttf') format('truetype')"
										  ].join(', \n')
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
				<link
					rel={`stylesheet${isAMP ? '' : ' preconnect'}`}
					href={`https://fonts.googleapis.com/css?family=${isAMP ? 'Fira+Mono|' : ''}Roboto:400,500&display=swap`}
				/>
			</Head>
			<Seo theme={theme} pageTitle={siteMetadata.title} />
			<CssBaseline />
			<Container>
				{props.children}
				{isAMP && (
					<Grid container direction='row' justify='flex-end' alignItems='flex-end' spacing={1}>
						<Grid item>
							<Link passHref href='/'>
								<Fab color='primary' aria-label='amp' variant='extended'>
									<FlashOnRounded />
									Disable AMP
								</Fab>
							</Link>
						</Grid>
					</Grid>
				)}
			</Container>
		</ThemeProvider>
	);
};
