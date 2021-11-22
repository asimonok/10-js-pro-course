import React from "react";
import styles from "./User.module.css";
import UserInfoItem from "Common/UserInfoItem";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface UserProps {
  user: UserInfoItem;
}

const User: React.FC<UserProps> = (props) => {
  const { user } = props;
  const newTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={cx("item", { dark: newTheme === "dark" })}>
      <div className={styles.text}>
        {" "}
        <span className={styles.textaccent}>Username:</span> {user.username}
      </div>
      <div className={styles.text}> Email: {user.email}</div>
      <div className={styles.text}>
        <span className={styles.textaccent}>Adress:</span>
        <span> street: {user.address.street}</span>
        <span> suite: {user.address.suite}</span>
        <span> city: {user.address.city}</span>
      </div>
      <div className={styles.text}>
        <span className={styles.textaccent}>Contacts:</span>
        <div> phone: {user.phone}</div>
        <div> website: {user.website}</div>
        <div> company: {user.company.name}</div>
      </div>
    </div>
  );
};

export default User;
