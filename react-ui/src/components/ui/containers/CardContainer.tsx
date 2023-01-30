import styles from './Cardcontainer.module.scss';

const CardContainer = (props: any) => {
  return <div className={styles.container}>{props.children}</div>;
};

export { CardContainer };
