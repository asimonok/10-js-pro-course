import React, {FC} from 'react';
import style from './Button.module.css';
import className from 'classnames/bind'
const cx = className.bind(style);

interface MyButtonProps {
    name: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    bgColor?: "delete" ;
}

const Button: FC<MyButtonProps>  = ({name, handleClick, disabled=false, bgColor}) => {
    return (
        <button
            disabled={disabled}
            className={cx('btn', bgColor)}
            onClick={handleClick}
        >{name}</button>
    );
};

export default Button;