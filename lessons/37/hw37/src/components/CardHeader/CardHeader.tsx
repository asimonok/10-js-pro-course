import React from 'react';
import './CardHeader.css';

// interface Header {
//     title: string;
// }

// const CardHeader = (props: Header): React.ReactChild => {
const CardHeader = ({title, classBg} :any): any => {
    let classNames = classBg ? `card-title ${classBg}` : "card-title ";
    
    return (<>
        <h2 className={classNames}>{title}</h2>
        <div className="card-offer"> What You'll Get </div>
        </>
    )
}

export default CardHeader;

