import React from 'react';
import './cardR.css';
import Button from '../Button'

const CardR = () => {
   
    return (
        <div className="card">
            <div>
            <h2>&#128293;  Monthly Pass</h2>
            <p>What you'll get</p>
            <ul className="list">
                <li> &#128504;  8 hours usage of our coworking space</li>
                <li> &#128504;  Access to All our rooms</li>
                <li> &#128504; Dedicated Desk</li>
                <li> &#128504; Free Business Addres</li>
                <li> &#128504; Free Lunch 1x a day</li>
                <hr/>
                <div className="price">$380<span>/month</span></div>
            </ul>
            </div>

            <Button />
        </div>
        
    );
}

export default CardR;