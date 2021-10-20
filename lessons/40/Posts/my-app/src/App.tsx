import React, { useState, useCallback } from "react";
import styles from "./App.module.css";
import PostContainer from "components/PostContainer";
import Button from "components/Button";

//const handlePostAmount = useCallback(() => {
//    setPostAmount((postAmount) => postAmount + 5);
//  }, []);*/}

const App = () => {
  const [postAmount, setPostAmount] = useState(5);

  const changePostsAmount = useCallback(() => {
    setPostAmount((prevState) => prevState + 5);
  }, []);

  return (
    <div className={styles.App}>
      <PostContainer postsAmount={postAmount} />
      <Button text="Show more" action={changePostsAmount} color="dark" />
    </div>
  );
};

export default App;
