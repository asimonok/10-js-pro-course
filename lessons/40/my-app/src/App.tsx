import React, { useContext, useState } from "react";
import "./App.css";
import ButtonShowMore from "./Components/ButtonShowMore";
import Modal from "./Components/Modal";
import Row from "./Components/Row";
import { ThemeContext, ThemeProvider, VarProvider } from "./myContext";

// TODO
//row with fetch from src
//button to show more
//loading bar
//modal window
//switch theme button

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [theme] = useContext(ThemeContext);
  return (
    // <ThemeProvider>
    <VarProvider>
      <div className="App">
        <Row active setActive={setModalActive} />
        <ButtonShowMore />
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </VarProvider>
    // </ThemeProvider>
  );
}

export default App;
