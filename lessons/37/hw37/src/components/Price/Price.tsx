import React from 'react'
import './Price.css';

interface MyPrice {
    price: number;
    period: string;
}


const Price = ({price, period}: MyPrice) => {
    return (
        <div>
           <span className="item-price">$ {price}</span> / {period}
        </div>
    )
}

export default Price