import React, { FC, useState, useCallback } from 'react';
import styles from './PostContainer.module.css';
import PostCard from '../../components/PostCard';
import { Post } from 'types/Post';
import { User } from 'types/User';
import Button from '../../components/Button';
import { useLocation, useHistory } from 'react-router-dom';

interface IProps {
  posts: Post[];
  users: User[];
}

const PostContainer: FC<IProps> = (props) => {
  const { posts, users } = props;
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
      <div className={styles.postCardList}>
        {posts.slice(0, displayLimit).map((post) => {
          return <PostCard post={post} users={users} key={post.id} />;
        })}
      </div>
      <Button text="Show more" onClick={onShowMore} />
    </>
  );
};

export default PostContainer;
