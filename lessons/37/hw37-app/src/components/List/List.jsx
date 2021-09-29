import React, { useState } from 'react';
import './list.css';

const List = () => {
    const [items, setItem] = useState(['8 hours usage of our coworking space', 
    'Access to All our rooms']);

    const resultList = items.map( (item, index) => {
        return <li key="index"> &#128504; {item} </li> 
    } )
    return (
      <ul className="list">
          {resultList}
      </ul>
    );
}

export default List;