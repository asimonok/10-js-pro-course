import React, { FC, useContext } from 'react';
import styles from './Preloader.module.css';
import classNames from 'classnames/bind';
import { ThemeContext } from '../ThemeContext';
import { THEMES } from 'constants/THEMES';

let cx = classNames.bind(styles);

const Preloader: FC<{}> = (props) => {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={cx({
        preloader: true,
        darkTheme: theme === THEMES.DARK,
      })}
    ></div>
  );
};

export default Preloader;
