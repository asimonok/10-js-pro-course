import React from "react";

interface Props {
  searchNumber: number;
  //   numberRes: (newNumber: number) => void;
  numberRes: (newNumber: any) => void;
}
interface State {}

class SearchSelect extends React.Component {
  props: Props;
  constructor(props: Props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <>
        <span> number of results </span>
        <input
          type="number"
          value={this.props.searchNumber}
          onChange={(event) => this.props.numberRes(event.target.value)}
        />
      </>
    );
  }
}

export default SearchSelect;
