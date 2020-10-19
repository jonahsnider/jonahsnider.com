import {faDiscord, faKeybase} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Email, GitHub} from '@material-ui/icons';
import React, {ReactChild} from 'react';

export interface SocialInfo {
	icon: ReactChild;
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
