import React, {useContext} from 'react';
import {User} from 'types/types';
import classNames from 'classnames/bind'
import style from './AuthorModal.module.css'
import Button from 'components/Button';
import { BtnPosition } from 'components/Button/Button';

enum Size {
    small = 'small',
    medium = 'medium',
    big = 'big',
}
interface MyModalProps {
    user: User;
    isHidden: boolean;
    handleModal: () => void;
    theme: string;
    size?: Size;
}

const AuthorModal: React.FC<MyModalProps>= ({user, isHidden, handleModal, theme, size}) => {

    const cx = classNames.bind(style);

    return (
        <div   className={cx({
            modal:true,
            hidden: isHidden,
            dark: theme === 'dark',
            }, size)}>
            <div className={style["modal-info"]}>
                <span className={style.close} onClick={handleModal}>X</span>
                <h2>{user.name}</h2>
                <p>Adress: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p className={style["email-phone"]}>Email: {user.email} &nbsp;&nbsp; Phone: {user.phone}</p>
                <Button 
                    name="Close"
                    handleClick={handleModal}
                    position={BtnPosition.bottom}
                    />
            </div>
        </div>
    );
};

export {AuthorModal, Size};