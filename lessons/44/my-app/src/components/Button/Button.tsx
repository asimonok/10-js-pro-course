import React, { FC } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  text: string;
  onClick?: () => void;
  deleteButton?: boolean;
  filterButton?: boolean;
  saveButton?: boolean;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick, deleteButton, filterButton, saveButton } = props;

  return (
    <button
      className={cx({
        button: true,
        deleteButton: deleteButton,
        filterButton: filterButton,
        saveButton: saveButton,
      })}
      onClick={onClick}
      data-testid={saveButton ? 'todo-stop-edit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
