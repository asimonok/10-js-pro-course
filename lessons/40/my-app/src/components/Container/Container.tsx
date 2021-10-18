import React from 'react';
import {Types} from '../../types/Types';
import Card from '../Card/Card';
//import Modal from '../Modal/Modal';

import './Container.css';

type Props = {
    posts: Types[],
    rowNumber: number,
    author: Author[]
}

type Author = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    suite: string;
  }
}

const Container = (props: Props) =>{
    
    return (
        <>
        <div className="container">
            {props.posts.slice(0, props.rowNumber).map( elem => {
                return <Card
                    post={elem}
                    authors={props.author}
                    />    
                          
            } )}
        </div>
        {/* <Modal  author={author}
                active={modal}
                onActive={toggleModal}/>     */}
        </> 
    )
}
export default Container;