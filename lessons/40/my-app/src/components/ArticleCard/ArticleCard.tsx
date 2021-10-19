import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import styles from './ArticleCard.module.css';
import { Article } from 'types/Article';
import { Author } from 'types/Author';
import Modal from '../Modal';
import AuthorInfo from '../AuthorInfo';
import { ThemeContext } from '../ThemeContext';
import { THEMES } from 'constants/THEMES';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  article: Article;
  authors: Author[];
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
    <>
      <div
        className={cx({
          article: true,
          article_dark: theme === THEMES.DARK,
        })}
      >
        <div className={styles['article__content']}>
          <h3>{article.title}</h3>
          <p className={styles['article__text']}>{article.body}</p>
        </div>
        <div
          className={cx({
            article__author: true,
            article__author_dark: theme === THEMES.DARK,
          })}
        >
          <span>Autor: </span>
          <span className={styles['author-name']} onClick={toggleModal}>
            {author?.name}
          </span>
        </div>
      </div>
      {author && (
        <Modal isOpened={modal} onModalClose={toggleModal} key={author?.id}>
          <AuthorInfo author={author} />
        </Modal>
      )}
    </>
  );
};

export default ArticleCard;
