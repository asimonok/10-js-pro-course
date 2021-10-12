import React from "react";
import { ChangeEvent } from "react";
import "./SearchInput.css";

interface Props {
  searchValue: string;
  searchValueChange: (newValue: string) => void;
}

// class SearchInput extends React.Component {
const SearchInput: React.FC<Props> = (props) => {
  // props: Props;

  // constructor(props: Props) {
  //   super(props);

  //   this.props = props;
  // }
  const eventHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    props.searchValueChange(event.target.value);
  };
  //   eventHandler = (newValue: string): void => {
  //     this.props.searchValueChange(event.target.value);
  //   };
  // render() {
  return (
    <>
      <p></p>
      <span className="inputText"> Title, Symbol or Keyword </span>
      <input value={props.searchValue} onChange={eventHandler}></input>
    </>
  );
  // }
};

export default SearchInput;
