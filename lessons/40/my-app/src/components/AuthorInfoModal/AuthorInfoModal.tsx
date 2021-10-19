import React, { FC } from 'react';
import './AuthorInfoModal.css';
import { Author } from 'types/Author';

interface IProps {
  author: Author;
  isOpened: boolean;
  onModalClose: () => void;
}

const AuthorInfoModal: FC<IProps> = (props) => {
  const { author, isOpened, onModalClose } = props;

  return (
    <div className={`modal__wrapper ${isOpened ? `open` : `close`}`}>
      <div className="modal__body">
        <div className="modal__header">
          <h2 className="modal__title">{author?.name}</h2>
          <span className="modal__close" onClick={onModalClose}>
            ×
          </span>
        </div>
        <div className="modal__text">
          <span className="modal__span">
            Adress: {author?.address?.city}, {author?.address?.street},{' '}
            {author.address.suite}
          </span>
          <span className="modal__span email">Email: {author?.email}</span>
          <span className="modal__span phone">Phone: {author?.phone}</span>
        </div>
        <button className="modal__button" onClick={onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthorInfoModal;
