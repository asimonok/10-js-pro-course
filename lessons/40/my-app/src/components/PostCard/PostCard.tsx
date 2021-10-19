import React, { useState } from "react";
import "./PostCard.css";
import ModalWindow from "../ModalWindow";

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
      <div className="postcard-component">
        <div className="postcard-body">
          <h4 className="postcard-title">{props.title}</h4>
          <p className="postcard-text">{props.content}</p>
        </div>
        <div className="postcard-footer">
          <button
            type="button"
            className="postcard-button"
            onClick={() => setModal(true)}
          >
            Author: <span className="text-blue">{props.name}</span>
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
            <p className="text-blue">
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

// interface Props {
//   title: string;
//   content: string;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: {
//     city: string;
//     street: string;
//     suite: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
// }

// const PostCard: React.FC<Props> = (props) => {
//   const [modalActive, setModalActive] = useState(false);
//   return (
//     <>
//       <div className="postcard-component">
//         <div className="postcard-body">
//           <h4 className="postcard-title">{props.title}</h4>
//           <p className="postcard-text">{props.content}</p>
//         </div>
//         <div className="postcard-footer">
//           <button
//             type="button"
//             className="postcard-button"
//             onClick={() => setModalActive(true)}
//           >
//             Author: <span className="text-blue">{props.name}</span>
//           </button>
//         </div>
//       </div>
//       <ModalWindow
//         active={modalActive}
//         setActive={setModalActive}
//         name={props.name}
//         email={props.email}
//         phone={props.phone}
//         website={props.website}
//         address={props.address}
//       />
//     </>
//   );
// };

// export default PostCard;
