import React, { FC } from 'react';
import styles from './Modal.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  children: JSX.Element;
  isOpened: boolean;
  onModalClose: () => void;
}

const Modal: FC<IProps> = (props) => {
  const { children, isOpened, onModalClose } = props;

  return (
    <div
      className={cx({
        modal__wrapper: true,
        open: isOpened === true,
        close: isOpened === false,
      })}
    >
      <div className={styles['modal__body']}>
        <span className={styles['modal__close']} onClick={onModalClose}>
          ×
        </span>
        {children}
        <button className={styles.button} onClick={onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
