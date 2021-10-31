import React, { useContext } from 'react';
import style from "../../App.module.css";
import classNames from 'classnames/bind';
import { ThemeContext } from '../../ThemeContext';
import { Themes } from '../../types/Themes';

type Props = {
  text: string;
  onClick: () => void;
}

const cx = classNames.bind(style);

const Button = ({ text, onClick }: Props): JSX.Element => {
    const theme = useContext(ThemeContext);

  return (
    <button 
        className={
            cx({
            btn: true,
            black: theme === Themes.black, 
        })}
      onClick={onClick}>{text}
    </button>
  );
}

export default Button;