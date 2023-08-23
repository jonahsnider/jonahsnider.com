import clsx from 'clsx';
import {NextSeo} from 'next-seo';
import type {FC} from 'react';
import Button from '../components/button';
import styles from '../components/button-group.module.scss';
import Container from '../components/container';
import Experience from '../components/experience';
import Header from '../components/header';
import Text from '../components/text';
import {header, links, url} from '../config';

const Home: FC = () => (
	<>
		<NextSeo titleTemplate='Jonah Snider | %s' title={header.subtitle} openGraph={{title: `Jonah Snider | ${header.subtitle}`}} canonical={url} />

		<Container main id='main'>
			<Header {...header} />

			<main id='links' className={clsx(styles['button-group'], styles.animated)}>
				{links.map(({id, content: link}) => (
					<Button key={id} href={link.url}>
						{link.text}
					</Button>
				))}
			</main>
		</Container>

		<Container id='experience'>
			<Text kind='h1' as='h2'>
				Experience
			</Text>

			<Experience id='voiceflow' date={{start: 'May 2021', end: 'August 2023'}} title='Voiceflow' link='https://voiceflow.com'>
				Design, prototype, and launch voice/chat assistants. Full-time backend developer position working on the Voiceflow platform team. Adding features to our
				publish & export system, developing internal tools, and working with customers using our runtimes.
			</Experience>

			<Experience id='team581' date={{start: 'October 2017', end: 'present'}} title='Team 581' link='https://team581.com'>
				<a href='https://www.firstinspires.org/robotics/frc' target='_blank' rel='noopener noreferrer'>
					FIRST robotics (FRC)
				</a>{' '}
				team. Started as a student, worked primarily on software, specializing in image recognition and autonomous routines. I graduated 2021 and then returned
				as a volunteer mentor in the 2022 season. I've been mentoring the team since then.
			</Experience>

			<Experience id='gameface' date={{start: 'November 2020', end: 'May 2021'}} title='GameFace' link='https://gamefaced.gg'>
				Esports tournament host. Part-time software developer position, took over development of their Discord integration with the GameFace platform.
			</Experience>
		</Container>
	</>
);

export default Home;
