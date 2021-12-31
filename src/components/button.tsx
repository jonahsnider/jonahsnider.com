import type {FC} from 'react';
import styles from './button.module.scss';
import Text from './text';

interface Props {
	href?: string;
}

const Button: FC<Props> = props => (
	<a href={props.href} className={styles.button}>
		<Text kind='p'>{props.children}</Text>
	</a>
);

export default Button;
