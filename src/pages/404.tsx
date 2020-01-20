import React from 'react';
import {Button, useMediaQuery, useTheme, Box} from '@material-ui/core';
import {Home} from '@material-ui/icons';
import Link from 'next/link';
import Header from '../components/header';
import {JonahSniderTemplate} from '../template';

export const config = {amp: 'hybrid'};

/**
 * 404 page not found page.
 */
function NotFoundPage(): JSX.Element {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<JonahSniderTemplate>
			<Header title='404' subtitle="This page couldn't be found" />
			<Link passHref href='/'>
				<Box width={smallScreen ? undefined : 300}>
					<Button fullWidth startIcon={<Home />} color='primary' size='large' variant='contained'>
						Home
					</Button>
				</Box>
			</Link>
		</JonahSniderTemplate>
	);
}

export default NotFoundPage;
