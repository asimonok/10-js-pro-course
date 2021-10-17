import axios, { Axios } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import {
  LoadingContext,
  LoadingProvider,
  ThemeContext,
  ThemeProvider,
  VarProvider,
} from "./myContext";

// TODO
//row with fetch from src
//button to show more
//loading bar
//modal window
//switch theme button

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme] = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useContext(LoadingContext);

  const loadFunction = async () => {
    try {
      const data = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res: any) => {
          console.log(res);
          setLoading(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFunction();
  }, []);

  return (
    <LoadingProvider>
      {/* <ThemeProvider> */}
      <VarProvider>
        {loading ? (
          <div className="App">
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
          <Spinner animation="grow" />
        )}
        {loading ? "true" : "false"}
        <button onClick={() => setLoading(true)}>check</button>
        <button onClick={() => console.log(loading)}>check</button>
      </VarProvider>
      {/* </ThemeProvider> */}
    </LoadingProvider>
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
