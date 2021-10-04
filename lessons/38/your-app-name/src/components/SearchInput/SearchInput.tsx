import React from "react";

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
        <span> title, symbol or keyword </span>
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
