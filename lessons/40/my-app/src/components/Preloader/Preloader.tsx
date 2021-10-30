import React, { FC } from 'react';
import styles from './Preloader.module.css';

const Preloader: FC<{}> = (props) => {
  return <div className={styles.preloader}></div>;
};

export default Preloader;
