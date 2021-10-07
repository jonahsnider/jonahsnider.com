import {FC} from 'react';
import styles from './button.module.scss';
import Text from './text';

interface Props {
	href?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Button: FC<Props> = props => (
	<a href={props.href} className={styles.button}>
		<Text kind='p'>{props.children}</Text>
	</a>
);

export default Button;
