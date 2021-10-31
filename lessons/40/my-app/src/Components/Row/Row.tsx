import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthorIdContext, LoadedContext, ThemeContext, VarContext } from "../../myContext";
import { Posts, UsersT } from "../../types";
import styles from "./Row.module.css";
import logo from "./yy3.gif";
import classNames from "classnames/bind";
import { Link, generatePath } from "react-router-dom";

let cx = classNames.bind(styles);

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  author: UsersT[];
  posts: Posts[];
}

enum RoutePath {
  postDetails = "/posts/:postId",
}

const Row: React.FC<Props> = (props) => {
  // const userList: Users[] = [];
  // const [users, setUsers] = useState(userList);
  const [value, setValue] = useContext(VarContext);
  const [theme] = useContext(ThemeContext);
  const [loaded, setLoaded] = useContext(LoadedContext);
  const [authorId, setAuthorId] = useContext(AuthorIdContext);

  // const loadFunction = async () => {
  //   try {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res): Promise<Users[]> => {
  //         return res.json();
  //       })
  //       .then((userList) => {
  //         return setUsers(userList), setLoaded(() => true);
  //       })
  //       .catch((error) => console.log(error));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    setValue(5); // change list number to 5 when loaded
    // loadFunction();
  }, []);

  // const filteredUsers = users.filter((user) => {
  //   return user.id <= value;
  // });
  const filteredUsers = props.posts.filter((post) => {
    return post.id <= value;
  });

  const findAuthorName = props.author.map((author) => {
    return author.name;
  });

  // if (loaded === true) {
  return (
    <>
      <ul
        className={cx({
          list: true,
          usersList__dark: !!theme,
        })}
      >
        {filteredUsers.map((el) => {
          return (
            <li
              className={cx({
                card: true,
                card__dark: theme,
              })}
              key={el.id}
            >
              <h2
                className={cx({
                  card__title: true,
                  card__title__dark: theme,
                })}
              >
                {el.title}
              </h2>
              <p
                className={cx({
                  card__body: true,
                  card__body__dark: theme,
                })}
              >
                {el.body}
              </p>
              <p
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
              <Link
                to={generatePath(RoutePath.postDetails, {
                  postId: el.id,
                })}
              >
                Post Details
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
  //   } else {
  //     return (
  //       <div className="loading">
  //         <img
  //           // src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
  //           // src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif"
  //           src={logo}
  //           alt="loading..."
  //         />
  //       </div>
  // );
  // }
};

export default Row;
