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

  // const toggleModal = () => {
  //   setModalActive((wasModalActive) => !wasModalActive);
  // };

  return (
    <>
      <VarProvider>
        <AuthorIdProvider>
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
        </AuthorIdProvider>
      </VarProvider>
    </>
  );
}

export default App;
