import React, { useState, useEffect } from 'react';
import './ArticleContainer.css';
import ArticleCard from '../ArticleCard';
import { Article } from 'types/Article';

interface IProps {
  displayLimit: number;
}

const ArticleContainer: React.FC<IProps> = (props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response): Promise<Article[]> => {
        return response.json();
      })
      .then((data) => setArticles(data))
      .catch((e) => console.error(e));
  }, []);

  const { displayLimit } = props;

  return (
    <div className="article-card__list">
      {articles
        .map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })
        .slice(0, displayLimit)}
    </div>
  );
};

export default ArticleContainer;
