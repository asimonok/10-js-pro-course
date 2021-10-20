import React from 'react';
import {User} from 'types/types';
import style from './AuthorModal.module.css'
interface MyModalProps {
    user: User;
    isHidden: boolean;
    handleModal: () => void;
}

const AuthorModal: React.FC<MyModalProps>= ({user, isHidden, handleModal}) => {

    const styleType = isHidden ? style.hidden: style.opened;

    return (
        <div className={style.modal + " " + styleType}>
            <div className={style["modal-info"]}>
                <span className={style.close} onClick={handleModal}>X</span>
                <h2>{user.name}</h2>
                <p>Adress: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p className={style["email-phone"]}>Email: {user.email} &nbsp;&nbsp; Phone: {user.phone}</p>
                <button className={style.closeBtn} onClick={handleModal}>Close</button>
            </div>
        </div>
    );
};

export default AuthorModal;