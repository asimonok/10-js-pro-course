import React from 'react';
import './Card.css';

interface Props {
    title: string,
    text: string,
    author: string
}

function Card (props: Props) {

    return (
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <div className="card__text"> {props.text} </div>
            <div className="card__link">
                Author:
                <a href="#"> {props.author} </a>
            </div>
        </div>
    )
}

export default Card;