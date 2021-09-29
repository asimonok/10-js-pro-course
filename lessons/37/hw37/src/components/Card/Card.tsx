import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader';
import CardList from '../CardList';
import Button from '../Button';
import Price from '../Price';

// const Card = (): React.ReactNode => {
const Card = ({title, classBg, price, period, data} :any): any => {
    const cardItem = "card-item";

    // const dayPass = [
    //     ['8 hour usage of our coworking spase'],
    //     ['Access to All our rooms'],
    //   ]
    //   const monthlyPass = [
    //     ['8 hour usage of our coworking spase'],
    //     ['Access to All our rooms'],
    //     ['Dedicated Desk'],
    //     ['Free Business Address'],
    //     ['Free Lunch 1x a day'],
    //   ]
    
    return (<div className={classBg ? `card-item ${classBg}` : cardItem}>
        <CardHeader title={title} className={classBg}/>
        <CardList data={data}/>
        <Price price={price} period={period}/>
        <Button label="Choose"/>
        </div>
    )
} 

export default Card;