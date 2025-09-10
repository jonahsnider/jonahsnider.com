import clsx from 'clsx';
import type { Variants } from 'framer-motion';
import type { Metadata } from 'next';
import { Button } from './components/button';
import { Experience } from './components/experience';
import * as motion from './motion';
import { openGraph } from './shared-metadata';

export const metadata: Metadata = {
	title: 'Jonah Snider',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		...openGraph,
		title: 'Jonah Snider',
		url: '/',
	},
};

const animationDurations = {
	underline: 0.7,
	subtitle: 0.55,
};

const subtitleVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: animationDurations.subtitle,
			delay: animationDurations.underline * 0.3,
			ease: [0.25, 0.1, 0.25, 1.0],
		},
	},
};

const buttonContainerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: (animationDurations.underline + animationDurations.subtitle) * 0.35,
			bounce: 0,
		},
	},
};

export default function Home() {
	return (
		<main id='main'>
			<section id='header' className='min-h-[97vh] flex flex-col justify-center gap-12'>
				<div className='max-w-fit'>
					<h1 className='text-5xl font-display font-bold dark:text-pink-500'>Jonah Snider</h1>
					<motion.div
						className='h-[2px] bg-dark-500 dark:bg-pink-500 w-0'
						animate={{
							width: ['0%', '100%', '0%'],
							marginLeft: ['0%', '0%', '100%'],
						}}
						transition={{ ease: [0.65, 0.05, 0.36, 1], duration: animationDurations.underline }}
					/>
					<motion.p className='mt-1 text-2xl' variants={subtitleVariants} initial='hidden' animate='visible'>
						Software engineer
					</motion.p>
				</div>
				<motion.div
					className={clsx('gap-4', 'grid grid-rows-2 grid-cols-2', 'sm:flex')}
					variants={buttonContainerVariants}
					initial='hidden'
					animate='visible'
				>
					<Button href='mailto:jonah@jonahsnider.com'>Email</Button>
					<Button href='https://github.com/jonahsnider'>GitHub</Button>
					<Button href='https://linkedin.com/in/jonahsnider'>LinkedIn</Button>
					<Button href='https://jonahsnider.com/resume'>Résumé</Button>
				</motion.div>
			</section>

			<div className='flex flex-col gap-12'>
				<section id='experience' className='flex flex-col gap-1'>
					<h2 className='text-4xl font-display font-bold dark:text-pink-500'>Experience</h2>

					<div className='flex flex-col gap-8'>
						{/* biome-ignore lint/a11y/useValidAriaRole: This is not an ARIA role attribute */}
						<Experience
							id='sanity'
							role='Software engineer 2'
							date={{ start: 'July 2025', end: 'present' }}
							title='Sanity'
							link={{ href: 'https://sanity.io/', display: 'sanity.io' }}
						>
							Sanity is a fully customizable all-code backend for AI, automations, and applications to author and render
							content.
						</Experience>

						{/* biome-ignore lint/a11y/useValidAriaRole: This is not an ARIA role attribute */}
						<Experience
							id='uptool'
							role='Senior software engineer'
							date={{ start: 'May 2025', end: 'July 2025' }}
							title='Uptool'
							link={{ href: 'https://www.uptool.com/', display: 'uptool.com' }}
						>
							Uptool is an AI operating system for manufacturing.
						</Experience>

						{/* biome-ignore lint/a11y/useValidAriaRole: This is not an ARIA role attribute */}
						<Experience
							id='voiceflow'
							role='Backend developer'
							date={{ start: 'May 2021', end: 'August 2023' }}
							title='Voiceflow'
							link={{ href: 'https://voiceflow.com', display: 'voiceflow.com' }}
						>
							Voiceflow is the best way for conversation design (CXD) teams to build, prototype, and deploy AI
							assistants. I worked on the platform team designing & building an incredible developer platform for our
							customers.
						</Experience>

						{/* biome-ignore lint/a11y/useValidAriaRole: This is not an ARIA role attribute */}
						<Experience
							id='gameface'
							role='Junior backend developer (contract)'
							date={{ start: 'November 2020', end: 'May 2021' }}
							title='GameFace'
							link={{ href: 'https://gamefaced.gg', display: 'gamefaced.gg' }}
						>
							GameFace is an esports business, which hosts tournaments users can pay to enter, for a chance to win cash
							prizes. I took full ownership of GameFace's Discord integration as the sole developer maintaining it.
						</Experience>
					</div>
				</section>

				<section id='volunteering' className='flex flex-col gap-1'>
					<h2 className='text-4xl font-display font-bold dark:text-pink-500'>Volunteering</h2>

					<div className='flex flex-col gap-8'>
						{/* biome-ignore lint/a11y/useValidAriaRole: This is not an ARIA role attribute */}
						<Experience
							id='team581'
							role='Coach'
							date={{ start: 'June 2021', end: 'present' }}
							title='Team 581'
							link={{ href: 'https://team581.com', display: 'team581.com' }}
						>
							Team 581 is a{' '}
							<a
								href='https://www.firstinspires.org/robotics/frc'
								target='_blank'
								rel='noopener noreferrer'
								className='underline'
							>
								FIRST robotics (FRC)
							</a>{' '}
							team based out of San Jose High School, a Title 1 school located in downtown San Jose, CA. We bring STEM
							and career opportunities to our school and community by leveraging a combination of hands-on,
							project-based education and competitiveness to perform at a high level on and off the field.
						</Experience>
					</div>
				</section>
			</div>
		</main>
	);
}
