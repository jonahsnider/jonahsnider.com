import { Box } from 'grommet';
import { Github, License, Mail } from 'grommet-icons';
import React from 'react';
import SocialButton from './social-button';

function Description(): JSX.Element {
	return (
		<Box direction="row-responsive" margin="large" gap="medium">
			<SocialButton icon={<Github/>} href="https://github.com/pizzafox">
				pizzafox@github
			</SocialButton>
			<SocialButton icon={<Mail/>} href="mailto:jonah@jonah.pw">
				jonah@jonah.pw
			</SocialButton>
			{/* No Keybase icon exists so this key icon will have to do */}
			<SocialButton icon={<License/>} href="https://keybase.io/pizzafox">
				pizzafox@keybase
			</SocialButton>
		</Box>
	);
}

export default Description;
