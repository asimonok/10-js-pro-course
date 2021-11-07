import React from 'react';

import ListItem from '../Todo-list-item';
import {Data} from '../../types/Data';

import './Todo-list.css';

type Props = {
    data: Data[]
}

const List = ({data}: Props) => {

    const elems = data.map( (item) => {
        const {id, ...itemProps} = item;
        return (
        <ListItem 
            id={id} 
            {...itemProps}
            //onDelete={() => onDelete(id)}
            //onToggleProp={ (e) =>  onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
            />
        )
    } );

    return (
        <ul className="list list__group">
            {elems}
        </ul>
    )
}

export default List;