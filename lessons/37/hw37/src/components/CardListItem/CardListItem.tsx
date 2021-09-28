import React from 'react';
import './CardListItem.css';

const CardListItem = ({description}:any ):any => {
    return (
        <p className="item-text"> <span className="item-icon"></span>
        {description}
        </p>
    )
}

export default CardListItem;