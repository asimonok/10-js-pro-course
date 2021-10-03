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
      <ul className="emoji__list">
        <li className="emoji__list-item">
          {emoji.symbol} {emoji.title}
        </li>
      </ul>
    );
  }
}

export default EmojiRow;
