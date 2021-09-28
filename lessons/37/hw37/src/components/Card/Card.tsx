import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader';
import CardList from '../CardList';
import Button from '../Button';

// const Card = (): React.ReactNode => {
const Card = ({title, classBg, description} :any): any => {
    let cardItem = "card-item";
    return (<div className={classBg ? `card-item ${classBg}` : cardItem}>
        <CardHeader title={title} />
        <CardList/>
        <Button label="Choose"/>
        </div>
    )
} 

export default Card;