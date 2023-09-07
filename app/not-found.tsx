import { Metadata } from 'next';
import { Button } from './components';
import { openGraph } from './shared-metadata';

export const metadata: Metadata = {
	title: 'Not found',
	openGraph: {
		...openGraph,
		title: 'Not found',
	},
};

export default function NotFound() {
	return (
		<main>
			<section id='header' className='h-screen flex flex-col justify-center space-y-12'>
				<div className='space-y-1'>
					<h1 className='text-5xl font-display font-bold dark:text-pink-500'>Jonah Snider</h1>
					<p className='text-2xl'>404 - Page not found</p>
				</div>

				<div>
					<Button relative={true} href='/'>
						Home
					</Button>
				</div>
			</section>
		</main>
	);
}
