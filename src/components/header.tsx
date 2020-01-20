import React from 'react';
import {Typography, makeStyles, createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		h2: {
			marginBottom: theme.spacing(2)
		}
	})
);

function Header(props: {title?: string; subtitle?: string}): JSX.Element {
	const classes = useStyles();

	return (
		<>
			{props.title && (
				<Typography variant='h1' color='primary'>
					{props.title}
				</Typography>
			)}

			{props.subtitle && (
				<Typography variant='h2' className={classes.h2}>
					{props.subtitle}
				</Typography>
			)}
		</>
	);
}

export default Header;
