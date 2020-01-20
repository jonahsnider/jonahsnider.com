import React from 'react';
import {Button, useTheme, useMediaQuery, Box} from '@material-ui/core';
import {Description} from '@material-ui/icons';
import {url} from '../config/resume';

/**
 * A button with a link to download my resumé.
 */
function ResumeButton(): JSX.Element {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Box width={smallScreen ? undefined : 300}>
			<Button fullWidth startIcon={<Description />} href={url} variant='contained' color='primary' size='large'>
				Resumé
			</Button>
		</Box>
	);
}

export default ResumeButton;
