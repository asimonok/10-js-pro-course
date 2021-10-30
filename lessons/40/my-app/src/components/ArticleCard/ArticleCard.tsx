import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import styles from './ArticleCard.module.css';
import { Article } from 'types/Article';
import { Author } from 'types/Author';
import Modal from '../Modal';
import AuthorInfo from '../AuthorInfo';
import { ThemeContext } from '../ThemeContext';
import { THEMES } from 'constants/THEMES';
import classNames from 'classnames/bind';
import { Link, generatePath } from 'react-router-dom';
//import queryString from "query-string";

let cx = classNames.bind(styles);

interface IProps {
  article: Article;
  authors: Author[];
}

enum RoutePath {
  postDetails = '/posts/:postId',
}

const ArticleCard: FC<IProps> = (props) => {
  const { article, authors } = props;
  const [modal, setModal] = useState(false);
  const [theme] = useContext(ThemeContext);
  const [author, setAuthor] = useState<Author>();

  const toggleModal = useCallback(() => {
    setModal(modal === false ? true : false);
  }, [modal, setModal]);

  useEffect(() => {
    setAuthor(
      authors.find((author) => {
        return author.id === article.userId;
      })
    );
  }, [authors, article]);

  return (
    <div className={styles.article}>
      <div className={styles.articleContent}>
        <h3>{article.title}</h3>
        <p className={styles.articleText}>{article.body}</p>
      </div>
      <div
        className={cx({
          articleInfo: true,
          articleInfoDark: theme === THEMES.DARK,
        })}
      >
        <div className={styles.articleAuthor}>
          <span
            className={cx({
              author: true,
              authorDark: theme === THEMES.DARK,
            })}
          >
            Autor:{' '}
          </span>
          <span className={styles.authorName} onClick={toggleModal}>
            {author?.name}
          </span>
        </div>
        <Link
          to={generatePath(RoutePath.postDetails, {
            postId: article.id,
          })}
          className={styles.link}
        >
          Post details
        </Link>
      </div>
      {author && (
        <Modal isOpened={modal} onModalClose={toggleModal} key={author?.id}>
          <AuthorInfo author={author} />
        </Modal>
      )}
    </div>
  );
};

export default ArticleCard;
