import React from 'react';
import './cardR.css';
import Button from '../Button';
import ListR from '../ListR';

const CardR = (props) => {

    return (
        <div className="card">
            <div>
                <h2>&#128293; {props.name}</h2>
                <p>What you'll get</p>
                <ListR />
                <hr/>
                <div className="price">$380<span>/day</span></div>
            </div>

            <Button />
        </div>
        
    );
}

export default CardR;