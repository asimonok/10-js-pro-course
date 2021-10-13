
import React from 'react';
import './Row.css';


interface Props {
  emoji: Emoji;
}

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

function Row (props: Props) {

    return (
      <li className="emoji__item">
        {props.emoji.symbol} {props.emoji.title}
      </li>
    );

  }


export default Row;