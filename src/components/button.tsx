import type {FC, PropsWithChildren} from 'react';
import styles from './button.module.scss';
import Text from './text';

type Props = {
	href?: string;
};

const Button: FC<PropsWithChildren<Props>> = props => (
	<a href={props.href} className={styles.button}>
		<Text kind='p'>{props.children}</Text>
	</a>
);

export default Button;
