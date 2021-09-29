import React  from 'react';
import './CardHeader.css';

interface MyHeader {
    title: string;
    classBg?: string;
    className?: string;
}

const CardHeader = ({title, classBg}: MyHeader) => {
   
    return (<>
        <h2 className={classBg ? `card-title ${classBg}` : "card-title"}>{title}</h2>
        <div className="card-offer"> What You'll Get </div>
        </>
    )
}

export default CardHeader;

