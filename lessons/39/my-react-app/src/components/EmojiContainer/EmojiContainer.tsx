import React, { useState, useEffect } from "react";
import "./EmojiContainer.css";
import EmojiRow from "../EmojiRow";

interface Props {
  searchEmoji: string;
}

interface Emoji {
  title: string;
  symbol: any;
  keywords: string;
}

const EmojiContainer: React.FC<Props> = (props) => {
  const [emojiData, setEmojiData] = useState([]);
  const [maxEmojiRows] = useState(15);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setEmojiData(data));
  });

  const filteredEmoji = emojiData.filter((emoji: Emoji) => {
    return (
      emoji.title.toLowerCase().includes(props.searchEmoji) ||
      emoji.keywords.toLowerCase().includes(props.searchEmoji) ||
      emoji.symbol.includes(props.searchEmoji)
    );
  });

  return (
    <div className="emoji-container_component">
      {filteredEmoji
        .map((emoji: Emoji) => {
          return (
            <EmojiRow
              key={emoji.title}
              symbol={emoji.symbol}
              title={emoji.title}
            />
          );
        })
        .slice(0, maxEmojiRows)}
    </div>
  );
};

export default EmojiContainer;
