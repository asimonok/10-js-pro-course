import React, { FC, useCallback } from 'react';
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
  const location = useLocation();
  const history = useHistory();

  const onShowMore = useCallback(() => {
    const query = new URLSearchParams(location.search);
    const totalPosts = query.get('totalPosts') || '0';
    const newTotalPosts = parseInt(totalPosts, 10) + 5;
    query.set('totalPosts', newTotalPosts.toString());

    history.push(`${location.pathname}?${query.toString()}`);
  }, [history, location.pathname, location.search]);

  const displayLimit = location.search.split('=');
  console.log(displayLimit);

  return (
    <>
      <div className={styles.postCardList}>
        {posts.slice(0, parseInt(displayLimit[1])).map((post) => {
          return <PostCard post={post} users={users} key={post.id} />;
        })}
      </div>
      <Button text="Show more" onClick={onShowMore} />
    </>
  );
};

export default PostContainer;
