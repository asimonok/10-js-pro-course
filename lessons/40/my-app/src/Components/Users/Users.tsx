import React from "react";
import { Author } from "../../types";
import styles from "./Users.module.css";

interface Props {
  author: Author[];
}

const Users: React.FC<Props> = (props) => {
  return (
    <>
      <h1 className={styles.users}>Users</h1>
      <ul>
        {props.author.map((el) => {
          return (
            <li key={el.id}>
              <h2>Name: {el.name}</h2>
              <p>Email: {el.email}</p>
              <p>
                Adress: {el.address.city} {el.address.street} {el.address.suite}
              </p>
              <p>Phone: {el.phone}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
