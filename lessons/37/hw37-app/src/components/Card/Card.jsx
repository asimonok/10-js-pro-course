import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div className="card">
            <h2>Day Pass</h2>
            <p>What you'll get</p>
            <ul>
                <li>8 hours usage of our coworking space</li>
                <li>Access to All our rooms</li>
                <hr/>
                <div className="price">$20/day</div>

            </ul>
        </div>
        
    );
}

export default Card;