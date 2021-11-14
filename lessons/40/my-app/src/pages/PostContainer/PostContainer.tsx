import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './PostContainer.module.css';
import PostCard from '../../components/PostCard';
import { Post } from 'types/Post';
import Button from '../../components/Button';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';
import Preloader from 'components/Preloader';
import { makeFetch, DataType } from 'redux/actions/dataActions';

const PostContainer: FC = () => {
  const [displayLimit] = useState(5);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      makeFetch(
        DataType.Posts,
        fetch('https://jsonplaceholder.typicode.com/posts')
      )
    );
    dispatch(
      makeFetch(
        DataType.Users,
        fetch('https://jsonplaceholder.typicode.com/users')
      )
    );
  }, [dispatch]);

  const posts: Post[] = useSelector((state: RootState) => {
    if (state.data.Posts !== undefined) {
      return state.data.Posts.value;
    }
    return [];
  });

  const onShowMore = useCallback(() => {
    const query = new URLSearchParams(location.search);
    const totalPosts = query.get('totalPosts') || '5';
    const newTotalPosts = parseInt(totalPosts, 10) + 5;
    query.set('totalPosts', newTotalPosts.toString());
    history.push(`${location.pathname}?${query.toString()}`);
  }, [history, location.pathname, location.search]);

  const newDisplayLimit = location.search.split('=')[1];

  return (
    <>
      <div className={styles.postCardList}>
        {!posts ? (
          <Preloader />
        ) : (
          posts
            .slice(
              0,
              !newDisplayLimit ? displayLimit : parseInt(newDisplayLimit)
            )
            .map((post: Post) => {
              return <PostCard post={post} key={post.id} />;
            })
        )}
      </div>
      <Button text="Show more" onClick={onShowMore} />
    </>
  );
};

export default PostContainer;
