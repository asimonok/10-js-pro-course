import React from "react";
import "./EmojiContainer.css";
import EmojiItem from "../Common/EmojiItem";
import EmojiRaw from "../EmojiRaw";

interface SearchProps {
  searchString: string;
}

interface SearchContainerState {
  allEmojiItems: EmojiItem[];
  searchLimit: number;
}

export class EmojiContainer extends React.Component<
  SearchProps,
  SearchContainerState
> {
  state: SearchContainerState = {
    allEmojiItems: [],
    searchLimit: 5,
  };

  props: SearchProps;

  constructor(props: SearchProps) {
    super(props);

    this.props = props;
  }

  searchLimitChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ searchLimit: parseInt(event.target.value) });
  };

  render() {
    if (!this.props.searchString) {
      return <div>Enter emoji title or keyword</div>;
    }

    const filteredEmojiItems = this.state.allEmojiItems
      .filter(
        (item) =>
          item.title
            .toLowerCase()
            .indexOf(this.props.searchString.toLowerCase()) !== -1 ||
          item.keywords
            .toLowerCase()
            .indexOf(this.props.searchString.toLowerCase()) !== -1
      )
      .slice(0, this.state.searchLimit);

    return (
      <div>
        <select
          id="searchlimit"
          name="searchLimit"
          onChange={this.searchLimitChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>

        <ul>
          {filteredEmojiItems.map((item) => (
            <li className="emoji" key={item.title}>
              <EmojiRaw emojiItem={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response
        .json()
        .then((data) => this.setState({ allEmojiItems: data }));
    });
  }
}

export default EmojiContainer;
