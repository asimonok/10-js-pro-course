import React from 'react';

import './Button.css';

interface Props {
    text: string,
    //onClick: () => void
}

const MyButton = (props: Props) => {

    return (
    <button 
        className="btn" 
        //onClick={props.onClick}
        >{props.text}</button>
    )
}

export default MyButton;