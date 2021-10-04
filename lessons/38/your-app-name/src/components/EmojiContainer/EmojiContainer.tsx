import React from "react";
import EmojiRow from "../EmojiRow";
import "./EmojiContainer.css";

interface Props {
  searchValue: string;
  resultNumber: number;
}
interface State {
  emojiList: Emoji[];
}
interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

class EmojiContainer extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.props = props;
    this.state = {
      emojiList: [],
    };
  }

  filterEmojis(searchValue: string, emojiList: Emoji[]): Emoji[] {
    const filteredemoji = emojiList.filter(
      (emoji) =>
        emoji.title.includes(searchValue) ||
        emoji.keywords.includes(searchValue) ||
        emoji.symbol.includes(searchValue)
    );
    return filteredemoji.slice(0, this.props.resultNumber);
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/FolseV/js-pro-course/lessons/38/lessons/38/emojiList.json"
    )
      .then((res) => {
        return res.json();
      })
      //   .then((emojiList: Emoji[]): Emoji[] => {
      .then((emojiList: Emoji[]): any => {
        this.setState({ emojiList });
      });
  }

  //   let filteredList = this.filterEmojis(this.props.searchValue, this.state.emojiList)

  render() {
    const filteredList = this.filterEmojis(
      this.props.searchValue,
      this.state.emojiList
    );
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
  }
}

export default EmojiContainer;
