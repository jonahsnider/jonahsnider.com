import SiteMetadata from '../../types/site-metadata';

/**
 * Get the title of a page using a metadata config.
 * @param config The config object to use for generating the title
 * @return The title of the page
 */
export function getPageTitle(config: SiteMetadata): string {
	if (config.page && config.page.title) {
		if (config.title) {
			return `${config.page.title}`;
		}

		return `${config.page.title} | ${config.title}`;
	}

	if (config.title) {
		return config.title;
	}

	return '';
}
