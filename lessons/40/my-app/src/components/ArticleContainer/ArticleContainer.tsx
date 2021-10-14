import React, { useState, useEffect } from 'react';
import './ArticleContainer.css';
import ArticleCard from '../ArticleCard';
import { Article } from 'types/Article';
import { Author } from 'types/Author';

interface IProps {
  displayLimit: number;
}

const ArticleContainer: React.FC<IProps> = (props) => {
  const [article, setArticle] = useState<Article[]>([]);
  const [author, setAuthor] = useState<Author[]>([]);

  const fetchArticle = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response): Promise<Article[]> => {
        return response.json();
      })
      .then((data) => setArticle(data))
      .catch((e) => console.error(e));
  };

  const fetchAuthor = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response): Promise<Author[]> => {
        return response.json();
      })
      .then((data) => setAuthor(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchArticle();
    fetchAuthor();
  }, []);

  /*  const showAuthor = () => {
    if (article.userId == author.id) {

    }
  } */

  const { displayLimit } = props;

  return (
    <div className="article-card__list">
      {article
        .map((article) => {
          return (
            <ArticleCard
              article={article}
              /* author={author} */ key={article.id}
            />
          );
        })
        .slice(0, displayLimit)}
    </div>
  );
};

export default ArticleContainer;
