import React from "react";
import "./EmojiRaw.css";
import EmojiItem from "../Common/EmojiItem";

interface RawProps {
  emojiItem: EmojiItem;
}

export class EmojiRaw extends React.Component<RawProps> {
  props: RawProps;

  constructor(props: RawProps) {
    super(props);

    this.props = props;
  }

  render() {
    const imgSrc = `//cdn.jsdelivr.net/emojione/assets/png/${this.props.emojiItem.symbol
      .codePointAt(0)
      ?.toString(16)}.png`;

    return (
      <div className="emojiitem">
        <div className="emojies">
          <img src={imgSrc} alt={this.props.emojiItem.title} />
        </div>
        <div className="emojititle">{this.props.emojiItem.title}</div>
      </div>
    );
  }
}

export default EmojiRaw;
