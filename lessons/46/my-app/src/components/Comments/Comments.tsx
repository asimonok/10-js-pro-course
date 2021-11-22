import React from "react";
import CommentItem from "Common/CommentItem";
import styles from "./Comments.module.css";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const cx = classNames.bind(styles);

type CommentProps = {
  comment: CommentItem;
};

const Comments: React.FC<CommentProps> = (props) => {
  const { comment } = props;
  const newTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={cx("comments", { dark: newTheme === "dark" })}>
      <h3 className={styles.title}>{comment.name}</h3>
      <div className={styles.text}>{comment.body}</div>
    </div>
  );
};

export default Comments;
