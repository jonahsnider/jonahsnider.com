import React from 'react';
import {Typography, makeStyles, createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bottomMargin: {
			marginBottom: theme.spacing(2)
		}
	})
);

function Header(props: {title?: string; subtitle?: string}): JSX.Element {
	const classes = useStyles();

	return (
		<>
			{props.title && (
				<Typography key='title' variant='h1' color='primary' className={props.subtitle ? '' : classes.bottomMargin}>
					{props.title}
				</Typography>
			)}

			{props.subtitle && (
				<Typography key='subtitle' variant='h2' className={classes.bottomMargin}>
					{props.subtitle}
				</Typography>
			)}
		</>
	);
}

export default Header;
