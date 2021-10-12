import React, { useState, useEffect } from "react";
import "./EmojiContainer.css";
import EmojiRow from "../EmojiRow";

// interface Props {
//   searchEmoji: string;
// }

// interface State {
//   emojiData: Array<Emoji>;
//   filteredEmoji: Array<Emoji>;
//   maxEmojiRows: number;
// }

// interface Emoji {
//   title: string;
//   symbol: any;
//   keywords: string;
// }

// class EmojiContainer extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       emojiData: [],
//       filteredEmoji: [],
//       maxEmojiRows: 15,
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         this.setState({
//           emojiData: data,
//           filteredEmoji: data,
//         });
//       });
//   }

//   componentDidUpdate(prevProps: Props, prevState: State) {
//     const { searchEmoji } = this.props;
//     if (searchEmoji !== prevProps.searchEmoji) {
//       this.filterEmoji();
//     }
//   }

//   filterEmoji = () => {
//     const { searchEmoji } = this.props;
//     const { emojiData } = this.state;

//     const filteredEmojiResult = emojiData.filter((emoji) => {
//       return (
//         emoji.title.toLowerCase().includes(searchEmoji) ||
//         emoji.keywords.toLowerCase().includes(searchEmoji)
//       );
//     });
//     this.setState({ filteredEmoji: filteredEmojiResult });
//   };

//   render() {
//     const { filteredEmoji } = this.state;
//     return (
//       <div className="emoji-container_component">
//         {filteredEmoji
//           .map((emoji: Emoji) => {
//             return (
//               <EmojiRow
//                 key={emoji.title}
//                 symbol={emoji.symbol}
//                 title={emoji.title}
//               />
//             );
//           })
//           .slice(0, this.state.maxEmojiRows)}
//       </div>
//     );
//   }
// }

interface Props {
  searchEmoji: string;
}

interface Emoji {
  title: string;
  symbol: any;
  keywords: string;
}

const EmojiContainer: React.FC<Props> = (props) => {
  const [emojiData, setEmojiData] = useState([]);
  const [maxEmojiRows] = useState(15);

  const fetchEmoji = () => {
    fetch(
      "https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setEmojiData(data));
  };

  useEffect(() => {
    fetchEmoji();
  }, []);

  const filteredEmoji = emojiData.filter((emoji: Emoji) => {
    return (
      emoji.title.toLowerCase().includes(props.searchEmoji) ||
      emoji.keywords.toLowerCase().includes(props.searchEmoji)
    );
  });

  return (
    <div className="emoji-container_component">
      {filteredEmoji
        .map((emoji: Emoji) => {
          return (
            <EmojiRow
              key={emoji.title}
              symbol={emoji.symbol}
              title={emoji.title}
            />
          );
        })
        .slice(0, maxEmojiRows)}
    </div>
  );
};

export default EmojiContainer;
