import React from "react";
import styles from "./NoMatch.module.css";
import classNames from "classnames/bind";
import { useHistory } from "react-router";
import Button from "components/Button";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const cx = classNames.bind(styles);

const NoMatch: React.FC = () => {
  const newTheme = useSelector((state: RootState) => state.theme.theme);
  const history = useHistory();

  return (
    <div className={cx("noMatch", { dark: newTheme === "dark" })}>
      <div className={styles.title}>404: not found</div>
      <Button
        size="medium"
        text="Back to page Posts"
        onClick={() => {
          history.replace("/posts");
        }}
      />
    </div>
  );
};

export default NoMatch;
