import React from 'react';
import './CardListItem.css';

interface MyDescription {
    description: string;
}

const CardListItem = ({description}: MyDescription ) => {
    return (
        <li className="item-text"> <span className="item-icon"></span>
        {description}
        </li>
    )
}

export default CardListItem;