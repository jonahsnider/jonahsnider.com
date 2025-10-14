import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	id: string;
	title: string;
	role: string;
	link: {
		href: string;
		display: React.ReactNode;
	};
	date: {
		start: string;
		end: string;
	};
}>;

export function Experience({ id, title, children, date, link, role }: Props) {
	return (
		<div id={id}>
			<div className='flex w-full items-baseline justify-between dark:text-pink-500'>
				<h3 className='font-medium text-2xl'>{title}</h3>
				<a href={link.href} target='_blank' rel='noreferrer noopener' className='font-light text-xl underline'>
					{link.display}
				</a>
			</div>
			<div className='mb-2 flex w-full justify-between'>
				<p>{role}</p>
				<p>
					{date.start} - {date.end}
				</p>
			</div>

			<p>{children}</p>
		</div>
	);
}
