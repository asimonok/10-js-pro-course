import React from 'react';
import './Row.css';


interface Props {
  emoji: Emoji;
}

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

class Row extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  };

  render() {

    const { emoji } = this.props;

    return (
      <li className="emoji__item">
        {emoji.symbol} {emoji.title}
      </li>
    );

  }
}

export default Row;