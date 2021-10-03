import React, { Component } from 'react';
import './EmojiContainer.css';
import EmojiRow from '../EmojiRow';

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

interface State {
  emojiList: Array<Emoji>;
  filteredEmojiList: Array<Emoji>;
}

interface Props {
  searchString: string;
}

class EmojiContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      emojiList: [],
      filteredEmojiList: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          emojiList: data,
          filteredEmojiList: data,
        });
      })
      .catch((e) => console.error(e));
  }

  componentDidUpdate(prevProps: Props) {
    const { searchString } = this.props;
    if (searchString !== prevProps.searchString) {
      this.searchEmoji();
    }
  }
  searchEmoji = () => {
    const { searchString } = this.props;
    const { emojiList, filteredEmojiList } = this.state;

    const newFilteredList = emojiList.filter((emoji) => {
      return (
        emoji.title.toLowerCase().includes(searchString) ||
        emoji.keywords.toLowerCase().includes(searchString)
      );
    });
    this.setState({ filteredEmojiList: newFilteredList });
  };

  render() {
    const { filteredEmojiList } = this.state;
    return (
      <div className="emoji">
        {filteredEmojiList.map((emoji: Emoji) => {
          return <EmojiRow emoji={emoji} />;
        })}
      </div>
    );
  }
}

export default EmojiContainer;
