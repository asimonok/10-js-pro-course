import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader';
import CardList from '../CardList';
import Button from '../Button';
import Price from '../Price';

// const Card = (): React.ReactNode => {
const Card = ({title, classBg, price, period} :any): any => {
    const cardItem = "card-item";

    return (<div className={classBg ? `card-item ${classBg}` : cardItem}>
        <CardHeader title={title} className={classBg}/>
        <CardList/>
        <Price price={price} period={period}/>
        <Button label="Choose"/>
        </div>
    )
} 

export default Card;