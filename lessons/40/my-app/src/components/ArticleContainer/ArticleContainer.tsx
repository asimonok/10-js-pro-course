import React, { FC } from 'react';
import styles from './ArticleContainer.module.css';
import ArticleCard from '../ArticleCard';
import { Article } from 'types/Article';
import { Author } from 'types/Author';

interface IProps {
  displayLimit: number;
  articles: Article[];
  authors: Author[];
}

const ArticleContainer: FC<IProps> = (props) => {
  const { displayLimit, articles, authors } = props;

  return (
    <>
      <div className={styles.articleCardList}>
        {articles.slice(0, displayLimit).map((article) => {
          return (
            <ArticleCard article={article} authors={authors} key={article.id} />
          );
        })}
      </div>
    </>
  );
};

export default ArticleContainer;
