import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import ThemeButton from "./Components/ThemeButton";

import { LoadingContext, ThemeContext, VarProvider } from "./myContext";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme] = useContext(ThemeContext);
  const [loading1, setLoading1] = useContext(LoadingContext);
  const [loading, setLoading] = useState(false);

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

  const toggleModal = () => {
    setModalActive((wasModalActive) => !wasModalActive);
  };

  return (
    <>
      <VarProvider>
        {loading ? (
          <div className={theme === "dark" ? "App__dark" : "App__light"}>
            <ThemeButton />
            <Row active setActive={setModalActive} />
            <ButtonShowMore />
            <Modal active={modalActive} setActive={setModalActive} />
          </div>
        ) : (
          <div className="loading">
            <img
              src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
              alt="loading..."
            />
          </div>
        )}
        {/* {loading ? "true" : "false"} */}
        {/* <button onClick={() => setLoading(true)}>check</button> */}
        {/* <button onClick={() => console.log(loading)}>check</button> */}
      </VarProvider>
    </>
  );
}

export default App;
