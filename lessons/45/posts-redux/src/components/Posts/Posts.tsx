import React, { useEffect } from "react";
import useTypedSelector from "../../hooks";
import { useActions } from "../../hooks/useActions";

const Posts = () => {
  const { posts, error, loading } = useTypedSelector((state) => state.posts);
  const { users } = useTypedSelector((state) => state.users);
  const { fetchPosts, fetchUsers } = useActions();
  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </>
  );
};

export default Posts;
