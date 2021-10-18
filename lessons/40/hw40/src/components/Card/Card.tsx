import React, {useState} from 'react';

enum CardVariant {
    outlined = 'outlined',
    filled = 'filled',
}

interface MyCardProps {
    width: string;
    height: string;
    variant: CardVariant;
    handleClick: (num: number) => void;
}

const Card: React.FC<MyCardProps> = 
    ({
        width,
        height,
        variant,
        children,
        handleClick 
    }) => {

        const [state, setState] = useState(0);

    return (
        <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
        background: variant === CardVariant.filled ? 'lightgreen' : ''}}
        onClick={() => handleClick(state)}
        >
           Working!
           {children}
           
        </div>
    );
};

export {Card, CardVariant} ;