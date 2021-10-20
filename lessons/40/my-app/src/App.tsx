import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import ThemeButton from "./Components/ThemeButton";
import { AuthorIdProvider, ThemeContext, VarProvider } from "./myContext";
import { Author } from "./types";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme] = useContext(ThemeContext);
  // const [loading1, setLoading1] = useContext(LoadingContext);
  const [loading, setLoading] = useState(false);
  // const authorList: Author[] = [];
  const [author, setAuthor] = React.useState<Author[]>([]);
  const [reqAuthor, setReqAuthor] = React.useState<Author | null>(null);

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

  // const toggleModal = () => {
  //   setModalActive((wasModalActive) => !wasModalActive);
  // };

  return (
    <>
      <VarProvider>
        <AuthorIdProvider>
          {/* {loading1 ? ( */}
          <div className={theme === "dark" ? "App__dark" : "App__light"}>
            <ThemeButton />
            <Row active setActive={setModalActive} author={author} />
            <ButtonShowMore />
            <Modal
              active={modalActive}
              setActive={setModalActive}
              author={author}
            />
          </div>
          <button onClick={() => console.log()}>test</button>
          {/* ) : ( */}
          {/* <div className="loading">
          <img
            src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
            alt="loading..."
          />
        </div> */}
          {/* )} */}
          {/* {loading ? "true" : "false"} */}
          {/* <button onClick={() => setLoading(true)}>check</button> */}
          {/* <button onClick={() => console.log(loading)}>check</button> */}
        </AuthorIdProvider>
      </VarProvider>
    </>
  );
}

export default App;
