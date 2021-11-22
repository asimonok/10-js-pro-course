import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  isActive?: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { isActive } = props;
  return (
    <div className={styles.loader}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Loader;
