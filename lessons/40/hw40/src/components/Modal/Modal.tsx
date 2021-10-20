import React from 'react';
import {User} from 'types/types';
import './Modal.css'

interface MyModalProps {
    user: User;
    isHidden: boolean;
    handleModal: () => void;
}

const Modal: React.FC<MyModalProps>= ({user, isHidden, handleModal}) => {



    return (
        <div className={`modal ${isHidden ? 'hidden' : 'opened'}`}>
            <div className="modal-info">
                <span className="close" onClick={handleModal}>X</span>
                <h2>{user.name}</h2>
                <p>Adress: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p className="email-phone">Email: {user.email} &nbsp;&nbsp; Phone: {user.phone}</p>
                <button className="closeBtn" onClick={handleModal}>Close</button>
            </div>
        </div>
    );
};

export default Modal;