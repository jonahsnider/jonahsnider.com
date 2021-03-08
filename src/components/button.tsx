import {FC} from 'react';
import styles from './button.module.scss';

interface Props {
	href?: string;
}

const Button: FC<Props> = props => (
	<a href={props.href} className={styles.button}>
		{props.children}
	</a>
);

export default Button;
