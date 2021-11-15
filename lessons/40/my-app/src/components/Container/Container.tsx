import React, {useState, useCallback, useEffect, FC} from 'react';
import {PostTypes} from '../../types/PostTypes';
import {AuthorTypes} from '../../types/AuthorTypes';
import Card from '../Card';

import './Container.css';

type Props = {
    openAuthorInfoModal: (requestedUserID: number) => void;
    posts: PostTypes[],
    rowNumber: number,
    authors: AuthorTypes[]
}

const Container = ({openAuthorInfoModal, posts, rowNumber, authors}: Props): JSX.Element =>{
    
    return (
        <>
        <div className="container">
            {posts.slice(0, rowNumber).map( elem => {
                return <Card
                        openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
                        post={elem}
                        authors={authors}
                        />    
                          
            } )}
        </div>
        </>
    )
}

export default Container;