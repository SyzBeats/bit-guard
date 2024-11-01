import React from 'react';

import styles from './Cardcontainer.module.scss';

interface Props {
  children: React.ReactNode;
}

const CardContainer = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export { CardContainer };
