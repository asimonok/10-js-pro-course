import React, { ChangeEvent } from "react";
import "./SearchInput.css";

interface Props {
  onChange: (searchEmoji: string) => void;
}

class SearchInput extends React.Component<Props> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="search-input_component">
        <input className="search-input" onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchInput;
