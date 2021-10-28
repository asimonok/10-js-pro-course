import React from 'react';
import style from './Loading.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

interface MyLoadingProps {
    isActive: boolean;
}

const Loading: React.FC<MyLoadingProps> = ({isActive}) => {
   
    const styleType = isActive ? style.main: `${style.main} ${style.active}`;

    return (
        <div className={styleType}>
            <div className={cx('one', 'block')}></div>
            <div className={cx('two', 'block')}></div>
            <div className={cx('three', 'block')}></div>
    </div>
    );
};

export default Loading;