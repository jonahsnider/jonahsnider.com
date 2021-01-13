import {Button, Grid, useTheme, CircularProgress} from '@material-ui/core';
import {Home} from '@material-ui/icons';
import Link from 'next/link';
import React, {FC, useState} from 'react';
import Header from '../components/header';
import Seo from '../components/seo';

export const config = {amp: 'hybrid'};

/**
 * 404 page not found page.
 */
const NotFoundPage: FC = () => {
	const theme = useTheme();
	const [loading, setLoading] = useState(false);

	return (
		<>
			<Seo theme={theme} pageTitle='Not found' />
			<Header title='404' subtitle="This page couldn't be found" />
			<Grid container>
				<Grid item xs={12} md={4}>
					<Link passHref href='/'>
						<Button
							fullWidth
							disabled={loading}
							startIcon={loading ? <CircularProgress /> : <Home />}
							color='primary'
							size='large'
							variant='contained'
							onClick={() => {
								setLoading(true);
							}}
						>
							Home
						</Button>
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default NotFoundPage;
