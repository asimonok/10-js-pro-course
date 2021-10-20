import React, { useContext } from "react";
import { AuthorIdContext, ThemeContext, ThemeProvider } from "../../myContext";
import { Author } from "../../types";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  author: Author[];
}

const Modal: React.FC<Props> = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [authorId] = useContext(AuthorIdContext);
  let newAuthor = props.author[authorId - 1];
  return (
    <div
      // className={props.active ? "modal active" : "modal"}
      className={cx({
        modal: true,
        active: props.active,
        modalDark: theme,
      })}
      onClick={() => props.setActive(false)}
    >
      <div
        // className={props.active ? "modal__content active" : "modal__content "}
        className={cx({
          modal__content: true,
          active: props.active,
          modalContentDark: theme,
        })}
        onClick={(e) => e.stopPropagation}
      >
        {/* <div className={styles.modal__title}>{newAuthor?.name}</div> */}
        <div
          className={cx({
            modal__title: true,
            modalTitleDark: theme,
          })}
        >
          {newAuthor?.name}
        </div>
        {/* <div className={styles.modal__body}> */}
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
          <a href="#">Email: {newAuthor?.email}</a>
          <p></p>
          <a href="#">Phone: {newAuthor?.phone}</a>
        </div>
        <button
          className={styles.modal_button}
          onClick={() => console.log(newAuthor)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
