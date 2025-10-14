import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import { metadataBase, openGraph, siteDescription, siteName } from './shared-metadata';

const inter = Inter({ subsets: ['latin'], weight: 'variable', display: 'swap', variable: '--font-inter' });
const rubik = Rubik({ subsets: ['latin'], weight: 'variable', display: 'swap', variable: '--font-rubik' });

export const viewport: Viewport = {
	themeColor: '#ffbbcc',
	colorScheme: 'light dark',
};

export const metadata: Metadata = {
	metadataBase,
	title: {
		default: `${siteName} | Backend developer`,
		template: `%s | ${siteName}`,
	},
	description: siteDescription,
	openGraph,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={clsx(
					inter.variable,
					rubik.variable,
					'container mx-auto my-4 max-w-4xl',
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
