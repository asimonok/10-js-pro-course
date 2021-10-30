import React, { FC } from 'react';
import styles from './PostDetails.module.css';
import { Post } from 'types/Post';
import { Link, generatePath, useParams } from 'react-router-dom';
import { RoutePath } from 'constants/RoutePath';
import NoMatch from '../../components/NoMatch';

interface IProps {
  posts: Post[];
}

const PostDetails: FC<IProps> = (props) => {
  const { posts } = props;
  const params = useParams<{ postId: string }>();

  const post = posts.find((post) => {
    return post.id === parseInt(params.postId);
  });

  return post ? (
    <div className={styles.post}>
      <h2 className={styles.pageTitle}>Post details</h2>
      <div>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
      </div>
      <Link
        to={generatePath(RoutePath.comments, {
          postId: post.id!,
        })}
        className={styles.link}
      >
        Comments
      </Link>
    </div>
  ) : (
    <NoMatch />
  );
};

export default PostDetails;
