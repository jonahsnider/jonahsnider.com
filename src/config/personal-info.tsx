import {Email, GitHub} from '@material-ui/icons';
import {faKeybase, faDiscord} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export interface SocialInfo {
	icon: JSX.Element;
	text: string;
	link?: string;
}

export const social: SocialInfo[] = [
	{
		text: 'pizzafox@github',
		link: 'https://github.com/pizzafox/',
		icon: <GitHub />
	},
	{text: 'jonah@jonah.pw', link: 'mailto:jonah@jonah.pw', icon: <Email />},
	{text: 'pizzafox@keybase', link: 'https://keybase.io/pizzafox/', icon: <FontAwesomeIcon icon={faKeybase} />},
	{text: 'PizzaFox#0075', icon: <FontAwesomeIcon icon={faDiscord} />}
];
