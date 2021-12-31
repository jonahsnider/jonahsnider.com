import clsx from 'clsx';
import type {FC} from 'react';
import styles from './container.module.scss';

export interface Props {
	main?: boolean;
	id: string;
}

const Container: FC<Props> = props => (
	<section id={props.id} className={clsx(styles.container, {[styles.main]: props.main})}>
		{props.children}
	</section>
);

export default Container;
