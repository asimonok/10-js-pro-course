import React, { useContext } from "react";
import { AuthorIdContext, ThemeContext } from "../../myContext";
import { UsersT } from "../../types";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  author: UsersT[];
}

const Modal: React.FC<Props> = (props) => {
  const [theme] = useContext(ThemeContext);

  const [authorId] = useContext(AuthorIdContext);
  let newAuthor = props.author[authorId - 1];
  return (
    <div
      className={cx({
        modal: true,
        active: props.active,
        modalDark: theme,
      })}
      onClick={() => props.setActive(false)}
    >
      <div
        className={cx({
          modal__content: true,
          active: props.active,
          modalContentDark: theme,
        })}
        onClick={(e) => e.stopPropagation}
      >
        <div
          className={cx({
            modal__title: true,
            modalTitleDark: theme,
          })}
        >
          {newAuthor?.name}
        </div>
        <div
          className={cx({
            modal__body: true,
            modalBodyDark: theme,
          })}
        >
          <p>
            Adress: {newAuthor?.address.city}
            {newAuthor?.address.street}
            {newAuthor?.address.suite}
          </p>
          <p>Email: {newAuthor?.email}</p>
          <p></p>
          <p>Phone: {newAuthor?.phone}</p>
        </div>
        {/* <button className={styles.modal_button}>Close</button> */}
        <button
          className={cx({
            modal_Button: true,
            modal_ButtonDark: theme,
          })}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
