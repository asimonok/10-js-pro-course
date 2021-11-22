import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import PostItem from "Common/PostItem";
import UserInfoItem from "Common/UserInfoItem";
import PostContainer from "components/PostContainer";
import Button from "components/Button";
import Loader from "components/Loader";
import { RootState } from "store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, setPostsLimit } from "store/actions/postsAction";
import { fetchUsers } from "store/actions/usersAction";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading, limit } = useSelector(
    (state: RootState) => state.posts
  );
  const { users } = useSelector((state: RootState) => state.users);
  const [postsAmount, setPostsAmount] = useState(5);

  useEffect(() => {
    dispatch(fetchPosts(limit));
    dispatch(fetchUsers());
  }, [dispatch, limit]);

  useEffect(() => {
    dispatch(setPostsLimit(postsAmount));
  }, [dispatch, postsAmount]);

  const onShowMore = () => {
    setPostsAmount((prevState) => prevState + 5);
  };

  return (
    <div>
      {!loading ? (
        <div className={styles.posts}>
          <>
            <PostContainer
              postsAmount={postsAmount}
              posts={posts}
              users={users}
            />
            <Button text="Show more" onClick={onShowMore} size="medium" />
          </>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Posts;
