import React, { FC, useState, useEffect } from 'react';
import styles from './ArticleDetails.module.css';
import { Article } from 'types/Article';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

interface IProps {
  articles: Article[];
}

const ArticleDetails: FC<IProps> = (props) => {
  const { articles } = props;

  const [article, setArticle] = useState<Article>();

  /* useEffect(() => {
    const foundArticle = articles.map((article) => {
      article.id = parseInt(postId);
    });
    //setArticle(foundArticle);
  }, [articles, postId]); */

  return (
    <div className={styles.article}>
      <h2 className={styles.pageTitle}>Post details</h2>
      <div>
        <h3 className={styles.articleTitle}>{article && article.title}</h3>
        <p className={styles.articleBody}>{article && article.body}</p>
      </div>
      <Link to="/posts/:postId/comments" className={styles.link}></Link>
    </div>
  );
};

export default ArticleDetails;
