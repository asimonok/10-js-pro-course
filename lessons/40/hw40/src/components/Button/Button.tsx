import React, {useContext} from 'react'
import {ThemeContext} from '../ThemeProvider'   

 

export const Button = () => {
    const [theme, setTheme]= useContext(ThemeContext);

    return (

        <button className='btn btn-theme' onClick={() => {setTheme( theme === 'dark'? 'light': 'dark')}}>Change mode {theme}</button>
    )

}

// onClick={() => {setTheme( theme === 'dark'? 'light': 'dark')}   Change mode 