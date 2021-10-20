import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button";
import UserInfoItem from "Common/UserInfoItem";

interface ModalProps {
  isVisible: boolean;
  user: UserInfoItem;
  onCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, user, onCloseModal } = props;

  if (!isVisible) return null;
  return (
    <div className={styles.modal} onClick={onCloseModal}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{user.name}</h3>
          <span className={styles.modalclose} onClick={onCloseModal}>
            &times;
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.address}>
              Address: {user.address.city} , {user.address.street},
              {user.address.suite}
            </div>
            <div className={styles.contacts}>
              {user.email} {user.phone}
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <Button text="Close" action={onCloseModal} color="light" />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
