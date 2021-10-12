import React from "react";
import "./EmojiRow.css";

interface Props {
  title: string;
  symbol: any;
}

const EmojiRow: React.FC<Props> = (props) => {
  const codePointHex = props.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(props.symbol);
  };

  return (
    <div
      className="emoji-row_component copy-to-clipboard"
      data-clipboard-text={props.symbol}
      onClick={copyToClipboard}
    >
      <img alt={props.title} src={src} />
      <span className="title">{props.title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
};

export default EmojiRow;
