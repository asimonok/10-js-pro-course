import React from 'react';
import './button.css';

const Button = () => {
    const handleClick = (event) => {
        let cardTitle = event.currentTarget.parentNode?.firstChild.firstChild;
        console.log(cardTitle?.textContent);
    }

    return (
           <button className="btn" onClick={handleClick}>Choose</button> 
    );
}

export default Button;