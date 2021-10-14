import React from 'react';
import './EmojiContainer.css';
import EmojiRow from '../EmojiRow'
import {MyEmoji} from 'types/EmodjiTypes'

interface State {
    emojiList: Array<MyEmoji>;
    emojiFiltered: Array<MyEmoji>;
}

interface Props {
    searchingWord: string
}

class EmojiContainer extends React.Component<Props, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            emojiList: [],
            emojiFiltered:[],
        }
    }

    componentDidMount() {
        const emojiList = fetch('https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json');
        emojiList.then( data => data.json())
        .then( data => {
            this.setState({
                emojiList: data,
            });
        })
    }
    componentDidUpdate(prevProps: Props) {

        if( prevProps.searchingWord !== this.props.searchingWord ){
            const {searchingWord} = this.props 
            let arr = this.state.emojiList;
            let filteredArr = arr.filter( (item) => item.title.includes(searchingWord) || item.keywords.includes(searchingWord) );
    
            this.setState( {
                emojiFiltered: filteredArr,
            })
        }
    }
        
    render() {
        const{emojiFiltered} = this.state;
        return (
            <>
            <br></br>
            <div><i>there are</i> {emojiFiltered.length} emoji</div>
            <br></br>
            <ul>{ emojiFiltered.slice(0,10).map( (item, i) => <EmojiRow key={i} item={item}/>) }</ul>
            </>
        )
    }
}

export default EmojiContainer;