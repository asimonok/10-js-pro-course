import React, { FC } from 'react';
import styles from './UserInfo.module.css';
import { User } from 'types/User';

interface IProps {
  user: User;
}

const UserInfo: FC<IProps> = (props) => {
  const { user } = props;

  return (
    <>
      <h2 className={styles.title}>{user?.name}</h2>
      <div className={styles.text}>
        <span className={styles.adress}>
          Adress: {user?.address?.city}, {user?.address?.street},{' '}
          {user.address.suite}
        </span>
        <span className={styles.email}>Email: {user?.email}</span>
        <span className={styles.phone}>Phone: {user?.phone}</span>
      </div>
    </>
  );
};

export default UserInfo;
