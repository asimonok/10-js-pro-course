import React from 'react';

import MyButton from '../Button';

import './Todo-clear-pannel.css';

const ClearPannel = () => {

    return (
        <div className="wrapper">
            <MyButton 
                text={'Delete done tasks'} 
                //onClick={() => console.log('click')}
                />
            <MyButton 
                text={'Delete all tasks'} 
                //onClick={() => console.log('click')}
                />
        </div>
    )
}

export default ClearPannel;