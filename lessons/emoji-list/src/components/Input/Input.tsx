import React from 'react';
import './Input.css';

interface Props {
  placeholder: string;
  onChange: (search: string) => void;
}

class Input extends React.Component<Props> {
  
  constructor(props: Props) {
    super(props);
  };

  render() {
    return (
      <form className="search__form">

        <input className="input" placeholder={this.props.placeholder} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value) } }/>

      </form>
    );
  }
}

export default Input;