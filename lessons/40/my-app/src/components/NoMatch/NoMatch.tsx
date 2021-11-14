import React, { FC } from 'react';
import styles from './NoMatch.module.css';
import { Link } from 'react-router-dom';

const NoMatch: FC = () => {
  return (
    <div>
      <h2 className={styles.pageTitle}>Post not found...</h2>
      <Link to="/posts" className={styles.link}>
        Back to post list
      </Link>
    </div>
  );
};

export default NoMatch;
