import {createStyles, makeStyles, Theme, Typography} from '@material-ui/core';
import React, {FC} from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bottomMargin: {
			marginBottom: theme.spacing(2)
		}
	})
);

const Header: FC<{title?: string; subtitle?: string}> = props => {
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
};

export default Header;
