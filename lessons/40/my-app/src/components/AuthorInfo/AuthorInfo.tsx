import React from 'react';
import {AuthorTypes} from '../../types/AuthorTypes';
import '../Modal/Modal.css';

type Props = {
    authorInfo: AuthorTypes;
  }

const AuthorInfo = ({authorInfo}: Props): JSX.Element => {

    return (
        <>
            <h3 className="modal__title">{authorInfo.name}</h3>
            <div className="modal__body">
                <div>Address: {authorInfo.address.city}, {authorInfo.address.street}, {authorInfo.address.suite}</div>
                <div>
                <span>E-mail: {authorInfo.email}</span>
                <span>Tel: {authorInfo.phone}</span>
                </div>
            </div>
        </>
    );
}

export default AuthorInfo;