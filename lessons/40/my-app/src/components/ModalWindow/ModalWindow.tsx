import React, { ReactElement, useEffect } from "react";
import styles from "./ModalWindow.module.css";

interface ModalProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  onClose: () => void;
}

const ModalWindow = ({
  visible = false,
  title = "",
  content = "",
  onClose,
}: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>{content}</div>
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
