import clsx from 'clsx';
import {NextSeo} from 'next-seo';
import {FC} from 'react';
import Button from '../components/button';
import styles from '../components/button-group.module.scss';
import Container from '../components/container';
import Experience from '../components/experience';
import Header from '../components/header';
import Text from '../components/text';
import {header, links} from '../config';

const Home: FC = () => (
	<>
		<NextSeo titleTemplate='Jonah Snider | %s' title={header.subtitle} openGraph={{title: header.subtitle}} />

		<Container main>
			<Header {...header} />

			<main id='links' className={clsx(styles['button-group'], styles.animated)}>
				{Object.entries(links).map(([name, link]) => (
					<Button key={name} href={link.url}>
						{link.text}
					</Button>
				))}
			</main>
		</Container>

		<Container>
			<Text kind='h1' as='h2'>
				Experience
			</Text>

			<Experience id='gameface' date={{start: 'November 2020', end: 'present'}} title='GameFace'>
				Esports tournament host. Junior developer position working on integrating our Discord bot with the GameFace
				platform.
			</Experience>

			<Experience id='team581' date={{start: 'October 2017', end: 'present'}} title='Team 581'>
				FIRST robotics team. Worked primarily on software, specializing in image recognition and autonomous routines.
			</Experience>
		</Container>
	</>
);

export default Home;
