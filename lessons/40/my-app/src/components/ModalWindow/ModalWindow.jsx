import React from "react";
import "./ModalWindow.css";

const ModalWindow = ({
  active,
  setActive,
  name,
  email,
  phone,
  website,
  address,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setActive(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Address: {address.city}, {address.street}, {address.suitee},{" "}
              {address.zipcode}
            </p>
            <p>
              Email: {email}, phone: {phone}, web site: {website}
            </p>
            <p>
              Phone: {phone}, web site: {website}
            </p>
            <p>Web site: {website}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => setActive(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
