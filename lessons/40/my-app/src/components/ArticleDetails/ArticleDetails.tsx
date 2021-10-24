import React, { FC } from 'react';
import styles from './ArticleDetails.module.css';
import { Article } from 'types/Article';
import { useParams } from 'react-router';

interface IProps {
  articles: Article[];
}

const ArticleDetails: FC<IProps> = (props) => {
  const { articles } = props;
  const { postId } = useParams<{ postId: string }>();

  const article = articles.find((article) => {
    return article.id === parseInt(postId);
  });

  return (
    <div className={styles.article}>
      <h2 className={styles.pageTitle}>Post details</h2>
      <div>
        <h3 className={styles.articleTitle}>{article && article.title}</h3>
        <p className={styles.articleBody}>{article && article.body}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
