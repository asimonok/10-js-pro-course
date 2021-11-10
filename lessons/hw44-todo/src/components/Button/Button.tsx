import React, {FC} from 'react';
import style from './Button.module.css';



interface MyButtonProps {
    name: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button: FC<MyButtonProps>  = ({name, handleClick, disabled=false}) => {
    return (
        <button
            disabled={disabled}
            className={style.btn}
            onClick={handleClick}
        >{name}</button>
    );
};

export default Button;