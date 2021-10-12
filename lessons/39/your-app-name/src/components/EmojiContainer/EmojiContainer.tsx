import React, { useState, useEffect } from "react";
import EmojiRow from "../EmojiRow";
import "./EmojiContainer.css";

interface Props {
  searchValue: string;
  resultNumber: number;
}
// interface State {
//   emojiList: Emoji[];
// }
interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

// class EmojiContainer extends React.Component {
const EmojiContainer: React.FC<Props> = (props: Props) => {
  const emojiList: Emoji[] = [];
  const [state, setState] = useState(emojiList);

  function filterEmojis(searchValue: string, emojiList: Emoji[]): Emoji[] {
    const filteredemoji = emojiList.filter(
      (emoji) =>
        emoji.title.includes(searchValue) ||
        emoji.keywords.includes(searchValue) ||
        emoji.symbol.includes(searchValue)
    );
    return filteredemoji.slice(0, props.resultNumber);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/FolseV/js-pro-course/lessons/38/lessons/38/emojiList.json"
    )
      .then((res): Promise<Emoji[]> => {
        // .then((res) => {
        return res.json();
      })
      // .then((emojiList: Emoji[]): Emoji[] => {
      .then((emojiList: Emoji[]) => {
        return setState(emojiList);
      })
      .catch((error) => console.log(error));
  });

  const filteredList = filterEmojis(props.searchValue, state);
  return (
    <>
      <ul className="row">
        {filteredList.map((el) => {
          return (
            <li key={el.title}>
              <EmojiRow emoji={el} />
            </li>
          );
        })}
      </ul>
    </>
  );
  // }
};

export default EmojiContainer;
