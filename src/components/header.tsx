import {FC} from 'react';
import Text from './text';
import styles from './header.module.scss';

export interface Props {
	title?: string;
	subtitle?: string;
}

const Header: FC<Props> = props => (
	<header id='header' className={styles.header}>
		{props.title && (
			<Text kind='h1'>
				<span className={styles.underline}>{props.title}</span>
			</Text>
		)}
		{props.subtitle && (
			<span className={styles.subtitle}>
				<Text kind='h2' as='p'>
					{props.subtitle}
				</Text>
			</span>
		)}
	</header>
);

export default Header;
