import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styles from "./App.module.css";
import PostCardContainer from "./components/PostCardContainer";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import UsersContainer from "./components/UsersContainer";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className={styles.app}>
          <Header />
          <Switch>
            <Route path="/posts" exact>
              <div className={styles.postcard__container}>
                <h1>Posts</h1>
                <PostCardContainer />
              </div>
            </Route>
            <Route path="/users" exact>
              <div className={styles.postcard__container}>
                <h1>Users</h1>
                <UsersContainer />
              </div>
            </Route>
            <Route path="/posts/:postId" exact>
              <div className={styles.postcard__container}>
                <PostDetails />
              </div>
            </Route>
            <Route path="/notfound" exact>
              <div className={styles.postcard__container}>
                <NotFound />
              </div>
            </Route>
            <Redirect from="/" to="/posts" exact />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
