import {DefaultSeo, NextSeo} from 'next-seo';
import {ThemeProvider, useTheme} from 'next-themes';
import {AppProps} from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import {FC} from 'react';
import Container from '../components/container';
import Header from '../components/header';
import {seo} from '../config';
import '../styles/global.scss';

const fontFamily = 'Inter:wght@300;400&family=Rubik:wght@700';

const JonahSniderApp: FC = props => {
	const {theme} = useTheme();

	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`} rel='stylesheet' />
			</Head>

			<DefaultSeo {...seo} />

			<NextSeo
				openGraph={{
					images: [
						{
							url: `https://jonah.pw/images/js/${theme}/js-512x.png`
						}
					]
				}}
			/>

			<Container>
				<Header title='Jonah Snider' subtitle='Software developer' />

				{props.children}
			</Container>
		</>
	);
};

const ThemedApp: FC<AppProps> = ({Component, pageProps}) => (
	<ThemeProvider forcedTheme='dark'>
		<JonahSniderApp>
			<Component {...pageProps} />
		</JonahSniderApp>
	</ThemeProvider>
);

export default ThemedApp;
