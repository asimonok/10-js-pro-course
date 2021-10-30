import React, { useContext } from "react";
import styles from "./User.module.css";
import { ThemeContext } from "../ThemeContext";
import classNames from "classnames/bind";

interface Props {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const cx = classNames.bind(styles);

const User: React.FC<Props> = (props) => {
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <div
        className={cx({
          component: true,
          light: theme === "light",
          dark: theme === "dark",
        })}
      >
        <h2 className={styles.title}>
          {props.name}({props.username})
        </h2>

        <p className={styles.text}>
          Email: {props.email}, phone: {props.phone}, website: {props.website}
        </p>
        <p className={styles.text}>
          Address: {props.address.street}, {props.address.suite},{" "}
          {props.address.city}
          {props.address.zipcode}, {props.address.geo.lat},{" "}
          {props.address.geo.lng}
        </p>
        <p className={styles.text}>
          Company: {props.company.name}, {props.company.catchPhrase},{" "}
          {props.company.bs}
        </p>
      </div>
    </>
  );
};

export default User;
