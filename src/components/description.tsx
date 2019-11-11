import {Box} from 'grommet';
import {Github, License, Mail} from 'grommet-icons';
import React from 'react';
import BoxButton from './box-button';
import ResumeButton from './resume-button';

function Description(): JSX.Element {
	return (
		<>
			<Box direction='row-responsive' margin='large' gap='medium'>
				<BoxButton icon={<Github />} href='https://github.com/pizzafox'>
					pizzafox@github
				</BoxButton>
				<BoxButton icon={<Mail />} href='mailto:jonah@jonah.pw'>
					jonah@jonah.pw
				</BoxButton>
				{/* No Keybase icon exists so this key icon will have to do */}
				<BoxButton icon={<License />} href='https://keybase.io/pizzafox'>
					pizzafox@keybase
				</BoxButton>
			</Box>
			<Box direction='row-responsive' margin='large' gap='medium'>
				<ResumeButton />
			</Box>
		</>
	);
}

export default Description;
