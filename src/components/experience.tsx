import {FC} from 'react';
import Text from './text';
import styles from './experience.module.scss';

export interface Props {
	id: string;
	date: {start: string; end: string};
	title: string;
}

const Experience: FC<Props> = props => (
	<section id={props.id} className={styles.experience}>
		<Text kind='h3'>{props.title}</Text>
		<Text kind='p'>
			{props.date.start} - {props.date.end}
		</Text>
		<Text kind='p'>{props.children}</Text>
	</section>
);

export default Experience;
