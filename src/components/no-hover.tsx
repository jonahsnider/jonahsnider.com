import {ThemeContext} from 'grommet';
import React from 'react';

/**
 * Remove the hover effects from an anchor element.
 */
function NoHover(props: {
	/** Elements to remove hover effects from. */
	children: JSX.Element | JSX.Element[];
}): JSX.Element {
	return (
		<ThemeContext.Extend value={{anchor: {hover: {textDecoration: 'none'}}}}>
			{props.children}
		</ThemeContext.Extend>
	);
}

export default NoHover;
