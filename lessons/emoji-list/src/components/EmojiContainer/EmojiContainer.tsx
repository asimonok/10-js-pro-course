import React from 'react';
import './EmojiContainer.css';
import Row from '../Row';

interface Props {
  searchString: string;
}

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

interface State {
  emojiList: Array<Emoji>;
  filteredList: Array<Emoji>;
  displayLimit: number;
}

class EmojiContainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      emojiList: [],
      filteredList: [],
      displayLimit: 15,
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch this url, status: ${response.status}`);
      }
      return response
        .json()
        .then((res) => this.setState( { 
            emojiList: res,
            filteredList: res 
        }));
    });
  }
  
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { searchString } = this.props;
    if (searchString !== prevProps.searchString) {
      this.searchEmoji();
    }
  };

  searchEmoji = () => {
    const { searchString } = this.props;
    const { emojiList } = this.state;

    const newFilteredList = emojiList.filter( (emoji) => {
        return emoji.title.includes(searchString) || emoji.keywords.includes(searchString) } ).slice(0, this.state.displayLimit);
    
    this.setState( { filteredList: newFilteredList } );
  };

  render() {
    const { filteredList } = this.state;
    return (
      <div>
        <ul className="emoji__list">
          {filteredList.map((emoji: Emoji) => {
            return <Row emoji={emoji} />;
          })}
        </ul>
      </div>
    );
  }
}

export default EmojiContainer;