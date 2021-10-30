// import React, { useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import styles from "./PostDetails.module.css";

// const PostDetails = () => {
//   const params = useParams<{ postId: string; title: string; body: string }>();
//   const history = useHistory();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("");
//       })
//       .catch(() => {
//         history.replace("/posts");
//       });
//   }, []);

//   return (
//     <>
//       <h1>Post details {params.postId}</h1>;
//       <div className={styles.body}>
//         <h4 className={styles.title}>{params.title}</h4>
//         <p className={styles.text}>{params.body}</p>
//       </div>
//     </>
//   );
// };

// export default PostDetails;

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./PostDetails.module.css";

// interface Props {
//   title: string;
//   body: string;
// }

const PostDetails = () => {
  const params = useParams<{ postId: string; title: string; body: string }>();
  const history = useHistory();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postPromise = fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("");
    });
    const commentsPromise = fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("");
    });
    Promise.all([postPromise, commentsPromise])
      .then(([post, comments]) => {
        setPost(post);
        setComments(comments);
      })
      .catch(() => {
        history.replace("/notfound");
      });
  }, []);

  return (
    <>
      <h1>Post details {params.postId}</h1>
      <div className={styles.body}>
        <h4 className={styles.title}>{params.title}</h4>
        <p className={styles.text}>{params.body}</p>
      </div>
    </>
  );
};

export default PostDetails;
