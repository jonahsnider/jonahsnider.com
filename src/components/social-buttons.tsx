import {Button, Grid} from '@material-ui/core';
import React from 'react';
import {ReadonlyDeep} from 'type-fest';
import {social, SocialInfo} from '../config/personal-info';

export const SocialButton = (props: ReadonlyDeep<{social: SocialInfo}>): JSX.Element => {
	return (
		<>
			{/* FontAwesome React should be inserting these styles, but it isn't */}
			{/* Previously it generated them only in dev mode, not in production export */}
			{/* This appears to be a cross-platform issue, Nuxt.js users with the same bug https://github.com/nuxt/nuxt.js/issues/6565 */}
			<style global jsx>
				{`
					svg:not(:root).svg-inline--fa {
						overflow: visible;
					}
					.svg-inline--fa.fa-w-16 {
						width: 1em;
					}
					.svg-inline--fa {
						display: inline-block;
						font-size: inherit;
						height: 1em;
						overflow: visible;
						vertical-align: -0.125em;
					}
				`}
			</style>
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
		</>
	);
};

export const SocialButtons = (): JSX.Element => {
	return (
		<Grid container spacing={1} direction='row' justify='flex-start' alignItems='stretch'>
			{social.map((info: ReadonlyDeep<SocialInfo>) => (
				<Grid key={info.text} item xs={12} sm={6} md={3}>
					<SocialButton social={info} />
				</Grid>
			))}
		</Grid>
	);
};
