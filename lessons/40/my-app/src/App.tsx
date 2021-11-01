import React, { useState, useEffect } from "react";
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

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const App: React.FC<{}> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response): Promise<Post[]> => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response): Promise<Comment[]> => {
        return response.json();
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <div className={styles.app}>
          <Header />
          <Switch>
            <Route path="/posts" exact>
              <div className={styles.container}>
                <h1>Posts</h1>
                <PostCardContainer />
              </div>
            </Route>
            <Route path="/users" exact>
              <div className={styles.container}>
                <h1>Users</h1>
                <UsersContainer />
              </div>
            </Route>
            <Route path="/posts/:postId" exact>
              <div className={styles.container}>
                <PostDetails posts={posts} comments={comments} />
              </div>
            </Route>
            <Route path="/not-found" exact>
              <div className={styles.container}>
                <NotFound />
              </div>
            </Route>
            <Redirect from="/" to="/posts" exact />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
