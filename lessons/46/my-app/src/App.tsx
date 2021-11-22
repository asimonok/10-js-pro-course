import React from "react";
import styles from "./App.module.css";
import classNames from "classnames/bind";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Posts from "components/Pages/Posts";
import Users from "components/Pages/Users";
import PostDetails from "components/Pages/PostDetails";
import NoMatch from "components/Pages/NoMatch";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const cx = classNames.bind(styles);

const App: React.FC = () => {
  const newTheme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={cx("App", { dark: newTheme === "dark" })}>
      <Router>
        <Header />
        <Switch>
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/posts/:postId" exact>
            <PostDetails />
          </Route>
          <Route path="/notfound" exact>
            <NoMatch />
          </Route>
          <Redirect from="/" to="/posts"></Redirect>
          {/*<Redirect to="/not-found" />*/}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
