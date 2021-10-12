import React, { useState } from "react";
import "./App.css";
import EmojiContainer from "./components/EmojiContainer";
import SearchInput from "./components/SearchInput";
import SearchNumber from "./components/SearchNumber";

// interface Props {}
// interface State {
//   searchValue: string;
//   resultNumber: number;
// }

const App = () => {
  // const [state, setState] = useState({
  //   searchValue: "",
  //   resultNumber: 100,
  // });
  const [searchValue, setSearchValue] = useState("");
  const [resultNumber, setResultNumber] = useState(100);

  // state: State;

  // constructor(props: Props) {
  //   super(props);

  //   this.state = {
  //     searchValue: "",
  //     resultNumber: 100,
  //   };
  // }

  const resultNumberHandler = (newNumber: number): void => {
    setResultNumber(newNumber);
  };

  const valueChangeHandler = (newValue: string): void => {
    setSearchValue(newValue);
  };

  // render() {
  return (
    <>
      <div className="search">
        <SearchNumber
          // searchNumber={this.state.resultNumber}
          searchNumber={resultNumber}
          // numberRes={(newNumber) => this.setState({ resultNumber: newNumber })}
          numberRes={resultNumberHandler}
        />
        <SearchInput
          // searchValue={this.state.searchValue}
          searchValue={searchValue}
          searchValueChange={valueChangeHandler}
          // searchValueChange={(newValue) =>
          //   this.setState({ searchValue: newValue })
          // }
        />
      </div>

      <EmojiContainer
        // searchValue={this.state.searchValue}
        searchValue={searchValue}
        // resultNumber={this.state.resultNumber}
        resultNumber={resultNumber}
      />
    </>
  );
};
// }

export default App;
