import React, { FC, useContext, useState, useCallback, useEffect } from 'react';
//import Modal from '../Modal/Modal';
import {Types} from '../../types/Types';
import { ThemeContext } from '../../App';
import './Card.css';

type Props = {
    post: Types,
    authors: Author[];
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

  const Card: FC<Props> = (props) =>  {
    //const [author, setAuthor] = useState<Author>();
    const [modal, setModal] = useState(false);
    const theme = useContext(ThemeContext);

    const getAuthor = () => {
        return props.authors.find(author => props.post.userId === author.id)?.name;
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