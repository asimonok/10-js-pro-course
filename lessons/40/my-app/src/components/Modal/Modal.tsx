import React, {FC} from 'react';
import {AuthorTypes} from '../../types/AuthorTypes';
import './Modal.css';

type Props = {
    author: AuthorTypes[];
    active: boolean;
    onActive: () => void;
  }

const Modal = (props: Props) => {
   
    return (
        <div className="modal__block">
            <div className="modal">
                <div className="modal__title"> 
                    Name:
                    {/* {props.author} */}
                    <div className="modal__close" onClick={ (e) =>  e.preventDefault()}>
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                        </svg>
                    </div>
                 </div>
                <div className="modal__body">
                    <p> Addres: 
                        {/* {props.author?.address.city}, {props.author?.address.street}, {props.author?.address.suite}
                        </p>
                    <p> Email: 
                        {props.author?.email}
                        </p>
                    <p> Tel: 
                        {props.author?.phone} */}
                        </p>
                </div>
                <div className="modal__bottom">
                    <button className="modal__btn" >Close</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Modal;