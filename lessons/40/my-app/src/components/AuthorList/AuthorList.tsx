import React, { FC, useState, useEffect, useContext } from 'react';
import styles from './AuthorList.module.css';
import { Author } from 'types/Author';
import Preloader from 'components/Preloader';
import { THEMES } from 'constants/THEMES';
import { ThemeContext } from '../ThemeContext';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const AuthorList: FC<{}> = (props) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isAuthorsLoaded, setIsAuthorsLoaded] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response): Promise<Author[]> => {
        return response.json();
      })
      .then((data) => {
        setAuthors(data);
        setIsAuthorsLoaded(true);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {!isAuthorsLoaded ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
};

export default AuthorList;
