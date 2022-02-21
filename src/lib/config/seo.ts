export const description = [
	"Hi, I'm Jonah.",
	'I work as a backend developer at Voiceflow writing Node.js & TypeScript apps for our platform team.',
	'I also do a lot of open source full-stack work which you can view on my GitHub.',
	'Visit my site to view my résumé or get in touch.',
].join(' ');

export const url = getUrl().replace(/\/$/, '');

export const siteName = 'Jonah Snider';

function getUrl(): string {
	if (import.meta.env.DEV) {
		return new URL('http://localhost:3000').toString();
	}

	return new URL('https://jonahsnider.com').toString();
}
