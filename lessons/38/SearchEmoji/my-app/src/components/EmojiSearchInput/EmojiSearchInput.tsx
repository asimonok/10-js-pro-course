import React from "react";
import "./EmojiSearchInput.css";

interface SearchProps {
  onChangeHandler: (value: string) => void;
}

export class EmojiSearchInput extends React.Component<SearchProps> {
  props: SearchProps;

  constructor(props: SearchProps) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <input
        type="text"
        id="header-search"
        name="search"
        border-color="rgba(84, 174, 255, 0.8)"
        onChange={(event) => this.props.onChangeHandler(event.target.value)}
      />
    );
  }
}

export default EmojiSearchInput;
