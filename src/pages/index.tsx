import clsx from 'clsx';
import {NextSeo} from 'next-seo';
import {FC} from 'react';
import Button from '../components/button';
import styles from '../components/button-group.module.scss';
import {links} from '../config';

const Home: FC = () => (
	<>
		<NextSeo title='Home' openGraph={{title: 'Home'}} />

		<main id='links' className={clsx(styles['button-group'], styles.animated)}>
			{Object.entries(links).map(([name, link]) => (
				<Button key={name} href={link.url}>
					{link.text}
				</Button>
			))}
		</main>
	</>
);

export default Home;
