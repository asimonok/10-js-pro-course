import React, { useState, useEffect, useContext } from 'react';
import './ArticleCard.css';
import { Article } from 'types/Article';
import { Author } from 'types/Author';
import Modal from '../Modal';
import { ThemeContext } from '../ThemeContext/ThemeContext';

interface IProps {
  article: Article;
}

const ArticleCard: React.FC<IProps> = (props) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [modal, setModal] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response): Promise<Author[]> => {
        return response.json();
      })
      .then((data) => setAuthors(data))
      .catch((e) => console.error(e));
  }, []);

  const { article } = props;

  const author = authors.filter((author) => {
    return author.id === article.userId;
  });

  return (
    <>
      <div className={`article-card ${theme === 'light' ? `light` : `dark`}`}>
        <div className="article-card__content">
          <h3 className="subtitle article-card__subtitle">{article.title}</h3>
          <p className="article-text">{article.body}</p>
        </div>
        <div
          className={`article-card__author ${
            theme === 'light' ? `light` : `dark`
          }`}
        >
          <span>Autor: </span>
          <span className="author-name" onClick={() => setModal(true)}>
            {author.map((author) => {
              return author.name;
            })}
          </span>
        </div>
      </div>
      {author.map((author) => {
        return (
          <Modal
            author={author}
            isOpened={modal}
            onModalClose={() => setModal(false)}
            key={author.id}
          />
        );
      })}
    </>
  );
};

export default ArticleCard;
