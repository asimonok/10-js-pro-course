import React from 'react';
import './card.css';
import Button from '../Button'

const Card = () => {
   
    return (
        <div className="card">
            <div>
            <h2>&#128293;  Day Pass</h2>
            <p>What you'll get</p>
            <ul className="list">
                <li> &#128504;  8 hours usage of our coworking space</li>
                <li> &#128504;  Access to All our rooms</li>
                <hr/>
                <div className="price">$20<span>/day</span></div>
            </ul>
            </div>

            <Button />
        </div>
        
    );
}

export default Card;