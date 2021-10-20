import React, { FC, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import {PostTypes} from '../../types/PostTypes';
import {AuthorTypes} from '../../types/AuthorTypes';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import './Card.css';

type Props = {
    post: PostTypes,
    author: AuthorTypes[];
}

const Card: FC<Props> = (props) =>  {
   const [modal, setModal] = useState(false);
    const theme = useContext(ThemeContext);

    const getAuthor = () => {
        return props.author.find(author => props.post.userId === author.id)?.name;
    }

    const toggleModal = useCallback(() => {
        setModal(modal === false ? true : false);
      }, [modal, setModal]);
    
    return (
            <>
                <div className={`card card__${theme}`}>
                    <h2 className="card__title">{props.post.title}</h2>
                    <div className="card__text"> {props.post.body} </div>
                    <div className={`card__link card__${theme}`}>
                        Author:
                        <a href="#" className="card__author" onClick={toggleModal}> {getAuthor()} </a>
                    </div>
                </div>
            </>
    )
}

export default Card;