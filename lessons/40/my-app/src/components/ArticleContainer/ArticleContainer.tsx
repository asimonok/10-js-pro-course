import React, { FC, useState, useEffect } from 'react';
import './ArticleContainer.css';
import ArticleCard from '../ArticleCard';
import { Article } from 'types/Article';
import { Author } from 'types/Author';

interface IProps {
  displayLimit: number;
}

const ArticleContainer: FC<IProps> = (props) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const { displayLimit } = props;

  const getArticles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response): Promise<Article[]> => {
        return response.json();
      })
      .then((data) => setArticles(data))
      .catch((e) => console.error(e));
  };

  const getAuthors = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response): Promise<Author[]> => {
        return response.json();
      })
      .then((data) => setAuthors(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getArticles();
    getAuthors();
  }, []);

  return (
    <div className="article-card__list">
      {articles.slice(0, displayLimit).map((article) => {
        return (
          <ArticleCard article={article} authors={authors} key={article.id} />
        );
      })}
    </div>
  );
};

export default ArticleContainer;
