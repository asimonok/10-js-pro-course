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
  displayLimit: number;
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
      displayLimit: 15,
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { searchString } = this.props;
    if (searchString !== prevProps.searchString) {
      this.searchEmoji();
    }
  }

  changeDisplayLimit = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ displayLimit: parseInt(event.target.value) });
  };

  searchEmoji = () => {
    const { searchString } = this.props;
    const { emojiList } = this.state;

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
      <div>
        <label htmlFor="display-limit">Choose display limit </label>
        <select
          className="display-limit"
          name="display-limit"
          onChange={this.changeDisplayLimit}
        >
          <option value="10">10</option>
          <option value="15" selected>
            15
          </option>
          <option value="20">20</option>
        </select>
        <ul className="emoji__list">
          {filteredEmojiList
            .map((emoji: Emoji) => {
              return <EmojiRow emoji={emoji} />;
            })
            .slice(0, this.state.displayLimit)}
        </ul>
      </div>
    );
  }
}

export default EmojiContainer;
