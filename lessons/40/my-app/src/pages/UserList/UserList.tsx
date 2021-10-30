import React, { FC } from 'react';
import styles from './UserList.module.css';
import { User } from 'types/User';

interface IProps {
  users: User[];
}

const UserList: FC<IProps> = (props) => {
  const { users } = props;

  return (
    <>
      <div className={styles.userList}>
        {users.map((user) => {
          return (
            <div className={styles.userName} key={user.id}>
              {user.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
