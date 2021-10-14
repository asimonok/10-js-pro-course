import React from 'react';
import './ArticleCard.css';
import { Article } from 'types/Article';
import { Author } from 'types/Author';

interface IProps {
  article: Article;
  //author: Author;
}

const ArticleCard: React.FC<IProps> = (props) => {
  const { article /* , author */ } = props;
  return (
    <div className="article-card">
      <div className="article-card__content">
        <h3 className="subtitle article-card__subtitle">{article.title}</h3>
        <p className="article-text">{article.body}</p>
      </div>
      <div className="article-card__author">
        <span>Autor: {/* {author.name} */}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
