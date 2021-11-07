import React from 'react';

import Button from '../Button';

import './Todo-clear-pannel.css';

const ClearPannel = () => {

    return (
        <div className="wrapper">
            <Button text={'Delete done tasks'}/>
            <Button text={'Delete all tasks'}/>
        </div>
    )
}

export default ClearPannel;