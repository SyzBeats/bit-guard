import styles from './IconCard.module.scss';

const IconCard = (props: any) => {
  const shadowClass = [styles.shadow];

  shadowClass.push(styles[props.color]);

  return (
    <div className={styles.container} onClick={props.clickHandler}>
      <div className={styles.card}>
        <div className={styles.icon}>{props.icon}</div>

        <div className={styles.content}>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>

      <div className={shadowClass.join(' ')} />
    </div>
  );
};

export { IconCard };
