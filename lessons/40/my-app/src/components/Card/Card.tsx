import React, { useContext, useCallback } from 'react';
import {PostTypes} from '../../types/PostTypes';
import {AuthorTypes} from '../../types/AuthorTypes';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

import './Card.css';

type Props = {
    openAuthorInfoModal: (requestedUserId: number) => void;
    post: PostTypes,
    authors: AuthorTypes[];
}

const Card = ({openAuthorInfoModal, post, authors}: Props) =>  {
    const theme = useContext(ThemeContext);
        
        const getAuthorName = useCallback((): string => {
            const requestedUser = authors.find(author => post.userId === author.id);
            if (requestedUser) {
              return requestedUser?.name;
            }
            return '';
          }, [authors, post.userId]);
    
    return (
        <>
            <div className={`card card__${theme}`}>
                <h2 className="card__title">{post.title}</h2>
                <div className="card__text"> {post.body} </div>
                <div className={`card__link card__${theme}`}>
                    Author:
                    <button onClick={() => openAuthorInfoModal(post.userId)}>{getAuthorName()}</button>
                </div>
            </div>
        </>
    )
}

export default Card;