import React, { useEffect } from "react";
import styles from "./app.module.css";
import Posts from "./components/Posts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
  // useHistory,
} from "react-router-dom";
import ThemeButton from "./components/ThemeButton";
import classNames from "classnames/bind";
import Users from "./components/Users";
import PostDetails from "./components/PostDetails";
import Comments from "./components/Comments";
import useTypedSelector from "./hooks";
import { useActions } from "./hooks/useActions";

let cx = classNames.bind(styles);

function App() {
  const { theme } = useTypedSelector((state) => state.theme);
  const { fetchPosts, fetchUsers, fetchComments } = useActions();

  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments("1");
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <ul className={styles.navigationBar}>
            <li>
              <NavLink to="/posts" activeClassName={styles.activeLink}>
                <p className={styles.nav}>Posts </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName={styles.activeLink}>
                <p className={styles.nav}> Users</p>
              </NavLink>
            </li>
            <ThemeButton />
          </ul>
        </header>
        <div
          className={cx({
            app: true,
            appDark: theme,
          })}
        >
          <Switch>
            <Route path="/posts" exact>
              <Posts />

              {/* <Row active setActive={setModalActive} author={author} posts={users} /> */}
              {/* <ButtonShowMore /> */}
              {/* <Modal active={modalActive} setActive={setModalActive} author={author} /> */}
            </Route>
            <Route path="/users" exact>
              {/* <Users author={author} /> */}
              <Users />
            </Route>
            <Route path="/posts/:postId" exact>
              {/* <PostDetails posts={users} comments={comments} /> */}
              <PostDetails />
            </Route>
            <Route path="/posts/:postId/comments" exact>
              {/* <Comment comments={comments} /> */}
              <Comments />
            </Route>

            <Redirect from="/" to="/posts" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
