import {Button, Typography, useTheme} from '@material-ui/core';
import React from 'react';
import Header from '../components/header';
import Seo from '../components/seo';

const payload = `javascript:$.getScript("//jonah.pw/public/canvas.js")`;

/**
 * Home page.
 */
const Portfolio = (): JSX.Element => {
	const theme = useTheme();
	return (
		<>
			<Seo theme={theme} pageTitle='canvas' description='me when i use canvas epically' />
			<Header title='canvas' subtitle='me when i canvas' />

			<Typography>
				how 2 canvas when you are on the quiz page:
				<ol>
					<li>
						drag this to your bookmarks bar:{' '}
						<Button href={payload} variant='contained' color='primary'>
							canvas moment
						</Button>
					</li>
					<li>
						if you cant see your bookmarks bar try pressing <kbd>ctrl + shift + B</kbd>
					</li>
					<li>
						if that doesn't work and you are desperate, manually type <code>{payload}</code> into the address bar on the
						quiz page
					</li>
					<li>click the bookmark you made or hit enter when you type in the code</li>
					<li>if it worked the logo in the corner will have changed and canvas will no longer spy on you</li>
				</ol>
			</Typography>
			<Typography>
				note: this only works after the logo has been changed, it wont erase any data that already was recorded so you
				probably want to use it as soon as you load the quiz page
			</Typography>
			<Typography>if you have any problems or questions with it dm me (or email me lol)</Typography>
		</>
	);
};

export default Portfolio;
