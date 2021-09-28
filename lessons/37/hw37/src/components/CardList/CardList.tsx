import React from 'react';
import './CardList.css';
import CardListItem from '../CardListItem';

const CardList = () => {
    return (
        <ul>
            <CardListItem description="8 hours"/>
            <CardListItem description="10 hours"/>
        </ul>
    )
}

export default CardList;