import React from 'react';
import './GreenCard.css';

interface MyGreenCard {
    title: string
}

const GreenCard = ({title}: MyGreenCard) => {
    return (
        <div className="card-item green greencard">
            <h2 className="greencard__header">
                Save More
            </h2>
            <div className="greencard__subheader">
                <h3>With Goodplans.</h3>
            </div>
            <div className="greencard__descr">
                <p>Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.</p>
                <div className="arrow">&#8594;</div>
            </div>
        </div>
    )
}

export default GreenCard;