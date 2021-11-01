import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";
import classNames from "classnames/bind";
import NotFound from "../NotFound";

interface Props {
  posts: Post[];
  comments: Comment[];
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const cx = classNames.bind(styles);

const PostDetails: React.FC<Props> = (props) => {
  const [theme] = useContext(ThemeContext);
  const params = useParams<{ postId: string }>();

  const post = props.posts.find((post) => {
    return post.id === parseInt(params.postId);
  });

  const comment = props.comments.find((comment) => {
    return comment.id === parseInt(params.postId);
  });
  if (post && comment) {
    return (
      <div
        className={cx({
          component: true,
          light: theme === "light",
          dark: theme === "dark",
        })}
      >
        <h1>Post details {params.postId}</h1>
        <div>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.text}>{post.body}</p>
        </div>

        <div>
          <h2 className={styles.title}>Comment</h2>
          <p className={styles.text}>Name: {comment.name}</p>
          <p className={styles.text}>Email: {comment.email}</p>
          <p className={styles.text}>{comment.body}</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <NotFound />
    </>
  );
};
export default PostDetails;
