import React, { useState, useEffect, useContext } from "react";
import { LoadingContext, ThemeContext, VarContext } from "../../myContext";
import "./Row.css";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface AuthorType {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    suite: string;
  };
}

const Row: React.FC<Props> = (props) => {
  const userList: Users[] = [];
  const [users, setUsers] = useState(userList);
  const authorList: AuthorType[] = [];
  const [author, setAuthor] = useState(authorList);
  const [value, setValue] = useContext(VarContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [loading, setLoading] = useContext(LoadingContext);

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
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res): Promise<AuthorType[]> => {
          return res.json();
        })
        .then((authorList) => {
          return setAuthor(authorList), setLoading(() => true);
        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setValue(5); // change list number to 5 when loaded
    loadFunction();
  }, [setTheme]);

  const filteredUsers = users.filter((user) => {
    return user.id <= value;
  });

  const findAuthorName = author.map((author) => {
    return author.name;
  });

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
                  onClick={() => props.setActive(true)}
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
