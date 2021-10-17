import React, { useState } from "react";
import "./PostCard.css";
import ModalWindow from "../ModalWindow";

const PostCard = ({ title, content, name, email, website, address, phone }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="postcard-component">
        <div className="postcard-body">
          <h4 className="postcard-title">{title}</h4>
          <p className="postcard-text">{content}</p>
        </div>
        <div className="postcard-footer">
          <button
            type="button"
            className="postcard-button"
            onClick={() => setModalActive(true)}
          >
            Author: <span className="text-blue">{name}</span>
          </button>
        </div>
      </div>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
        name={name}
        email={email}
        website={website}
        address={address}
        phone={phone}
      />
    </>
  );
};

export default PostCard;
