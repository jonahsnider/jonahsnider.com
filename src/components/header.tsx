import type {FC, PropsWithChildren} from 'react';
import Text from './text';
import styles from './header.module.scss';

export interface Props {
	title?: string;
	subtitle?: string;
}

const Header: FC<PropsWithChildren<Props>> = props => (
	<header id='header' className={styles.header}>
		{props.title && (
			<Text kind='h1' animation='underline'>
				{props.title}
			</Text>
		)}
		{props.subtitle && (
			<Text kind='h2' as='p' animation='fade'>
				{props.subtitle}
			</Text>
		)}
	</header>
);

export default Header;
