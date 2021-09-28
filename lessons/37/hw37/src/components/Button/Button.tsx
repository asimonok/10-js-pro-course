import React from 'react';
import './Button.css';

interface MyButton {
    label: string;
}

const Button = ({label}: MyButton) => {
    return (
        <button>{label}</button>
    ) 
}

export default Button;