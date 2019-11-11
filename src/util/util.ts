import SiteMetadata from '../../types/site-metadata';

export function mergeDefault(def: object | any, given?: object | any): object {
	if (!given) {
		return def;
	}

	for (const key in def) {
		if (
			!Object.prototype.hasOwnProperty.call(given, key) ||
			given[key] === undefined
		) {
			given[key] = def[key];
			// eslint-disable-next-line no-new-object
		} else if (given[key] === new Object(given[key])) {
			given[key] = mergeDefault(def[key], given[key]);
		}
	}

	return given;
}

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
