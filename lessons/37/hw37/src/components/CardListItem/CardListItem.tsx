import React from 'react';
import './CardListItem.css';

const CardListItem = ({description}:any ):any => {
    return (
        <li className="item-text"> <span className="item-icon"></span>
        {description}
        </li>
    )
}

export default CardListItem;