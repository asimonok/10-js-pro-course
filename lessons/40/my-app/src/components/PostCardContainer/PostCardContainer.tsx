import React, { useEffect, useState, useCallback } from "react";
import styles from "./PostCardContainer.module.css";
import PostCard from "../PostCard";
import BeatLoader from "react-spinners/BeatLoader";

interface Post {
  id: any;
  title: string;
  body: string;
  userId: any;
}

const PostCardContainer = () => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [postsLimit, setPostsLimit] = useState(5);

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
        {posts
          .map((post: Post) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.body}
                {...authors[post.userId - 1]}
              />
            );
          })
          .slice(0, postsLimit)}
      </div>
      <button className={styles.button} onClick={setNewPostsLimits}>
        Show more
      </button>
    </div>
  );
};

export default PostCardContainer;
