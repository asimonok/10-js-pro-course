import React, { FC } from 'react';
import styles from './Button.module.css';
import { useDispatch } from 'react-redux';

interface IProps {
  text: string;
  onClick?: () => void;
  delete?: boolean;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
