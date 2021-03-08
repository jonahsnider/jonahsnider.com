import {NextSeo} from 'next-seo';
import Link from 'next/link';
import {FC} from 'react';
import Button from '../components/button';
import styles from '../components/button-group.module.scss';
import Text from '../components/text';

const NotFound: FC = () => (
	<>
		<NextSeo title='404' openGraph={{title: '404'}} />

		<main id='links'>
			<Text kind='h3'>Page not found</Text>
			<div className={styles['button-group']}>
				<Link passHref href='/'>
					<Button href='/'>Home</Button>
				</Link>
			</div>
		</main>
	</>
);

export default NotFound;
