import React from "react";
import "./App.css";
import EmojiSearchInput from "./components/EmojiSearchInput";
import EmojiContainer from "./components/EmojiContainer";

interface SearchState {
  searchString: string;
}

export default class App extends React.Component {
  state: SearchState = {
    searchString: "",
  };

  render() {
    return (
      <div className="App">
        <EmojiSearchInput onChangeHandler={this.inputChangeHandler} />
        <EmojiContainer searchString={this.state.searchString} />
      </div>
    );
  }

  inputChangeHandler = (value: string): void => {
    this.setState({ searchString: value });
  };
}
