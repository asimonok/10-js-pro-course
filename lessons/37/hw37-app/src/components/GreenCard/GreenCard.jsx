import React from 'react';
import './greenCard.css';

const GreenCard = () => {
    return (
        <div className="green-card">
            <h2 className="green-card__title">Save More <br/>
                <span className="green-card__subtitle">With Goodplans.</span>
            </h2>
            <div className="green-card__descr">
                <p>Choose a plan and get onboared in minutes. Then get $100 credits for your next payment</p>
                <span>&#8594;</span>
            </div>
        </div>
        
    );
}

export default GreenCard;