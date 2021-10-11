import React from 'react';
import './EmojiContainer.css';
import EmojiRow from '../EmojiRow'

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


class EmojiContainer extends React.Component<any, State> {
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

    filterEmoji = (event: any) => {

        let arr = this.state.emojiList;
        this.setState( {
            searchingWord: event.target.value
        })
        let filteredArr = arr.filter( (item:any) => item.title.includes(this.state.searchingWord) || item.keywords.includes(this.state.searchingWord)  );

        this.setState( {
            emojiFiltered: filteredArr
        })
    }

    render() {
        const{emojiFiltered} = this.state;
        return (
            <>
            <br></br>
            <input type='text' placeholder="Enter emoji name" onChange={this.filterEmoji} />
            <br></br>
            <div><i>there are</i> {emojiFiltered.length} emoji</div>
            <br></br>

            <ul>{ emojiFiltered.slice(0,10).map( (item:any, i:number) => <EmojiRow key={i} item={item}/>) }</ul>
            </>
        )
    }
}

export default EmojiContainer;