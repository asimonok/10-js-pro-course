import React from 'react';
import './EmojiContainer.css';

// interface Emoji {
//     title: string;
//     symbol: string;
//     keywords: string;
// }
  
// interface State {
// emojiList: Array<Emoji>;
// filteredEmojiList: Array<Emoji>;
// increase: boolean,
// searchingWord: string,

// }


class EmojiContainer extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            emojiList: [],
            emojiFiltered:[],
            increase: false,
            searchingWord: 'Smile',
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

    handleOnChange = (event: any) => {
        this.setState( {
            searchingWord: event.target.value
        })
    }

    handleClick = () => {
        this.setState( ({increase}:any) => ({
            increase: !increase
        }) )

        console.log('chosed emoji');

        this.setState(({emojiFiltered, emojiList}: any) => ({
            emojiFiltered: emojiList[6].symbol
        }))
    }


    filterEmoji = (event: any) => {
        let arr = this.state.emojiList;
        // console.log( keyword);
        console.log( arr);
        console.log( arr[1000]);
        console.log( arr[1000].title);
        // console.log( arr[1000].title.includes('Bell'));
        console.log( arr[1000].keywords);
        let filteredArr = arr.filter( (item:any) => item.title.includes(this.state.searchingWord) );
        console.log('filteredArr: ',filteredArr);
        this.setState( {
            emojiFiltered: filteredArr
        })
    }

    render() {
        const{emojiList, emojiFiltered, searchingWord, increase} = this.state;
        return (
            <>
            <br></br>
            <input type='text' onChange={this.handleOnChange} />
            <br></br>
            <div><i>searching word</i>: {searchingWord}</div>
            <br></br>
            {/* <button onClick={this.handleClick}>{increase? 'Increase is true': 'Increase is false'}</button> */}
 

            <button onClick={this.filterEmoji}>Choose emoji</button>
            <div>Filtered emoji: { emojiFiltered.map( (item:any, i:number) => <li key={i}>{item.symbol}</li>) }</div>
            </>

        )
    }
}


export default EmojiContainer;