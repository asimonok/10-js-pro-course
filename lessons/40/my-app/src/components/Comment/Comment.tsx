import React from "react";
import styles from "./Comment.module.css";

interface Props {
  comment: CommentUser;
}

interface CommentUser {
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}

const Comment: React.FC<Props> = (props) => {
  return (
    <div>
      <h2 className={styles.title}>{props.comment.name}</h2>
      <p className={styles.text}>{props.comment.body}</p>
      <p className={styles.text}>{props.comment.email}</p>
    </div>
  );
};

export default Comment;
