import React from "react";

interface Props {
  emoji: Emoji;
}
interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

class EmojiRow extends React.Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <div>
          {this.props.emoji.symbol}
          {this.props.emoji.title}
        </div>
      </>
    );
  }
}

export default EmojiRow;
