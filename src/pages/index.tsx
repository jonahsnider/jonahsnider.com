import {NextSeo} from 'next-seo';
import {FC} from 'react';
import Button from '../components/button';
import {links} from '../config';
import styles from '../components/button-group.module.scss';

const Home: FC = () => (
	<>
		<NextSeo title='Home' openGraph={{title: 'Home'}} />

		<main id='links' className={styles['button-group']}>
			{Object.entries(links).map(([name, link]) => (
				<Button key={name} href={link.url}>
					{link.text}
				</Button>
			))}
		</main>
	</>
);

export default Home;
