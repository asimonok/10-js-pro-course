import React, {FC} from 'react';
import style from './Button.module.css';


interface MyButtonProps {
    name: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<MyButtonProps>  = ({name, handleClick}) => {
    return (
        <button
            className={style.btn}
            onClick={handleClick}
        >{name}</button>
    );
};

export default Button;