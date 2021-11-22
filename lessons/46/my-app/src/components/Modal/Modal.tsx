import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const cx = classNames.bind(styles);

interface ModalProps {
  isVisible: boolean;
  title: string;
  children: JSX.Element;
  onCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, title, children, onCloseModal } = props;
  const newTheme = useSelector((state: RootState) => state.theme.theme);

  if (!isVisible) return null;
  return (
    <div className={styles.modal}>
      <div
        className={cx("dialog", { dark: newTheme === "dark" })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.modalclose} onClick={onCloseModal}>
            &times;
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>{children}</div>
        </div>
        <footer className={styles.footer}>
          <Button text="Close" onClick={onCloseModal} size="medium" />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
