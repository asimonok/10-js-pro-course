import React, { FC, useState, useContext, useCallback } from 'react';
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
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

let cx = classNames.bind(styles);

interface IProps {
  post: Post;
}

const PostCard: FC<IProps> = (props) => {
  const { post } = props;
  const [modal, setModal] = useState(false);
  const [theme] = useContext(ThemeContext);

  const toggleModal = useCallback(() => {
    setModal(modal === false ? true : false);
  }, [modal, setModal]);

  const users: User[] = useSelector((state: RootState) => {
    if (state.data.Users !== undefined) {
      return state.data.Users.value;
    }
    return [];
  });

  const user =
    users &&
    users.find((user) => {
      return user.id === post.userId;
    });

  /* const mapUsers =
    users &&
    users.reduce(
      (acc, user) => ({
        ...acc,
        [user.id]: user,
      }),
      {}
    );
  console.log(mapUsers); */

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
        <div className={styles.postUser}>
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
