import React, { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import EmojiContainer from "./components/EmojiContainer";

const App: React.FC = () => {
  const [searchEmoji, setSearchEmoji] = useState("");

  const handleChange = (searchEmoji: string): void => {
    setSearchEmoji(searchEmoji);
  };

  return (
    <div className="App">
      <SearchInput onChange={handleChange} />
      <EmojiContainer searchEmoji={searchEmoji} />
    </div>
  );
};

export default App;
