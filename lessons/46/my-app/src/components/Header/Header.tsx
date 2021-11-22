import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Themes } from "Common/Themes";
import Button from "../Button";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "store/actions/themeAction";
import { RootState } from "store/store";

const cx = classNames.bind(styles);

const Header: React.FC = () => {
  const newTheme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(
      changeTheme(newTheme === Themes.light ? Themes.dark : Themes.light)
    );
  };

  return (
    <div className={cx("container", { dark: newTheme === "dark" })}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <NavLink to="/posts" exact activeClassName={styles.activeLink}>
            Posts
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/users" exact activeClassName={styles.activeLink}>
            Users
          </NavLink>
        </li>
      </ul>
      <div>
        <Button
          text={`Change ${newTheme} theme`}
          onClick={toggleTheme}
          size="small"
        />
      </div>
    </div>
  );
};

export default Header;
