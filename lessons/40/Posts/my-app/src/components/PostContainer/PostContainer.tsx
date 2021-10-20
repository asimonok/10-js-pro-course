import React, { useState, useEffect } from "react";
import styles from "./PostContainer.module.css";
import PostItem from "Common/PostItem";
import UserInfoItem from "Common/UserInfoItem";
import Post from "components/Post";

interface AmountPostsProps {
  postsAmount: number;
}

const PostsContainer: React.FC<AmountPostsProps> = (props) => {
  const { postsAmount } = props;
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [users, setUsers] = useState<UserInfoItem[]>([]);
  const [isPostsLoaded, setIsPostsLoaded] = useState(false);
  const [isUsersLoaded, setIsUsersLoaded] = useState(false);

  const visiblePostItems = (): PostItem[] => {
    if (!posts) {
      return [];
    }
    return posts.slice(0, postsAmount);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((posts: PostItem[]) => {
        setPosts(posts);
        setIsPostsLoaded(true);
      });

    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((users: UserInfoItem[]) => {
        setUsers(users);
        setIsUsersLoaded(true);
      });
  }, []);

  return (
    <div className={styles.post}>
      {visiblePostItems().map((post) => (
        <Post
          key={post.userId}
          post={post}
          user={
            users.filter((user) =>
              user.id === post.userId ? user.name : ""
            )[0]
          }
        />
      ))}
    </div>
  );
};

export default PostsContainer;
