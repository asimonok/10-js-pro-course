import React, { FC } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  text: string;
  onClick: () => void;
  themeButton?: boolean;
  modalButton?: boolean;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick, themeButton, modalButton } = props;

  return (
    <button
      className={cx({
        button: true,
        themeButton: themeButton,
        modalButton: modalButton,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
