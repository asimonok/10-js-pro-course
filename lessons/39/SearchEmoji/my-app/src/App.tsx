import { useState } from "react";
import "./App.css";
import EmojiSearchInput from "./components/EmojiSearchInput";
import EmojiContainer from "./components/EmojiContainer";

export default function App() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="App">
      <EmojiSearchInput onChangeHandler={(value) => setSearchString(value)} />
      <EmojiContainer searchString={searchString} />
    </div>
  );
}
