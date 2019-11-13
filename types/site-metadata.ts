/**
 * Information used for SEO on each page.
 */
export default interface SiteMetadata {
	/** Keywords describing the site. */
	keywords: string[];
	/** Title of the site. */
	title: string;
	/** Internationalization settings. */
	i18n: {
		/** The language for the site. */
		language: string;
		/** The locale for the site. */
		locale: string;
	};
	/** The parent website URL. */
	url: string;
	/** Description of the website. */
	description: string;
	/** Theme color of the website. */
	themeColor: string;
	/** Accent color of the website. */
	accentColor: string;
	/** The URL to the icon to use accross the website in meta tags. */
	icon: string;
}
