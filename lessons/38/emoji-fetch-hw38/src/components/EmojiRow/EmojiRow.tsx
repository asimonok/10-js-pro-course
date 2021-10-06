import React from 'react';
import './EmojiRow.css';

interface MyEmoji {
    title: string;
    symbol: string;
    keywords: string;
  }
  
  interface Props {
    item: MyEmoji;
  }

function EmojiRow (props: Props) {
    const {item} = props;
        return (
            <li className='list-item'>
               {item.symbol} {item.title}
            </li>
        )    
 }

export default EmojiRow;