import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  AuthorIdContext,
  LoadedContext,
  ThemeContext,
  VarContext,
} from "../../myContext";
import { Author } from "../../types";
import "./Row.css";

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
  const [theme, setTheme] = useContext(ThemeContext);
  const [loading, setLoading] = useContext(LoadedContext);
  const [authorId, setAuthorId] = useContext(AuthorIdContext);

  const loadFunction = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res): Promise<Users[]> => {
          return res.json();
        })
        .then((userList) => {
          return setUsers(userList);
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

  // const buttonHandler = useCallback((el) => {
  //   props.setActive(true);
  //   if (el.id === undefined) {
  //     setAuthorId(1);
  //   }
  //   setAuthorId((prevValue) => (prevValue = el.userId));
  // }, []);

  return (
    <>
      <ul className={theme === "dark" ? "usersList__dark" : "usersList__light"}>
        {filteredUsers.map((el) => {
          return (
            <li
              className={theme === "dark" ? "card__dark" : "card__light"}
              key={el.id}
            >
              <h2
                className={
                  theme === "dark" ? "card__title__dark" : "card__title__light"
                }
              >
                {el.title}
              </h2>
              <p
                className={
                  theme === "dark" ? "card__body__dark" : "card__body__light"
                }
              >
                {el.body}
              </p>
              <p
                className={
                  theme === "dark"
                    ? "card__author__dark"
                    : "card__author__light"
                }
              >
                Author:{" "}
                <button
                  className="card__button"
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
};

export default Row;
