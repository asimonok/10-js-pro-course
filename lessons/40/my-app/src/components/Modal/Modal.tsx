import React from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import './Modal.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

type Props = {
    close: () => void;
    children: JSX.Element;
  }

const Modal = ({close, children}:Props) => {

    const classNames = cx({
        modal: true
      });
   
    return (
        <div className={styles['overlay']}>
        <div className={styles['backdrop']} onClick={close}></div>
        <div className={classNames}>
          <div className={styles['modal-content']}>
            {children}
          </div>
          <div className={styles['modal-actions']}>
          <Button text='Close' onClick={close}/>
          </div>
        </div>
      </div>
    );
}

export default Modal;