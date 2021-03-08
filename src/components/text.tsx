import {FC} from 'react';
import styles from './text.module.scss';

type HeadingSize = 1 | 2 | 3;
type HeadingElement = `h${HeadingSize}` | 'p';

export interface Props {
	kind: HeadingElement;
	as?: HeadingElement;
}

const Text: FC<Props> = props => {
	const Element = props.as ?? props.kind;

	return <Element className={styles[props.kind]}>{props.children}</Element>;
};

export default Text;
