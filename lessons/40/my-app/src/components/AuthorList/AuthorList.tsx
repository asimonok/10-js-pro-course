import React, { FC, useContext } from 'react';
import styles from './AuthorList.module.css';
import { Author } from 'types/Author';
import { THEMES } from 'constants/THEMES';
import { ThemeContext } from '../ThemeContext';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  authors: Author[];
}

const AuthorList: FC<IProps> = (props) => {
  const { authors } = props;
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <div className={styles.authorList}>
        {authors.map((author) => {
          return (
            <div
              className={cx({
                authorName: true,
                light: theme === THEMES.DARK,
              })}
              key={author.id}
            >
              {author.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AuthorList;
