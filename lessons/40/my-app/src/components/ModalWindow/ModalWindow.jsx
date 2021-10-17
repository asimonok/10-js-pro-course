import React, { useState, useEffect } from "react";
import "./ModalWindow.css";

// const ModalWindow = () => {
//   const [active, setActive] = useState([]);
//   const [author, setAuthor] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/:userId")
//       .then((response) => {
//         return response.json();
//       })
//       .then((author) => setAuthor(author))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div
//       className={active ? "modal active" : "modal"}
//       onClick={() => setActive(false)}
//     >
//       <div className="modal-dialog" role="document">
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <div className="modal-header">
//             <h5 className="modal-title">{author.name}</h5>
//             <button
//               type="button"
//               className="button-close"
//               data-dismiss="modal"
//               aria-label="Close"
//               onClick={() => setActive(false)}
//             >
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <p className="modal-address">Address: {author.address}</p>
//             <p className="modal-contacts">
//               Email: {author.email}, phone: {author.phone}, web site:{" "}
//               {author.website}
//             </p>
//           </div>
//           <div className="modal-footer">
//             <button
//               type="button"
//               className="button-close_bottom"
//               data-dismiss="modal"
//               onClick={() => setActive(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalWindow;

const ModalWindow = ({
  active,
  setActive,
  name,
  email,
  phone,
  website,
  // address: {}
  city,
  street,
  suitee,
  zipcode,
  geo,
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
              className="button-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setActive(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-address">
              Address: {city}, {street}, {suitee}, {zipcode}, {geo}
              {/* Address: {address.city}, {address.street}, {address.suitee},{" "}
              {address.zipcode}, {address.geo} */}
            </p>
            <p className="modal-contacts">
              Email: {email}, phone: {phone}, web site: {website}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="button-close_bottom"
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
