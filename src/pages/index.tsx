import {NextSeo} from 'next-seo';
import {FC} from 'react';
import Button from '../components/button';
import {links} from '../config';

const Home: FC = () => (
	<>
		<NextSeo title='Home' />

		<main id='links'>
			{Object.entries(links).map(([name, link]) => (
				<Button key={name} href={link.url}>
					{link.text}
				</Button>
			))}
		</main>
	</>
);

export default Home;
