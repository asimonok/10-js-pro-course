import React, { useContext, useEffect, useState } from "react";
import styles from "./app.module.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import ThemeButton from "./Components/ThemeButton";
import { AuthorIdProvider, ThemeContext, VarProvider } from "./myContext";
import { Author } from "./types";
import classNames from "classnames/bind";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

let cx = classNames.bind(styles);

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme] = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState<Author[]>([]);

  const loadFunction = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res): Promise<Author[]> => {
          return res.json();
        })
        .then((authorList) => {
          return setAuthor(authorList);
        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFunction();
    setLoading(() => true);
  }, []);

  return (
    <Router>
      <VarProvider>
        <AuthorIdProvider>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
          {/* <div className={theme === "dark" ? "app__dark" : "app__light"}> */}
          <div
            className={cx({
              app: true,
              appDark: theme,
            })}
          >
            <Switch>
              <Route path="/posts">
                <ThemeButton />
                <Row active setActive={setModalActive} author={author} />
                <ButtonShowMore />
                <Modal
                  active={modalActive}
                  setActive={setModalActive}
                  author={author}
                />
              </Route>
              <Route path="/users">
                <h1>Users</h1>
              </Route>
              <Redirect from="/" to="/posts" />
            </Switch>
          </div>
        </AuthorIdProvider>
      </VarProvider>
    </Router>
  );
}

export default App;
