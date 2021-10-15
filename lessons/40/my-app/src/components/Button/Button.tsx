import React from 'react';
import './Button.css';

interface IProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = (props) => {
  const handleChange = () => {
    props.onClick();
  };

  return (
    <button className="button" onClick={handleChange}>
      {props.text}
    </button>
  );
};

export default Button;
