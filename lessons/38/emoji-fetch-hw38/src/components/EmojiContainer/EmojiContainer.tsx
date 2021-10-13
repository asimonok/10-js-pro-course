import React from 'react';
import './EmojiContainer.css';
import EmojiRow from '../EmojiRow'
import Input from '../Input'

interface Emoji {
    title: string;
    symbol: string;
    keywords: string;
}
  
interface State {
    emojiList: Array<Emoji>;
    emojiFiltered: Array<Emoji>;
    searchingWord: string,
}

interface Props {}


class EmojiContainer extends React.Component<Props, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            emojiList: [],
            emojiFiltered:[],
            searchingWord: '',
        }
    }

    //in time of mounting DOM make fetch request
    componentDidMount() {
        const emojiList = fetch('https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json');
        emojiList.then( data => data.json())
        .then( data => {
            this.setState({
                emojiList: data,
            });
        })
    }

    // filterEmoji = (event: React.ChangeEvent<HTMLInputElement>) => {

    //     let arr = this.state.emojiList;
        
    //     let filteredArr = arr.filter( (item) => item.title.includes(this.state.searchingWord) || item.keywords.includes(this.state.searchingWord)  );

    //     this.setState( {
    //         emojiFiltered: filteredArr
    //     })
    // }

    updateSearchingWord = (newSearchingWord: string) => {

        let word = newSearchingWord
        let arr = this.state.emojiList;
        let filteredArr = arr.filter( (item) => item.title.includes(word) || item.keywords.includes(word)  );

        this.setState( {
            emojiFiltered: filteredArr,
            searchingWord: newSearchingWord
        })
    }

    render() {
        const{emojiFiltered} = this.state;
        return (
            <>
            <br></br>

            <Input searchingWord={this.state.searchingWord} onChange={this.updateSearchingWord} />

            <br></br>
            <div><i>there are</i> {emojiFiltered.length} emoji</div>
            <br></br>

            <ul>{ emojiFiltered.slice(0,10).map( (item, i) => <EmojiRow key={i} item={item}/>) }</ul>
            </>
        )
    }
}

export default EmojiContainer;