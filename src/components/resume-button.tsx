import {faFile} from '@fortawesome/free-solid-svg-icons';
import {ResponsiveContext} from 'grommet';
import React from 'react';
import {url as resumeUrl} from '../config/resume';
import BoxButton from './box-button';

/**
 * A button with a link to download my resumé.
 */
function ResumeButton(): JSX.Element {
	return (
		<ResponsiveContext.Consumer>
			{size => (
				<BoxButton
					href={resumeUrl}
					extras={{width: size === 'small' ? undefined : {min: 'medium'}}}
					icon={faFile}
				>
					Resumé
				</BoxButton>
			)}
		</ResponsiveContext.Consumer>
	);
}

export default ResumeButton;
