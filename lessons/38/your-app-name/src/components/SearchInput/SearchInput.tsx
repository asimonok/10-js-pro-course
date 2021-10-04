import React from "react";
import "./SearchInput.css";

interface Props {
  searchValue: string;
  searchValueChange: (newValue: string) => void;
}

class SearchInput extends React.Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    this.props = props;
  }
  //   eventHandler = (event: Event): void => {
  //     this.props.searchValueChange(event.target.value);
  //   };
  //   eventHandler = (newValue: string): void => {
  //     this.props.searchValueChange(event.target.value);
  //   };
  render() {
    return (
      <>
        <p></p>
        <span className="inputText"> Title, Symbol or Keyword </span>
        <input
          value={this.props.searchValue}
          onChange={(event) => {
            this.props.searchValueChange(event.target.value);
          }}
        ></input>
      </>
    );
  }
}

export default SearchInput;
