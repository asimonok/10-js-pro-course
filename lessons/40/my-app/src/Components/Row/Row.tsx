import React, { useState, useEffect } from "react";

interface Props {
  //   props: string;
  //   userList: Users[];
}
interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// fetch from src
//filter 5 elements
//write filtered elements in const
// map throw 5 elements and render them
const Row: React.FC<Props> = (props: Props) => {
  const userList: Users[] = [];
  const [users, setUsers] = useState(userList);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res): Promise<Users[]> => {
        //   .then((res) => {
        return res.json();
      })
      .then((userList) => {
        return setUsers(userList);
      })
      .catch((error) => console.log(error));
  }, []); // [] empty - load once when DOM loaded

  const filteredUsers = users.filter((user) => {
    return user.id < 6;
  });
  return (
    <>
      <ul>
        {filteredUsers.map((el) => {
          return (
            <li key={el.id}>
              {el.body}
              {el.id}
              {el.title}
              {el.userId}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Row;
