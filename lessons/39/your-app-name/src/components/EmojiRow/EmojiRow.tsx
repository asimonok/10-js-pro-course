import React from "react";

interface Props {
  emoji: Emoji;
}
interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

// class EmojiRow extends React.Component {
const EmojiRow: React.FC<Props> = (props) => {
  // props: Props;

  // constructor(props: Props) {
  // super(props);

  // this.props = props;
  // }
  // render() {
  return (
    <>
      <div className="element">
        {/* {this.props.emoji.symbol} <span> </span> {this.props.emoji.title} */}
        {props.emoji.symbol} <span> </span> {props.emoji.title}
      </div>
    </>
  );
  // }
};

export default EmojiRow;
