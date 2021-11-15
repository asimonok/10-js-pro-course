import React, { useEffect } from "react";
import styles from "./AuthorsContainer.module.css";
import Author from "../Author";
import { useDispatch, useSelector } from "react-redux";
import { setAuthors } from "store/reducers/posts";
import { State as RootState } from "store";

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

const AuthorsContainer = () => {
  const authors = useSelector((state: RootState) => state.posts.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })

      .then((authors) => {
        dispatch(setAuthors(authors));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div className={styles.component}>
      <div className={styles.row}>
        {authors.map((user: Props) => {
          return (
            <Author
              key={user.id}
              {...authors[user.userId - 1]}
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

export default AuthorsContainer;
