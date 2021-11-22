import React from "react";
import styles from "./UserContainer.module.css";
import User from "components/User";
import UserInfoItem from "Common/UserInfoItem";

interface AmountUsersProps {
  usersAmount: number;
  users: UserInfoItem[];
}

const UsersContainer: React.FC<AmountUsersProps> = (props) => {
  const { usersAmount, users } = props;

  const visibleUserItems = (): UserInfoItem[] => {
    if (!users) {
      return [];
    }
    return users.slice(0, usersAmount);
  };

  return (
    <div className={styles.users}>
      {visibleUserItems().map((user) => {
        return <User user={user} key={user.name} />;
      })}
    </div>
  );
};

export default UsersContainer;
