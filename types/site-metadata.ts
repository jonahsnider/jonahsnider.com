/**
 * Information used for SEO on each page.
 */
export default interface SiteMetadata {
	/** Keywords describing the site. */
	keywords?: string[];
	/** Title of the site. */
	title?: string;
	/** Internationalization settings. */
	i18n?: {
		/** The language for the site. */
		language?: string;
		/** The locale for the site. */
		locale?: string;
	};
	/** The parent website URL. */
	url?: string;
	/** Description of the website. */
	description?: string;
	/** Theme color of the website. */
	themeColor?: string;
	/** Page specific settings. */
	page?: {
		/** The canonical URL of the page. */
		url?: string;
		/** Description of the page. */
		description?: string;
		/** Theme color of the page. */
		themeColor?: string;
		/** The title of the page. */
		title?: string;
	};
	/** The URl to the icon to use accross the website in meta tags. */
	icon?: string;
}
