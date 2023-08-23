import * as rawLinks from './links';

export * from './color';
export * as header from './header';
export * from './seo';

export const links = [
	{id: 'email', content: rawLinks.email},
	{id: 'github', content: rawLinks.gitHub},
	{id: 'resume', content: rawLinks.resume},
	{id: 'linkedin', content: rawLinks.linkedin},
];
