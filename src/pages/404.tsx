import clsx from 'clsx';
import {NextSeo} from 'next-seo';
import Link from 'next/link';
import {FC} from 'react';
import Button from '../components/button';
import styles from '../components/button-group.module.scss';
import Container from '../components/container';
import Header from '../components/header';
import Text from '../components/text';
import {header} from '../config';

const NotFound: FC = () => (
	<>
		<NextSeo title='404' openGraph={{title: '404'}} />

		<Container main id='main'>
			<Header {...header} />

			<main id='links'>
				<Text kind='h3' animation='fade'>
					Page not found
				</Text>
				<div className={clsx(styles['button-group'], styles.animated)}>
					<Link passHref href='/'>
						<Button href='/'>Home</Button>
					</Link>
				</div>
			</main>
		</Container>
	</>
);

export default NotFound;
