import React, { useState, useCallback } from "react";
import styles from "./Post.module.css";
import PostItem from "../../Common/PostItem";
import UserInfoItem from "../../Common/UserInfoItem";
import Modal from "components/Modal";

interface PostProps {
  post: PostItem;
  user: UserInfoItem;
}

const Post: React.FC<PostProps> = (props) => {
  const { post, user } = props;
  const [isModal, setIsModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModal(isModal === false ? true : false);
  }, [isModal, setIsModal]);

  return (
    <>
      <div className={styles.item}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.body}>{post.body}</p>
        <div className={styles.author}>
          <span className={styles.body}>Author: </span>
          <span className={styles.authorinfo} onClick={onCloseModal}>
            {user?.name}
          </span>
        </div>
      </div>
      {user && (
        <Modal
          isVisible={isModal}
          user={user}
          onCloseModal={onCloseModal}
          key={user.id}
        />
      )}
    </>
  );
};

export default Post;
