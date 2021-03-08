import {FC} from 'react';
import Heading from './heading';
import styles from './header.module.scss';

export interface Props {
	title?: string;
	subtitle?: string;
}

const Header: FC<Props> = props => (
	<header id='header' className={styles.header}>
		{props.title && <Heading size={1}>{props.title}</Heading>}
		{props.subtitle && (
			<Heading size={2} as='p'>
				{props.subtitle}
			</Heading>
		)}
	</header>
);

export default Header;
