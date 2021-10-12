import "./EmojiRaw.css";
import EmojiItem from "../Common/EmojiItem";

interface RawProps {
  emojiItem: EmojiItem;
}

export default function EmojiRaw(props: RawProps) {
  const imgSrc = `//cdn.jsdelivr.net/emojione/assets/png/${props.emojiItem.symbol
    .codePointAt(0)
    ?.toString(16)}.png`;

  return (
    <div className="emojiitem">
      <div className="emojies">
        <img src={imgSrc} alt={props.emojiItem.title} />
      </div>
      <div className="emojititle">{props.emojiItem.title}</div>
    </div>
  );
}
