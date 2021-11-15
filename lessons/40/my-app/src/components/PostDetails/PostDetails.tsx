import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useParams, useHistory } from "react-router-dom";
import styles from "./PostDetails.module.css";
import classNames from "classnames/bind";
import Comment from "../Comment";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "store/reducers/posts";
import { State as RootState } from "store";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentUser {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type Params = {
  postId: string;
};

const cx = classNames.bind(styles);

const PostDetails: React.FC<{}> = () => {
  const [theme] = useContext(ThemeContext);
  const [post, setPost] = useState<Post>();
  const params = useParams<Params>();
  const comments = useSelector((state: RootState) => state.posts.comments);
  const history = useHistory();
  const dispatch = useDispatch();

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
        dispatch(setComments(comments));
      })
      .catch(() => {
        history.replace("/posts");
      });
  }, [params, history, dispatch]);

  return (
    <div
      className={cx({
        component: true,
        light: theme === "light",
        dark: theme === "dark",
      })}
    >
      <h1>Post details</h1>
      <div>
        <h2 className={styles.title}>{post?.title}</h2>
        <p className={styles.text}>{post?.body}</p>
      </div>
      <div>
        <h2 className={styles.title}>Comments</h2>
        {comments?.map((comment: CommentUser) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
