import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ThemeContext } from "../ThemeContext";
import Button from "../Button";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <header
      className={cx({
        header: true,
        light: theme === "light",
        dark: theme === "dark",
      })}
    >
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <NavLink
            to="/posts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Posts
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink
            to="/users"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Users
          </NavLink>
        </li>
      </ul>
      <Button />
    </header>
  );
};
export default Header;
