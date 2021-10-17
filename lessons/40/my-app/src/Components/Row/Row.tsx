import axios from "axios";
import React, {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
  ContextType,
} from "react";
import { Spinner } from "react-bootstrap";
import { LoadingContext, LoadingProvider, VarContext } from "../../myContext";
import "./Row.css";

interface Props {
  //   loading: boolean;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  //   setLoad: Dispatch<SetStateAction<boolean>>;
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
const Row: React.FC<Props> = (props) => {
  const userList: Users[] = [];
  const [users, setUsers] = useState(userList);
  const [value, setValue] = useContext(VarContext);
  const [loading, setLoading] = useContext(LoadingContext);

  const loadFunction = async () => {
    try {
      //   setLoading(true);

      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res: any) => {
          console.log(res);
          setUsers(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setValue(5); // change list number to 5 when loaded
    loadFunction();
    // props.setLoad(true);
    // setLoading(true);

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res): Promise<Users[]> => {
    //     //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((userList) => {
    //     return setUsers(userList);
    //   })
    //   .catch((error) => console.log(error));
  }, []); // [] empty - load once when DOM loaded

  const filteredUsers = users.filter((user) => {
    return user.id <= value;
  });
  // make global prop for filtered numbers
  return (
    <>
      <ul className="usersList">
        {filteredUsers.map((el) => {
          return (
            <li className="card" key={el.id}>
              <h2 className="card__title">{el.title}</h2>
              <p className="card__body">{el.body}</p>
              <p className="card__author">
                Author:{" "}
                <button
                  className="card__button"
                  onClick={() => props.setActive(true)}
                >
                  Vlad Folse
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Row;
