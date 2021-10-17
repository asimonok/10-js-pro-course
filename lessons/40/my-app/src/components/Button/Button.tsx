import React, { FC } from 'react';
import './Button.css';

interface IProps {
  text: string;
  onClick: () => void;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  const handleChange = () => {
    onClick();
  };

  return (
    <button className="button" onClick={handleChange}>
      {text}
    </button>
  );
};

export default Button;
