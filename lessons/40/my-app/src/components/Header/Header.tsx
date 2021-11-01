import React  from 'react';
import style from './Header.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);

interface Props {
    children: React.ReactNode;
  }

const Header = (props: Props) => {
        const { children } = props;
      
        return (
            <div className={style.header}>{children}</div>
        )
}

export default Header;