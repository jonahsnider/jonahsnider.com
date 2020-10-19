import {Button} from '@material-ui/core';
import {Description} from '@material-ui/icons';
import React, {FC} from 'react';
import {url} from '../config/resume';

/**
 * A button with a link to download my resumé.
 */
const ResumeButton: FC = () => {
	return (
		<Button
			fullWidth
			startIcon={<Description />}
			href={url}
			rel='noopener noreferrer'
			variant='contained'
			color='primary'
			size='large'
		>
			Resumé
		</Button>
	);
};

export default ResumeButton;
