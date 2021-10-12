import "./EmojiSearchInput.css";

interface SearchProps {
  onChangeHandler: (value: string) => void;
}

export default function EmojiSearchInput(props: SearchProps) {
  return (
    <input
      type="text"
      id="header-search"
      name="search"
      border-color="rgba(84, 174, 255, 0.8)"
      onChange={(event) => props.onChangeHandler(event.target.value)}
    />
  );
}
