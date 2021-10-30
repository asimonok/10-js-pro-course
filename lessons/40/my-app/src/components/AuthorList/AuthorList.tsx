import React, { FC } from 'react';
import styles from './AuthorList.module.css';
import { Author } from 'types/Author';

interface IProps {
  authors: Author[];
}

const AuthorList: FC<IProps> = (props) => {
  const { authors } = props;

  return (
    <>
      <div className={styles.authorList}>
        {authors.map((author) => {
          return (
            <div className={styles.authorName} key={author.id}>
              {author.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AuthorList;
