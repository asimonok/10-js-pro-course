import React, { useContext, useEffect, useState } from "react";
import { AuthorIdContext } from "../../myContext";
import { Author } from "../../types";
import "./Modal.css";
interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  author: Author[];
}

const Modal: React.FC<Props> = (props) => {
  const [authorId, setAuthorId] = useContext(AuthorIdContext);
  // const newnewAuthor = { ...props.author };
  let newAuthor = props.author[authorId - 1];
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modal__content active" : "modal__content "}
        onClick={(e) => e.stopPropagation}
      >
        <div className="modal__title">{newAuthor?.name}</div>
        <div className="modal__body">
          <p>
            Adress: {newAuthor?.address.city}
            {newAuthor?.address.street}
            {newAuthor?.address.suite}
          </p>
          <a href="#">Email: {newAuthor?.email}</a>
          <p></p>
          <a href="#">Phone: {newAuthor?.phone}</a>
        </div>
        <button className="modal_button" onClick={() => console.log(newAuthor)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
