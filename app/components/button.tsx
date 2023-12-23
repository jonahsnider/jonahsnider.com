'use client';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	href?: string;
	relative?: boolean;
}>;

const motionVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
};

const styles = clsx(
	'transition-colors outline-none text-center px-8 py-4 rounded border-2',
	'border-dark-500 focus:bg-dark-500 focus:hover:bg-dark-500 hover:bg-dark-500 hover:text-white focus:bg-opacity-30 active:bg-opacity-80 active:focus:text-white',
	'dark:focus:text-white dark:border-pink-500 dark:focus:bg-pink-500 dark:focus:hover:bg-pink-500 dark:hover:bg-pink-500 dark:hover:text-black dark:hover:focus:text-black dark:focus:bg-opacity-30 dark:active:bg-opacity-80 active:focus:text-black',
);

export default function Button({ children, href, relative }: Props) {
	if (href) {
		if (relative) {
			return (
				<motion.div variants={motionVariants}>
					<Link href={href} className={styles}>
						{children}
					</Link>
				</motion.div>
			);
		}
		return (
			<motion.a variants={motionVariants} href={href} target='_blank' rel='noopener noreferrer' className={styles}>
				{children}
			</motion.a>
		);
	}

	return (
		<motion.button type='button' className={styles} variants={motionVariants}>
			{children}
		</motion.button>
	);
}
