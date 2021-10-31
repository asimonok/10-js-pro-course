import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  AuthorIdContext,
  LoadedContext,
  ThemeContext,
  VarContext,
} from "../../myContext";
import { Author } from "../../types";
import styles from "./Row.module.css";
import logo from "./yy3.gif";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  author: Author[];
}
interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Row: React.FC<Props> = (props) => {
  const userList: Users[] = [];
  const [users, setUsers] = useState(userList);
  const [value, setValue] = useContext(VarContext);
  const [theme] = useContext(ThemeContext);
  const [loaded, setLoaded] = useContext(LoadedContext);
  const [authorId, setAuthorId] = useContext(AuthorIdContext);

  const loadFunction = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res): Promise<Users[]> => {
          return res.json();
        })
        .then((userList) => {
          return setUsers(userList), setLoaded(() => true);
        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setValue(5); // change list number to 5 when loaded
    loadFunction();
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.id <= value;
  });

  const findAuthorName = props.author.map((author) => {
    return author.name;
  });

  if (loaded === true) {
    return (
      <>
        <ul
          // className={theme === "dark" ? "usersList__dark" : "usersList__light"}
          className={cx({
            list: true,
            usersList__dark: !!theme,
          })}
        >
          {filteredUsers.map((el) => {
            return (
              <li
                // className={theme === "dark" ? "card__dark" : "card__light"}
                className={cx({
                  card: true,
                  card__dark: theme,
                })}
                key={el.id}
              >
                <h2
                  // className={
                  //   theme === "dark"
                  //     ? "card__title__dark"
                  //     : "card__title__light"
                  // }
                  className={cx({
                    card__title: true,
                    card__title__dark: theme,
                  })}
                >
                  {el.title}
                </h2>
                <p
                  // className={
                  //   theme === "dark" ? "card__body__dark" : "card__body__light"
                  // }
                  className={cx({
                    card__body: true,
                    card__body__dark: theme,
                  })}
                >
                  {el.body}
                </p>
                <p
                  // className={
                  //   theme === "dark"
                  //     ? "card__author__dark"
                  //     : "card__author__light"
                  // }
                  className={cx({
                    card__author: true,
                    card__author__dark: theme,
                  })}
                >
                  Author:{" "}
                  <button
                    // className="card__button"
                    className={styles.card__button}
                    onClick={() => {
                      props.setActive(true);
                      setAuthorId(() => el.userId);
                    }}
                  >
                    {findAuthorName[el.userId - 1]}
                    {theme}
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return (
      <div className="loading">
        <img
          // src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
          // src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif"
          src={logo}
          alt="loading..."
        />
      </div>
    );
  }
};

export default Row;
