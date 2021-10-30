import React, { FC, useState, useCallback } from 'react';
import styles from './ArticleContainer.module.css';
import ArticleCard from '../ArticleCard';
import { Article } from 'types/Article';
import { Author } from 'types/Author';
import Button from '../Button';
import { useLocation, useHistory } from 'react-router-dom';

interface IProps {
  articles: Article[];
  authors: Author[];
}

const ArticleContainer: FC<IProps> = (props) => {
  const { articles, authors } = props;
  const [displayLimit, setDisplayLimit] = useState(5);
  const location = useLocation();
  const history = useHistory();

  const onShowMore = useCallback(() => {
    /* const query = new URLSearchParams(location.search);
    const totalPosts = query.get('totalPosts') || '5';
    const newTotalPosts = parseInt(totalPosts, 10) + 5;
    query.set('totalPosts', newTotalPosts.toString());

    history.replace(`${location.pathname}?${query.toString()}`); */
    setDisplayLimit(displayLimit + 5);
  }, [
    displayLimit,
    setDisplayLimit,
    /* history,
    location.pathname,
    location.search, */
  ]);

  return (
    <>
      <div className={styles.articleCardList}>
        {articles.slice(0, displayLimit).map((article) => {
          return (
            <ArticleCard article={article} authors={authors} key={article.id} />
          );
        })}
      </div>
      <Button text="Show more" onClick={onShowMore} />
    </>
  );
};

export default ArticleContainer;
