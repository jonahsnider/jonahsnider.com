import clsx from 'clsx';
import {FC} from 'react';
import styles from './container.module.scss';

export type Props = {main?: boolean; alone: never} | {main: true; alone?: boolean};

const Container: FC<Props> = props => (
	<section className={clsx(styles.container, {[styles.main]: props.main}, {[styles.alone]: props.alone})}>
		{props.children}
	</section>
);

export default Container;
