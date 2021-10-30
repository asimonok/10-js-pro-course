import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import styles from './PostCard.module.css';
import { Post } from 'types/Post';
import { User } from 'types/User';
import Modal from '../Modal';
import UserInfo from '../UserInfo';
import { ThemeContext } from '../ThemeContext';
import { THEMES } from 'constants/THEMES';
import classNames from 'classnames/bind';
import { Link, generatePath } from 'react-router-dom';
import { RoutePath } from 'constants/RoutePath';

let cx = classNames.bind(styles);

interface IProps {
  post: Post;
  users: User[];
}

const PostCard: FC<IProps> = (props) => {
  const { post, users } = props;
  const [modal, setModal] = useState(false);
  const [theme] = useContext(ThemeContext);
  const [user, setuser] = useState<User>();

  const toggleModal = useCallback(() => {
    setModal(modal === false ? true : false);
  }, [modal, setModal]);

  useEffect(() => {
    setuser(
      users.find((user) => {
        return user.id === post.userId;
      })
    );
  }, [users, post]);

  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <h3>{post.title}</h3>
        <p className={styles.postText}>{post.body}</p>
      </div>
      <div
        className={cx({
          postInfo: true,
          postInfoDark: theme === THEMES.DARK,
        })}
      >
        <div className={styles.postuser}>
          <span
            className={cx({
              user: true,
              userDark: theme === THEMES.DARK,
            })}
          >
            Autor:{' '}
          </span>
          <span className={styles.userName} onClick={toggleModal}>
            {user?.name}
          </span>
        </div>
        <Link
          to={generatePath(RoutePath.postDetails, {
            postId: post.id,
          })}
          className={styles.link}
        >
          Post details
        </Link>
      </div>
      {user && (
        <Modal isOpened={modal} onModalClose={toggleModal} key={user?.id}>
          <UserInfo user={user} />
        </Modal>
      )}
    </div>
  );
};

export default PostCard;
