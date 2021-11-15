import React, { useEffect, useState, useCallback, useContext } from "react";
import styles from "./PostCardContainer.module.css";
import PostCard from "../PostCard";
import BeatLoader from "react-spinners/BeatLoader";
import { ThemeContext } from "../ThemeContext";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setAuthors } from "store/reducers/posts";
import { State as RootState } from "store";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const cx = classNames.bind(styles);

const PostCardContainer = () => {
  const [postsLimit, setPostsLimit] = useState(5);
  const [theme] = useContext(ThemeContext);
  const authors = useSelector((state: RootState) => state.posts.authors);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const postsPromise = fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());
    const authorsPromise = fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());

    Promise.all([postsPromise, authorsPromise])
      .then(([posts, authors]) => {
        dispatch(setPosts(posts));
        dispatch(setAuthors(authors));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  const setNewPostsLimits = useCallback(() => {
    setPostsLimit(postsLimit + 5);
  }, [postsLimit, setPostsLimit]);

  if (posts.length === 0 || authors.length === 0) {
    return <BeatLoader />;
  }

  return (
    <div className={styles.component}>
      <div className={styles.row}>
        {posts.slice(0, postsLimit).map((post: Post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              {...authors[post.userId - 1]}
            />
          );
        })}
      </div>
      <button
        className={cx({
          button: true,
          light: theme === "light",
          dark: theme === "dark",
        })}
        onClick={setNewPostsLimits}
      >
        Show more
      </button>
    </div>
  );
};

export default PostCardContainer;
