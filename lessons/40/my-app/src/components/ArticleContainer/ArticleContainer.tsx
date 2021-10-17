import React, { FC, useState, useEffect } from 'react';
import './ArticleContainer.css';
import ArticleCard from '../ArticleCard';
import { Article } from 'types/Article';

interface IProps {
  displayLimit: number;
}

const ArticleContainer: FC<IProps> = (props) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { displayLimit } = props;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response): Promise<Article[]> => {
        return response.json();
      })
      .then((data) => setArticles(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="article-card__list">
      {articles.slice(0, displayLimit).map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleContainer;
