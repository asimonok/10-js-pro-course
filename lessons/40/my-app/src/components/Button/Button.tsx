import React, { useState, useEffect } from 'react';
import './Button.css';

interface IProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = (props) => {
  const showMore = () => {
    props.onClick();
  };

  return (
    <button className="button" onClick={showMore}>
      {props.text}
    </button>
  );
};

export default Button;
