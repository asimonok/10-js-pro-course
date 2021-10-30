import React, { useEffect, useState } from "react";
import styles from "./UsersContainer.module.css";
import User from "../User";

interface Props {
  id: any;
  userId: any;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UsersContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.component}>
      <div className={styles.row}>
        {users.map((user: Props) => {
          return (
            <User
              key={user.id}
              {...users[user.userId - 1]}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersContainer;
