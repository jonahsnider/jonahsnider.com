import {Button, Grid} from '@material-ui/core';
import {Home} from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';
import Header from '../components/header';
import {JonahSniderTemplate} from '../template';

export const config = {amp: 'hybrid'};

/**
 * 404 page not found page.
 */
const NotFoundPage = (): JSX.Element => {
	return (
		<JonahSniderTemplate title='Not found'>
			<Header title='404' subtitle='This page couldn’t be found' />
			<Grid container>
				<Grid item xs={12} md={4}>
					<Link passHref href='/'>
						<Button fullWidth startIcon={<Home />} color='primary' size='large' variant='contained'>
							Home
						</Button>
					</Link>
				</Grid>
			</Grid>
		</JonahSniderTemplate>
	);
};

export default NotFoundPage;
