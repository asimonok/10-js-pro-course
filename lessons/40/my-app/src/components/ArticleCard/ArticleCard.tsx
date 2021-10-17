import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import './ArticleCard.css';
import { Article } from 'types/Article';
import { Author } from 'types/Author';
import Modal from '../Modal';
import { ThemeContext } from '../ThemeContext';
import { THEMES } from 'constants/THEMES';

interface IProps {
  article: Article;
}

const ArticleCard: FC<IProps> = (props) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [author, setAuthor] = useState<Author>();
  const [modal, setModal] = useState(false);
  const [theme] = useContext(ThemeContext);

  const { article } = props;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response): Promise<Author[]> => {
        return response.json();
      })
      .then((data) => setAuthors(data))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    setAuthor(
      authors.find((author) => {
        return author.id === article.userId;
      })
    );
  }, [authors, article]);

  const toggleModal = useCallback(() => {
    setModal(modal === false ? true : false);
  }, [modal, setModal]);

  return (
    <>
      <div
        className={`article-card ${
          theme === THEMES.LIGHT ? `` : `article-card--dark`
        }`}
      >
        <div className="article-card__content">
          <h3 className="subtitle article-card__subtitle">{article.title}</h3>
          <p className="article-text">{article.body}</p>
        </div>
        <div
          className={`article-card__author ${
            theme === THEMES.LIGHT ? `` : `article-card__author--dark`
          }`}
        >
          <span>Autor: </span>
          <span className="author-name" onClick={toggleModal}>
            {author?.name}
          </span>
        </div>
      </div>
      {author ? (
        <Modal
          author={author}
          isOpened={modal}
          onModalClose={toggleModal}
          key={author?.id}
        />
      ) : (
        []
      )}
    </>
  );
};

export default ArticleCard;
