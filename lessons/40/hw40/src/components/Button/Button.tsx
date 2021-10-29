import React, {FC, useContext} from 'react';
import { ThemeContext } from 'components/ThemeProvider';
import style from './Button.module.css';
import className from 'classnames/bind'

const cx = className.bind(style);

export enum BtnPosition {
    bottom = 'bottom',
    top = 'top',
}

interface MyButtonProps {
    name: string;
    handleClick: () => void;
    position?: BtnPosition | null ;
}

const Button:FC<MyButtonProps>  = ({name, position = BtnPosition.top, handleClick}) => {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <button
            className={cx({
                btn: true,
                dark: theme === 'dark',
            }, position)
           }
            onClick={handleClick}
        >{name}</button>
    );
};

export default Button;