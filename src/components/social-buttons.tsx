import {Button, createStyles, Grid, makeStyles, useMediaQuery, useTheme, Box} from '@material-ui/core';
import React from 'react';
import {social, SocialInfo} from '../config/personal-info';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1
		}
	})
);

export function SocialButton(props: {social: SocialInfo}): JSX.Element {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Button
			startIcon={props.social.icon}
			href={props.social.link}
			disableRipple={!props.social.link}
			disableElevation={!props.social.link}
			variant={props.social.link ? 'contained' : 'text'}
			component={props.social.link ? 'button' : 'div'}
			color='primary'
			size='large'
			fullWidth={smallScreen}
		>
			{props.social.text}
		</Button>
	);
}

export function SocialButtons(): JSX.Element {
	const classes = useStyles();
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

	if (smallScreen) {
		return (
			// The linter says this fragment is useless
			// If you remove this fragment the entire build will fail
			// eslint-disable-next-line react/jsx-no-useless-fragment
			<>
				{...social.map(info => (
					<Box key={info.text} marginY={1}>
						<SocialButton social={info} />
					</Box>
				))}
			</>
		);
	}

	return (
		<Grid container className={classes.root} spacing={1}>
			{social.map(info => (
				<Grid key={info.text} item>
					<SocialButton social={info} />
				</Grid>
			))}
		</Grid>
	);
}
