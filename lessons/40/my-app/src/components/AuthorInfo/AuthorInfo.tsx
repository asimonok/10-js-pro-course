import React, { FC } from 'react';
import styles from './AuthorInfo.module.css';
import { Author } from 'types/Author';

interface IProps {
  author: Author;
}

const AuthorInfo: FC<IProps> = (props) => {
  const { author } = props;

  return (
    <>
      <h2 className={styles.title}>{author?.name}</h2>
      <div className={styles.text}>
        <span className={styles.adress}>
          Adress: {author?.address?.city}, {author?.address?.street},{' '}
          {author.address.suite}
        </span>
        <span className={styles.email}>Email: {author?.email}</span>
        <span className={styles.phone}>Phone: {author?.phone}</span>
      </div>
    </>
  );
};

export default AuthorInfo;
