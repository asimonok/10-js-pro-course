import React from 'react';
import './Input.css';

interface IProps {
  placeholder: string;
  onChange: (searchString: string) => void;
  searchString: string;
}

const Input: React.FC<IProps> = (props) => {
  const searchEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  const { searchString } = props;

  return (
    <form className="search__form">
      <input
        type="text"
        className="search__input"
        value={searchString}
        placeholder={props.placeholder}
        onChange={searchEmoji}
      />
    </form>
  );
};

export default Input;
