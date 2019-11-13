import {faGithub, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faComments, faLink, faRobot} from '@fortawesome/free-solid-svg-icons';

/** A project I've worked on. */
interface Project {
	/** Title of the project. */
	title: string;
	/** Short description of the project. */
	description: string;
	/** A URL for the project. */
	url?: string;
	/** An icon to display alongside the title. */
	icon: IconDefinition;
}

/** Projects that I've worked on. */
const projects: Project[] = [
	{
		title: 'Zero Width Shortener',
		description:
			'A URL shortener that uses zero-width characters. Built with the Firebase functions and Firestore stack. 600+ GitHub stars and over 30,000 URLs shortened.',
		url: 'https://zws.im',
		icon: faLink
	},
	{
		title: 'Dice',
		description:
			'A general purpose utility bot for the Discord chat platform. More than 10,000 total users and over half a million commands run.',
		url: 'https://dice.js.org',
		icon: faComments
	},
	{
		title: 'Team 581',
		description:
			'An student-centered robotics club that participates in the FIRST Robotics Challenge.',
		url: 'https://team581.club',
		icon: faRobot
	},
	{
		title: 'Various open source contributions',
		description:
			// eslint-disable-next-line @typescript-eslint/quotes
			"I'm very passionate about giving back to the OSS community, and as such nearly all of my work is open-sourced on GitHub.",
		url: 'https://github.com/pizzafox',
		icon: faGithub
	}
];

export default projects;
