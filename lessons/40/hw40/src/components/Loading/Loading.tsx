import React from 'react';
import style from './Loading.module.css';
interface MyLoadingProps {
    isActive: boolean;
}

const Loading: React.FC<MyLoadingProps> = ({isActive}) => {
   
    const styleType = isActive ? style.main: `${style.main} ${style.active}`;

    return (
        <div className={styleType}>
            <div className={`${style.one} ${style.block}`}></div>
            <div className={`${style.two} ${style.block}`}></div>
            <div className={`${style.three} ${style.block}`}></div>
    </div>
    );
};

export default Loading;