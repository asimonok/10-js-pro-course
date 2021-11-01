import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useParams, useHistory } from "react-router-dom";
import styles from "./PostDetails.module.css";
import classNames from "classnames/bind";
import Comment from "../Comment";

interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

interface CommentUser {
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}

const cx = classNames.bind(styles);

const PostDetails: React.FC<{}> = (props) => {
  const [theme] = useContext(ThemeContext);
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<CommentUser[]>();
  const params = useParams<{ postId: string }>();
  const history = useHistory();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(
        (response): Promise<Post> => response.json()
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
      ).then((response): Promise<CommentUser[]> => response.json()),
    ])
      .then(([post, comments]) => {
        setPost(post);
        setComments(comments);
      })
      .catch(() => {
        history.replace("/posts");
      });
  }, [params.postId, history]);

  return (
    <div
      className={cx({
        component: true,
        light: theme === "light",
        dark: theme === "dark",
      })}
    >
      <h1>Post details (postId: {params.postId})</h1>
      <div>
        <h2 className={styles.title}>{post?.title}</h2>
        <p className={styles.text}>{post?.body}</p>
      </div>
      <div>
        <h2 className={styles.title}>Comments</h2>
        {comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
