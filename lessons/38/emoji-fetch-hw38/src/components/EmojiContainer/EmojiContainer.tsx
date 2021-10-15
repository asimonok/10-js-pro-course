import React, {useState, useEffect, useMemo, useCallback} from 'react';
import './EmojiContainer.css';
import EmojiRow from '../EmojiRow'
import {MyEmoji} from 'types/EmodjiTypes'

interface Props {
    searchingWord: string
}

const EmojiContainer: React.FunctionComponent<Props> = (props) => {
    const [emoji, setEmoji] = useState<MyEmoji[]>([]);

    useEffect( () => {
    fetch('https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json')
    .then( (data):Promise<MyEmoji[]> => data.json())
    .then( data  => {
        setEmoji(data);
    })
   }, [])

    // const filterEmoji = useCallback((word: string, arr: MyEmoji[]): MyEmoji[] => {
    //     return arr.filter( (item) => item.title.includes(word) || item.keywords.includes(word) )
    // }, [])
    const filterEmoji = (word: string, arr: MyEmoji[]): MyEmoji[] => {
        return arr.filter( (item) => item.title.includes(word) || item.keywords.includes(word) )
    }

    const filteredList  = useMemo( ()  => filterEmoji (props.searchingWord, emoji), [props.searchingWord, emoji])
        
        return (
            <>
            <br></br>
            <div><i>there are</i> {filteredList.length} emoji</div>
            <br></br>
            <ul>{ filteredList.slice(0,10).map( (item, i) => <EmojiRow key={i} item={item}/>) }</ul>
            </>
        )
}

export default EmojiContainer;