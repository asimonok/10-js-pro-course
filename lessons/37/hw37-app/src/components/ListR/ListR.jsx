import React, { useState } from 'react';
import './listR.css';

const ListR = () => {
    const [items, setItem] = useState(['8 hours usage of our coworking space', 
    'Access to All our rooms', 
    'Dedicated Desk', 
    'Free Business Addres', 
    'Free Lunch 1x a day']);

    const resultList = items.map( (item, index) => {
        return <li key="index"> &#128504; {item} </li> 
    } )
    return (
      <ul className="list">
          {resultList}
      </ul>
    );
}

export default ListR;