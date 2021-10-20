import React, { useEffect, useState, useCallback, useContext } from "react";
import styles from "./PostCardContainer.module.css";
import PostCard from "../PostCard";
import BeatLoader from "react-spinners/BeatLoader";
import { ThemeContext } from "../ThemeContext";
import classNames from "classnames/bind";

interface Post {
  id: any;
  title: string;
  body: string;
  userId: any;
}

const cx = classNames.bind(styles);

const PostCardContainer = () => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [postsLimit, setPostsLimit] = useState(5);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    const postsPromise = fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());
    const authorsPromise = fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());

    Promise.all([postsPromise, authorsPromise])
      .then(([posts, authors]) => {
        setPosts(posts);
        setAuthors(authors);
      })
      .catch((error) => console.error(error));
  }, []);

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
              content={post.body}
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
