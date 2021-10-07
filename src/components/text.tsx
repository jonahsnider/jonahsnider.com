import clsx from 'clsx';
import {FC} from 'react';
import styles from './text.module.scss';

type HeadingSize = 1 | 2 | 3;
type HeadingElement = `h${HeadingSize}` | 'p';

export interface Props {
	kind: HeadingElement;
	as?: HeadingElement;
	animation?: 'underline' | 'fade';
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Text: FC<Props> = props => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const Element = props.as ?? props.kind;

	return (
		<Element
			className={clsx(styles[props.kind], {
				[styles.underline]: props.animation === 'underline',
				[styles.fade]: props.animation === 'fade',
			})}
		>
			{props.children}
		</Element>
	);
};

export default Text;
