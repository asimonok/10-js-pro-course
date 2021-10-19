import React from "react";
import styles from "./PostCardButton.module.css";

interface Props {
  name: string;
  onClick: () => void;
}

const PostCardButton: React.FC<Props> = (props) => {
  return (
    <button className={styles.button}>
      Author: <span className={styles.bluetext}>{props.name}</span>
    </button>
  );
};

export default PostCardButton;
