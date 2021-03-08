import {FC} from 'react';
import styles from './heading.module.scss';

type HeadingSize = 1 | 2 | 3;
type HeadingElement = `h${HeadingSize}` | 'p';

export interface Props {
	size: HeadingSize;
	as?: HeadingElement;
}

const Heading: FC<Props> = props => {
	const className = `h${props.size}` as const;
	const Element = props.as ?? className;

	return <Element className={`${styles.heading} ${styles[className]}`}>{props.children}</Element>;
};

export default Heading;
