import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import ThemeButton from "./Components/ThemeButton";

import {
  LoadingContext,
  LoadingProvider,
  ThemeContext,
  VarProvider,
} from "./myContext";

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

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme, setTheme] = useContext(ThemeContext);
  // const [loading1, setLoading1] = useContext(LoadingContext);
  const [loading, setLoading] = useState(false);
  const userList: Users[] = [];
  const [users, setUsers] = useState(userList);
  const authorList: AuthorType[] = [];
  const [author, setAuthor] = useState(authorList);

  const loadFunction = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res): Promise<Users[]> => {
          return res.json();
        })
        .then((userList) => {
          return setUsers(userList), setLoading(true);
        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFunction();
  }, []);

  return (
    <>
      <VarProvider>
        {loading ? (
          <div className={theme === "dark" ? "App__dark" : "App__light"}>
            <ThemeButton />
            <Row
              active
              setActive={setModalActive}
              // loading
              // setLoad={setLoading}
            />
            <ButtonShowMore />
            <Modal active={modalActive} setActive={setModalActive} />
          </div>
        ) : (
          <div className="loading">
            <Spinner animation="grow" />
          </div>
        )}
        {/* {loading ? "true" : "false"} */}
        {/* <button onClick={() => setLoading(true)}>check</button> */}
        {/* <button onClick={() => console.log(loading)}>check</button> */}
      </VarProvider>
    </>
  );
  // )(
  //   <>
  //     {/* if ({ loading }) { */}
  //     {/* return ( */}

  //     {/* } else {
  //   return <Spinner animation="grow" />;
  // } */}
  //   </>
  // );
}

export default App;
