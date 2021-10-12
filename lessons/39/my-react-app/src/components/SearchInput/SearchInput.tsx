import React, { ChangeEvent } from "react";
import "./SearchInput.css";

interface Props {
  onChange: (searchEmoji: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event.target.value);
  };

  return (
    <div className="search-input_component">
      <input className="search-input" onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
