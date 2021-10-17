import React from "react";
import "./Modal.css";
interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
//TODO
// title - Author name
// close button - right corner or bottom right
// body - adress and email with phone
const Modal: React.FC<Props> = (props) => {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation}
      >
        <div className="modal__title">Vlad Folse</div>
        <div className="modal__body">
          <p>Adress: Minsk,smth</p>
          <a href="#">Email: Folsefeeder@gmail.com</a>
          <p></p>
          <a href="#">Phone: 80-25-953-92-10</a>
        </div>
        <button className="modal_button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
