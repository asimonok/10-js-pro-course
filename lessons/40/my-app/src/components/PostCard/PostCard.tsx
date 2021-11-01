import React, { useState, useContext } from "react";
import { Link, generatePath } from "react-router-dom";
import styles from "./PostCard.module.css";
import ModalWindow from "../ModalWindow";
import { ThemeContext } from "../ThemeContext";
import classNames from "classnames/bind";

enum RoutePath {
  postDetails = "/posts/:postId",
  comments = "/posts/:postId/comments",
}

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
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

const cx = classNames.bind(styles);

const PostCard: React.FC<Props> = (props) => {
  const [theme] = useContext(ThemeContext);
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  return (
    <>
      <div
        className={cx({
          component: true,
          light: theme === "light",
          dark: theme === "dark",
        })}
      >
        <div className={styles.body}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.text}>{props.body}</p>
          <Link
            to={generatePath(RoutePath.postDetails, {
              postId: props.id,
            })}
            className={styles.link}
          >
            Post details
          </Link>
        </div>
        <div className={styles.footer}>
          <button
            className={cx({
              button: true,
              light: theme === "light",
              dark: theme === "dark",
            })}
            onClick={() => setModal(true)}
          >
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

// import React, { useState, useContext, useEffect } from "react";
// import { Link, generatePath } from "react-router-dom";
// import styles from "./PostCard.module.css";
// import ModalWindow from "../ModalWindow";
// import { ThemeContext } from "../ThemeContext";
// import classNames from "classnames/bind";

// enum RoutePath {
//   postDetails = "/posts/:postId",
//   comments = "/posts/:postId/comments",
// }

// interface Props {
//   post: Post;
//   user: User;
//   users: User[];
// }

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }
// // interface Props {
// //   userId: number;
// //   id: number;
// //   title: string;
// //   body: string;
// //   name: string;
// //   email: string;
// //   phone: string;
// //   website: string;
// //   address: {
// //     city: string;
// //     street: string;
// //     suite: string;
// //   };
// // }

// const cx = classNames.bind(styles);

// const PostCard: React.FC<Props> = (props) => {
//   const { post, users } = props;
//   const [theme] = useContext(ThemeContext);
//   const [isModal, setModal] = useState(false);
//   const onClose = () => setModal(false);
//   const [user, setUser] = useState<User>();

//   useEffect(() => {
//     setUser(
//       users.find((user) => {
//         return user.id === post.userId;
//       })
//     );
//   }, [users, post]);

//   return (
//     <>
//       <div
//         className={cx({
//           component: true,
//           light: theme === "light",
//           dark: theme === "dark",
//         })}
//       >
//         <div className={styles.body}>
//           <h4 className={styles.title}>{post.title}</h4>
//           <p className={styles.text}>{post.body}</p>
//           <Link
//             to={generatePath(RoutePath.postDetails, {
//               postId: post.id,
//             })}
//             className={styles.link}
//           >
//             Post details
//           </Link>
//         </div>
//         <div className={styles.footer}>
//           <button
//             className={cx({
//               button: true,
//               light: theme === "light",
//               dark: theme === "dark",
//             })}
//             onClick={() => setModal(true)}
//           >
//             Author: <span className={styles.bluetext}>{props.user.name}</span>
//           </button>
//         </div>
//       </div>
//       <ModalWindow
//         visible={isModal}
//         title={props.user.name}
//         content={
//           <>
//             <p>
//               Address: {props.user.address.city}, {props.user.address.street},
//               {props.user.address.suite}
//             </p>
//             <p className={styles.bluetext}>
//               Email: {props.user.email}, phone: {props.user.phone}, website:
//               {props.user.website}
//             </p>
//           </>
//         }
//         onClose={onClose}
//       />
//     </>
//   );
// };

// export default PostCard;

// import React, { useState, useContext } from "react";
// import { Link, generatePath } from "react-router-dom";
// import styles from "./PostCard.module.css";
// import ModalWindow from "../ModalWindow";
// import { ThemeContext } from "../ThemeContext";
// import classNames from "classnames/bind";

// enum RoutePath {
//   postDetails = "/posts/:postId",
//   comments = "/posts/:postId/comments",
// }

// interface Props {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: {
//     city: string;
//     street: string;
//     suite: string;
//   };
// }

// const cx = classNames.bind(styles);

// const PostCard: React.FC<Props> = (props) => {
//   const [theme] = useContext(ThemeContext);
//   const [isModal, setModal] = useState(false);
//   const onClose = () => setModal(false);
//   return (
//     <>
//       <div
//         className={cx({
//           component: true,
//           light: theme === "light",
//           dark: theme === "dark",
//         })}
//       >
//         <div className={styles.body}>
//           <h4 className={styles.title}>{props.title}</h4>
//           <p className={styles.text}>{props.body}</p>
//           <Link
//             to={generatePath(RoutePath.postDetails, {
//               postId: props.id,
//             })}
//             className={styles.link}
//           >
//             Post details
//           </Link>
//         </div>
//         <div className={styles.footer}>
//           <button
//             className={cx({
//               button: true,
//               light: theme === "light",
//               dark: theme === "dark",
//             })}
//             onClick={() => setModal(true)}
//           >
//             Author: <span className={styles.bluetext}>{props.name}</span>
//           </button>
//         </div>
//       </div>
//       <ModalWindow
//         visible={isModal}
//         title={props.name}
//         content={
//           <>
//             <p>
//               Address: {props.address.city}, {props.address.street},
//               {props.address.suite}
//             </p>
//             <p className={styles.bluetext}>
//               Email: {props.email}, phone: {props.phone}, website:
//               {props.website}
//             </p>
//           </>
//         }
//         onClose={onClose}
//       />
//     </>
//   );
// };

// export default PostCard;
