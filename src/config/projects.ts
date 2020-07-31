/** A project I've worked on. */
export interface Project {
	/** Title of the project. */
	title: string;
	/** Short description of the project. */
	description: string;
	/** A URL for the project. */
	url?: string;
	/** The tech stack this project uses */
	stack?: string[];
}

/** Projects that I've worked on. */
export const projects: Project[] = [
	{
		title: 'maroon',
		description: 'A really simple web app to download YouTube videos.',
		url: 'https://maroon.jonah.pw',
		stack: ['React', 'TypeScript', 'Next.js', 'Docker']
	},
	{
		title: 'Discoin',
		description: 'A virtual currency exchange system that features a stock-market like dynamic exchange rates system.',
		url: 'https://github.com/discoin/api-v3',
		stack: ['TypeScript', 'NestJS', 'TypeORM', 'PostgreSQL']
	},
	{
		title: 'Zero Width Shortener',
		description:
			'A URL shortener that uses zero-width characters. Built with the Firebase functions and Firestore stack. 600+ GitHub stars and over 50,000 URLs shortened.',
		url: 'https://zws.im',
		stack: ['Firebase', 'Google Cloud', 'Serverless functions']
	},
	{
		title: 'Dice',
		description:
			'A general purpose utility bot for the Discord chat platform. More than 10,000 total users and over half a million commands run.',
		url: 'https://dice.js.org',
		stack: ['Node.js + TypeScript', 'PostgreSQL', 'Prisma', 'Discord API']
	},
	{
		title: 'Team 581',
		description: 'A student-centered robotics club that participates in the FIRST Robotics Challenge.',
		url: 'https://team581.club',
		stack: ['Java', 'OpenCV', 'robotics + integrated electronics']
	},
	{
		title: 'Various open source contributions',
		description:
			"I'm very passionate about giving back to the OSS community, and as such nearly all of my work is open-sourced on GitHub.",
		url: 'https://github.com/pizzafox'
	}
];
