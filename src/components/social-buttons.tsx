import {Button, Grid} from '@material-ui/core';
import React from 'react';
import {social, SocialInfo} from '../config/personal-info';

export function SocialButton(props: {social: SocialInfo}): JSX.Element {
	return (
		<Button
			fullWidth
			startIcon={props.social.icon}
			href={props.social.link}
			disableRipple={!props.social.link}
			disableElevation={!props.social.link}
			variant={props.social.link ? 'outlined' : 'text'}
			component={props.social.link ? 'button' : 'div'}
			color='primary'
			size='large'
		>
			{props.social.text}
		</Button>
	);
}

export function SocialButtons(): JSX.Element {
	return (
		<Grid container spacing={1} direction='row' justify='flex-start' alignItems='stretch'>
			{social.map(info => (
				<Grid key={info.text} item xs={12} sm={6} md={3}>
					<SocialButton social={info} />
				</Grid>
			))}
		</Grid>
	);
}
