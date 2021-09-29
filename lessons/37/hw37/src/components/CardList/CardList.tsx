import React from 'react';
import './CardList.css';
import CardListItem from '../CardListItem';

const CardList = ({data}:any) => {

    let elements = data.map( (item:string, index: number) => {
        return (
            <CardListItem key={index} description={item}/>
        )
    } )

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default CardList;