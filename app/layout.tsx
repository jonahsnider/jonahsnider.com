import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import { openGraph, siteDescription, siteName } from './shared-metadata';

const inter = Inter({ subsets: ['latin'], weight: 'variable', display: 'swap', variable: '--font-inter' });
const rubik = Rubik({ subsets: ['latin'], weight: '700', display: 'swap', variable: '--font-rubik' });

export const metadata: Metadata = {
	title: {
		default: `${siteName} | Backend developer`,
		template: `%s | ${siteName}`,
	},
	description: siteDescription,
	themeColor: '#ffbbcc',
	colorScheme: 'light dark',
	openGraph,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={clsx(
					inter.variable,
					rubik.variable,
					'container max-w-4xl mx-auto my-4',
					'font-body',
					'bg-pink-500 text-dark-500 selection:bg-dark-500 selection:text-pink-500',
					'dark:bg-dark-500 dark:text-white dark:selection:bg-pink-500 dark:selection:text-dark-500',
				)}
			>
				<div className='mx-4'>{children}</div>
			</body>
		</html>
	);
}
