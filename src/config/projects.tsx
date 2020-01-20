import React from 'react';
import {Link, Chat, Build, GitHub, Transform} from '@material-ui/icons';

/** A project I've worked on. */
export interface Project {
	/** Title of the project. */
	title: string;
	/** Short description of the project. */
	description: string;
	/** A URL for the project. */
	url?: string;
	/** An icon to display alongside the title. */
	icon: JSX.Element;
	/** The tech stack this project uses */
	stack?: string[];
}

/** Projects that I've worked on. */
const projects: Project[] = [
	{
		title: 'Discoin',
		description: 'A virtual currency exchange system that features a stock-market like dynamic exchange rates system.',
		url: 'https://github.com/discoin/api-v3',
		stack: ['TypeScript', 'NestJS', 'TypeORM', 'PostgreSQL'],
		icon: <Transform />
	},
	{
		title: 'Zero Width Shortener',
		description:
			'A URL shortener that uses zero-width characters. Built with the Firebase functions and Firestore stack. 600+ GitHub stars and over 30,000 URLs shortened.',
		url: 'https://zws.im',
		stack: ['Firebase', 'Google Cloud', 'Serverless functions'],
		icon: <Link />
	},
	{
		title: 'Dice',
		description:
			'A general purpose utility bot for the Discord chat platform. More than 10,000 total users and over half a million commands run.',
		url: 'https://dice.js.org',
		stack: ['Node.js', 'MongoDB', 'Discord API'],
		icon: <Chat />
	},
	{
		title: 'Team 581',
		description: 'A student-centered robotics club that participates in the FIRST Robotics Challenge.',
		url: 'https://team581.club',
		stack: ['Java', 'OpenCV', 'Robotics'],
		icon: <Build />
	},
	{
		title: 'Various open source contributions',
		description:
			// eslint-disable-next-line @typescript-eslint/quotes
			"I'm very passionate about giving back to the OSS community, and as such nearly all of my work is open-sourced on GitHub.",
		url: 'https://github.com/pizzafox',
		icon: <GitHub />
	}
];

export default projects;
