import React, { FC, useEffect } from 'react';
import styles from './UserList.module.css';
import { User } from 'types/User';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';
import Preloader from 'components/Preloader';
import { makeFetch, DataType } from 'redux/actions/dataActions';

const UserList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      makeFetch(
        DataType.Users,
        fetch('https://jsonplaceholder.typicode.com/users/')
      )
    );
  }, [dispatch]);

  const users: User[] = useSelector((state: RootState) => {
    if (state.data.Users !== undefined) {
      return state.data.Users.value;
    }
    return [];
  });

  return (
    <>
      <div className={styles.userList}>
        {!users ? (
          <Preloader />
        ) : (
          users.map((user) => {
            return (
              <div className={styles.userName} key={user.id}>
                {user.name}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default UserList;
