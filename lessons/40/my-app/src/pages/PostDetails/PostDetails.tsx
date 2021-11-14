import React, { FC } from 'react';
import styles from './PostDetails.module.css';
import { Post } from 'types/Post';
import { Link, generatePath, useParams } from 'react-router-dom';
import { RoutePath } from 'constants/RoutePath';
import NoMatch from '../../components/NoMatch';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

const PostDetails: FC = () => {
  const params = useParams<{ postId: string }>();

  const posts = useSelector((state: RootState) => {
    if (state.data.Posts !== undefined) {
      return state.data.Posts.value;
    }
    return [];
  });

  const post = posts.find((post: Post) => {
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
