import React from "react";
import { useParams } from "react-router";
import { Comments } from "../../types";
import styles from "./Comments.module.css";

interface Props {
  comments: Comments[];
}

const Comment: React.FC<Props> = (props) => {
  let params = useParams<{ postId: string }>();
  const comment = props.comments.find((comment) => {
    return comment.id === parseInt(params.postId);
  });
  return (
    <div className={styles.comment}>
      <h2>Comment</h2>
      <p>Name: {comment?.name}</p>
      <p>Email: {comment?.email}</p>
      <p className={styles.commentBody}>{comment?.body}</p>
    </div>
  );
};

export default Comment;
