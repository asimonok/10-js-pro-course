import React, {useContext} from 'react'
import {ThemeContext} from '../ThemeProvider' 
import classNames from 'classnames/bind'  
import style from './Button.module.css';

const cx = classNames.bind(style);


export const Button = () => {
    const [theme, setTheme]= useContext(ThemeContext);

    return (
        <button 
            className={cx({
                btn:true,
                light: theme === 'light',
                dark: theme === 'dark',
            })}  
            onClick={() => {setTheme( theme === 'dark'? 'light': 'dark')}}>
            Change mode {theme}
        </button>
    )

}

