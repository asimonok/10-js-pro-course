import React, { Component } from 'react';
import './EmojiRow.css';

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

interface Props {
  emoji: Emoji;
}

class EmojiRow extends Component<Props> {
  render() {
    const { emoji } = this.props;
    return (
      <li className="emoji__list-item">
        {emoji.symbol} {emoji.title}
      </li>
    );
  }
}

export default EmojiRow;
