import React, {useState, useCallback} from 'react';
import {PostTypes} from '../../types/PostTypes';
import {AuthorTypes} from '../../types/AuthorTypes';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

import './Container.css';

type Props = {
    posts: PostTypes[],
    rowNumber: number,
    author: AuthorTypes[]
}

const Container = (props: Props) =>{
    
    const [modal, setModal] = useState(false);
    const toggleModal = useCallback(() => {
        setModal(modal === false ? true : false);
      }, [modal, setModal]);

    return (
        <>
        <div className="container">
            {props.posts.slice(0, props.rowNumber).map( elem => {
                return <Card
                    post={elem}
                    author={props.author}
                    />    
                          
            } )}
        </div>
        <Modal  author={props.author}
                active={modal}
                onActive={toggleModal}/>    
        </> 
    )
}
export default Container;