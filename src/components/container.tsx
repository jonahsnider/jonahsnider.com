import clsx from 'clsx';
import type {FC, PropsWithChildren} from 'react';
import styles from './container.module.scss';

export type Props = {
	main?: boolean;
	id: string;
};

const Container: FC<PropsWithChildren<Props>> = props => (
	<section id={props.id} className={clsx(styles.container, {[styles.main]: props.main})}>
		{props.children}
	</section>
);

export default Container;
