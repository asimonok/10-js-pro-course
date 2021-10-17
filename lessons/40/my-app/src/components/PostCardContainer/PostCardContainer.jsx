import React, { useEffect, useState } from "react";
import "./PostCardContainer.css";
import PostCard from "../PostCard";

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

  const setNewPostsLimits = () => {
    setPostsLimit((postsLimit) => postsLimit + 5);
  };

  // if(posts.length === 0 || authors.length === 0) {
  //   return(
  //     <Loading />
  //   );
  // };

  return (
    <div className="postcard-container_component">
      <div className="postcard-row">
        {posts
          .map((post) => {
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
      <button className="postcard-container_button" onClick={setNewPostsLimits}>
        Show more
      </button>
    </div>
  );
};

export default PostCardContainer;
