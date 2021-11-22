import React, { useState, useEffect, useCallback } from "react";
import UserContainer from "components/UserContainer";
import Button from "components/Button";
import Loader from "components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { fetchUsers } from "store/actions/usersAction";

const Users: React.FC = () => {
  const { users, loading } = useSelector((state: RootState) => state.users);
  const [usersAmount, setUsersAmount] = useState(5);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const changeUsersAmount = useCallback(() => {
    setUsersAmount((prevState) => prevState + 5);
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <>
            <UserContainer usersAmount={usersAmount} users={users} />
            <Button
              text="Show more"
              onClick={changeUsersAmount}
              size="medium"
            />
          </>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Users;
