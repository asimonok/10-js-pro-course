import React from 'react';
import './Loading.css';
interface MyLoadingProps {
    isActive: boolean;
}

const Loading: React.FC<MyLoadingProps> = ({isActive}) => {
    return (
        <div className={`main ${isActive ? '' : 'active'}`}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
    </div>
    );
};

export default Loading;