import React, {useContext} from 'react'
import {ThemeContext} from '../ThemeProvider'   
import './Button.css';
 

export const Button = () => {
    const [theme, setTheme]= useContext(ThemeContext);




    return (
        <button className={theme} onClick={() => {setTheme( theme === 'dark'? 'light': 'dark')}}>Change mode {theme}</button>
    )

}

