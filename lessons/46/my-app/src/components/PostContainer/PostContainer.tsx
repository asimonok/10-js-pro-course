import React from "react";
import styles from "./PostContainer.module.css";
import Post from "components/Post";
import PostItem from "Common/PostItem";
import UserInfoItem from "Common/UserInfoItem";

interface AmountPostsProps {
  postsAmount: number;
  posts: PostItem[];
  users: UserInfoItem[];
}

const PostsContainer: React.FC<AmountPostsProps> = (props) => {
  const { postsAmount, posts, users } = props;

  const visiblePostItems = (): PostItem[] => {
    if (!posts) {
      return [];
    }
    return posts.slice(0, postsAmount);
  };

  return (
    <div className={styles.post}>
      {visiblePostItems().map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            user={
              users.filter((user) =>
                user.id === post.userId ? user.name : ""
              )[0]
            }
          />
        );
      })}
    </div>
  );
};

export default PostsContainer;
