import React from "react";
import "./ModalWindow.css";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const ModalWindow: React.FC<Props> = (props) => {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">{props.name}</h5>
            <button
              type="button"
              className="button-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.setActive(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-address">
              Address: {props.address.city}, {props.address.street},{" "}
              {props.address.suite}, {props.address.zipcode},{" "}
              {props.address.geo.lat}, {props.address.geo.lng}
            </p>
            <p className="modal-contacts">
              Email: {props.email}, phone: {props.phone}, web site:{" "}
              {props.website}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="button-close_bottom"
              data-dismiss="modal"
              onClick={() => props.setActive(false)}
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
