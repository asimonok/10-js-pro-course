import React, { useEffect, useState } from "react";
import useTypedSelector from "../../hooks";
import { useActions } from "../../hooks/useActions";
import logo from "./yy3.gif";

const Posts = () => {
  //   const [postsNumber, setPostsnNumber] = useState(5);
  const { posts, error, loading, postsNumber } = useTypedSelector((state) => state.posts);
  const { users } = useTypedSelector((state) => state.users);
  const { theme } = useTypedSelector((state) => state.theme);
  const { fetchPosts, fetchUsers, increasePosts, changeTheme } = useActions();
  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);
  if (loading) {
    return <img src={logo} alt="loading..." />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const filteredPosts = posts.filter((post) => {
    return post.id <= postsNumber;
  });

  return (
    <>
      <ul>
        {filteredPosts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>
                Author:
                <button
                  onClick={() => {
                    console.log(postsNumber);
                  }}
                >
                  {users[post.userId - 1]?.name}
                </button>
              </p>
            </li>
          );
        })}
      </ul>
      <button onClick={() => increasePosts()}>show more</button>
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        {theme}
      </button>
    </>
  );
};

export default Posts;
