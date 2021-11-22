import React, { useState, useCallback } from "react";
import styles from "./Post.module.css";
import PostItem from "Common/PostItem";
import UserInfoItem from "Common/UserInfoItem";
import classNames from "classnames/bind";
import Modal from "../Modal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

interface PostProps {
  post: PostItem;
  user: UserInfoItem;
}

const cx = classNames.bind(styles);

const Post: React.FC<PostProps> = (props) => {
  const { post, user } = props;
  const newTheme = useSelector((state: RootState) => state.theme.theme);

  const [isModal, setIsModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModal(isModal === false ? true : false);
  }, [isModal, setIsModal]);

  return (
    <>
      <div className={cx("item", { dark: newTheme === "dark" })}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.body}>{post.body}</p>
        <div className={styles.details}>
          <NavLink to={`/posts/${post.id}`}>Know more...</NavLink>
        </div>
        <div className={cx("author", { darkUserInfo: newTheme === "dark" })}>
          <span className={cx("body", { darkUserInfo: newTheme === "dark" })}>
            Author:{" "}
          </span>
          <span
            className={cx("authorinfo", { darkUser: newTheme === "dark" })}
            onClick={onCloseModal}
          >
            {user?.name}
          </span>
        </div>
      </div>
      {user && (
        <Modal
          isVisible={isModal}
          title={user.name}
          children={
            <>
              <div className={styles.address}>
                Address: {user.address.city} , {user.address.street},
                {user.address.suite}
              </div>
              <div className={styles.contacts}>
                {user.email} {user.phone}
              </div>{" "}
            </>
          }
          onCloseModal={onCloseModal}
          key={user.id}
        />
      )}
    </>
  );
};

export default Post;
