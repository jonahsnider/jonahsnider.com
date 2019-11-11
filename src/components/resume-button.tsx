import {ResponsiveContext} from 'grommet';
import {DocumentText} from 'grommet-icons';
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
					icon={<DocumentText />}
				>
					Resumé
				</BoxButton>
			)}
		</ResponsiveContext.Consumer>
	);
}

export default ResumeButton;
