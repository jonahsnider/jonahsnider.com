import {FC} from 'react';
import styles from './container.module.scss';

const Container: FC = props => <section className={styles.container}>{props.children}</section>;

export default Container;
