interface Color {
	background: string;
	accent: string;
	name?: string;
}

export const colorPalettes: Color[] = [
	{
		name: "Blue angels",
		accent: "#f7c730",
		background: "#163bd2"
	},
	{
		name: "Red orange",
		accent: "#004593",
		background: "#d37f27"
	},
	{
		name: "Neon mint",
		accent: "#9c1252",
		background: "#66f4b0"
	},
	{
		name: "Neon lime with purple",
		accent: "#830c87",
		background: "7ffa7b"
	},
	{
		name: "Office",
		accent: "#425874",
		background: "#c0aa8e"
	},
	{
		name: "Midnight violet with yellow green",
		accent: "#b6db54",
		background: "#4621a8"
	},
	{
		name: "Milk tea",
		accent: "#303130",
		background: "#d3c8db"
	},
	{
		name: "Pastel pink and black",
		accent: "#000000",
		background: "#ffbacc"
	}
];

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
