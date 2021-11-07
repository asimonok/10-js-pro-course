import React from 'react';
import Button from '../Button';

import './Todo-filter-pannel.css';

const FilterPannel = () => {

    return (
        <>
            <h2>TodoList</h2>
            <div className="wrapper">
                <Button text={'All'}/>
                <Button text={'Done'}/>
                <Button text={'Todo'}/>
            </div>
        </>
    )
}

export default FilterPannel;