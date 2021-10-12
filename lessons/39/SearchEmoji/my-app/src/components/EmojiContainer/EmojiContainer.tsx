import "./EmojiContainer.css";
import EmojiItem from "../Common/EmojiItem";
import EmojiRaw from "../EmojiRaw";
import { useEffect, useState } from "react";

interface SearchProps {
  searchString: string;
}

export default function EmojiContainer(props: SearchProps) {
  const [allEmojiItems, setAllEmojiItems] = useState<EmojiItem[]>([]);
  const [searchLimit, setSearchLimit] = useState(5);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setAllEmojiItems(data));
  }, []);

  function filteredEmojiItems(): EmojiItem[] {
    return allEmojiItems
      .filter(
        (item) =>
          item.title.toLowerCase().indexOf(props.searchString.toLowerCase()) !==
            -1 ||
          item.keywords
            .toLowerCase()
            .indexOf(props.searchString.toLowerCase()) !== -1
      )
      .slice(0, searchLimit);
  }

  if (!props.searchString) {
    return <div>Enter emoji title or keyword</div>;
  }

  return (
    <div>
      <select
        id="searchlimit"
        name="searchLimit"
        onChange={(event) => setSearchLimit(parseInt(event.target.value))}
        value={searchLimit}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>

      <ul>
        {filteredEmojiItems().map((item) => (
          <li className="emoji" key={item.title}>
            <EmojiRaw emojiItem={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
