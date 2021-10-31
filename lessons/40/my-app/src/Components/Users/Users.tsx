import React from "react";
import { UsersT } from "../../types";
import styles from "./Users.module.css";

interface Props {
  author: UsersT[];
}

const Users: React.FC<Props> = (props) => {
  return (
    <>
      <h1 className={styles.users}>Users</h1>
      <ul className={styles.usersLists}>
        {props.author.map((el) => {
          return (
            <li className={styles.usersList} key={el.id}>
              <h2>Name: {el.name}</h2>
              <p className={styles.usersParag}>Email: {el.email}</p>
              <p className={styles.usersParag}>
                Adress: {el.address.city} {el.address.street} {el.address.suite}
              </p>
              <p className={styles.usersParag}>Phone: {el.phone}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
