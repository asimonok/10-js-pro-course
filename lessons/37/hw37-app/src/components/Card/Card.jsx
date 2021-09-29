import React from 'react';
import './card.css';
import Button from '../Button';
import List from '../List';

const Card = (props) => {

    return (
        <div className="card">
            <div>
            <h2 className="cardTitle">&#128293; {props.name}</h2>
            <p>What you'll get</p>
            <List />
            <hr/>
                <div className="price">$20<span>/day</span></div>
            </div>
            <Button />
        </div>
        
    );
}

export default Card;