import React from 'react';

import './Todo-list-item.css';

interface Props {
    id: number,
    task: string, 
    //onCorrect: () => void, 
   // onDelete: () => void, 
    //onToggleProp: boolean
}

const ListItem = (props: Props) => {

    const {task} = props;

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className="list-group-item-label" 
                //onClick={onToggleProp} 
                data-toggle="rise">
            {task}
            </span>
            <div className='d-flex justify-content-center align-items-center'>

                <input 
                    className="check"
                    type="checkbox"/>

                <button type="button"
                    className="btn-cookie btn-sm "
                    //onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-pen"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        //onClick={onDelete}
                        >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
        
    )
}

export default ListItem;