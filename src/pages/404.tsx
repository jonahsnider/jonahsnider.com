import {NextSeo} from 'next-seo';
import Link from 'next/link';
import {FC} from 'react';
import Button from '../components/button';
import Heading from '../components/heading';

const NotFound: FC = () => (
	<>
		<NextSeo title='404' />

		<main id='links'>
			<Heading size={3}>Page not found</Heading>
			<Link passHref href='/'>
				<Button>Home</Button>
			</Link>
		</main>
	</>
);

export default NotFound;
