import React from "react";
import "./SearchNumber.css";

interface Props {
  searchNumber: number;
  numberRes: (newNumber: number) => void;
}

// class SearchNumber extends React.Component {
const SearchNumber: React.FC<Props> = (props) => {
  // props: Props;
  // constructor(props: Props) {
  //   super(props);

  //   this.props = props;
  // }

  // render() {
  return (
    <>
      <span className="numberText"> Number of results </span>
      <input
        type="number"
        value={props.searchNumber}
        onChange={(event) => props.numberRes(parseFloat(event.target.value))}
      />
    </>
  );
  // }
};

export default SearchNumber;
