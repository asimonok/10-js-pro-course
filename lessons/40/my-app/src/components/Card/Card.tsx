import React, { useContext } from 'react';
import {Types} from '../../types/Types';
import { ThemeContext } from '../../App';
import './Card.css';

type Props = {
    post: Types,
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

function Card (props: Props) {
    const theme = useContext(ThemeContext);

    const getAuthor = () => {
        return props.author.find(author => props.post.userId === author.id)?.name;
    }
    
    return (
            <>
                <div className={`card card__${theme}`}>
                    <h2 className="card__title">{props.post.title}</h2>
                    <div className="card__text"> {props.post.body} </div>
                    <div className={`card__link card__${theme}`}>
                        Author:
                        <a href="#" className="card__author"> {getAuthor()} </a>
                    </div>
                </div>
            </>
    )
}

export default Card;