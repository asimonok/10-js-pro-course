import React, { useState, useEffect }  from 'react';
import './Container.css';
import Row from '../Row';

interface Props {
    search: string;
  }
 
interface Emoji {
    title: string;
    symbol: string;
    keywords: string;
  }

function Container (props: Props) {

  const [limitNum] = useState(15);
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Could not fetch this url, status: ${response.status}`);
          }
            return response.json();
          })
          .then( (list) => setEmojiList(list) );
          }, []);

  const filteredList = emojiList.filter( (elem: Emoji) => {
    return elem.title.includes(props.search) || elem.keywords.includes(props.search) } ).slice(0, limitNum);
  
    return (
        <div>
        <ul className="emoji__list">
          {filteredList.map((emoji: Emoji) => {
            return <Row emoji={emoji} />;
          })}
        </ul>
      </div>
    )
}

export default Container;