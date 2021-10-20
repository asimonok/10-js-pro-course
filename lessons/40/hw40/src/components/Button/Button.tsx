import React, {useContext} from 'react'
import {ThemeContext} from '../ThemeProvider'   
import style from './Button.module.css';

console.log(style)
 

export const Button = () => {
    const [theme, setTheme]= useContext(ThemeContext);
    const styleType = theme === 'light' ? style.light : style.dark;

    return (
        <button className={style.btn + ' ' + styleType}  onClick={() => {setTheme( theme === 'dark'? 'light': 'dark')}}>Change mode {theme}</button>
    )

}

