import { PropsWithChildren } from 'react';

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

export default function Experience({ id, title, children, date, link, role }: Props) {
	return (
		<div id={id}>
			<div className='w-full flex justify-between items-baseline dark:text-pink-500'>
				<h3 className='text-2xl font-bold'>{title}</h3>
				<a href={link.href} target='_blank' rel='noreferrer noopener' className='text-xl font-light underline'>
					{link.display}
				</a>
			</div>
			<div className='w-full flex justify-between mb-2'>
				<p>{role}</p>
				<p>
					{date.start} - {date.end}
				</p>
			</div>

			<p>{children}</p>
		</div>
	);
}
