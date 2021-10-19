import React, { useState } from "react";
import styles from "./PostCard.module.css";
import ModalWindow from "../ModalWindow";
// import classNames from "classames/bind";

// const cx = classNames.bind(styles);

interface Props {
  title: string;
  content: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
  };
}

const PostCard: React.FC<Props> = (props) => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  return (
    <>
      <div className={styles.component}>
        <div className={styles.body}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.text}>{props.content}</p>
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={() => setModal(true)}>
            Author: <span className={styles.bluetext}>{props.name}</span>
          </button>
        </div>
      </div>
      <ModalWindow
        visible={isModal}
        title={props.name}
        content={
          <>
            <p>
              Address: {props.address.city}, {props.address.street},
              {props.address.suite}
            </p>
            <p className={styles.bluetext}>
              Email: {props.email}, phone: {props.phone}, website:
              {props.website}
            </p>
          </>
        }
        onClose={onClose}
      />
    </>
  );
};

export default PostCard;
