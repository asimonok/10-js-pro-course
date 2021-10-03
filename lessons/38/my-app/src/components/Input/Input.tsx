import React from 'react';
import './Input.css';

interface Props {
  placeholder: string;
  onChange: (searchString: string) => void;
}

class Input extends React.Component<Props> {
  searchEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder={this.props.placeholder}
          onChange={this.searchEmoji}
        />
      </form>
    );
  }
}

export default Input;
