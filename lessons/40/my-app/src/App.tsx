import axios, { Axios } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import ThemeButton from "./Components/ThemeButton";
import {
  ManageThemeContext,
  ThemeManager,
} from "./Components/ThemeManager/ThemeManager";
import {
  LoadingContext,
  LoadingProvider,
  ThemeContext,
  ThemeProvider,
  VarProvider,
} from "./myContext";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme, setTheme] = useContext(ThemeContext);
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
    <>
      <ThemeManager>
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
      </ThemeManager>
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
