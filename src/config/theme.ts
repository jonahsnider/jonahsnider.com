import {TypographyStyleOptions} from '@material-ui/core/styles/createTypography';
import {SimplePaletteColorOptions, colors} from '@material-ui/core';

const fontFamilies = {
	// eslint-disable-next-line @typescript-eslint/quotes
	monospace: ["'Cascadia Code'", 'monospace'].join(',')
};

export const monospace: TypographyStyleOptions = {
	fontFamily: fontFamilies.monospace
};

export const pink: SimplePaletteColorOptions = {
	light: '#ffedff',
	main: '#ffbacc',
	dark: '#cb8a9b',
	contrastText: colors.common.black
};
export const dark: SimplePaletteColorOptions = {
	light: '#2c2c2c',
	main: colors.common.black,
	dark: colors.common.black,
	contrastText: colors.common.white
};
