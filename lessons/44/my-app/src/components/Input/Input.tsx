import React from "react";
import { addItem } from "../../redux/actions";
import { connect } from "react-redux";
import { TodoActionTypes } from "../../redux/types";
import styles from "./Input.module.css";

const mapDispatchToProps = {
  addItem,
};
const Input = ({ addItem }: { addItem: (item: string) => TodoActionTypes }) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (e.key === "Enter") {
      if (e.target.value && e.target.value.trim().length > 0) {
        addItem(e.target.value);
      }
      e.target.value = "";
    }
  };
  return (
    <>
      <input
        className={styles.input}
        id="todoText"
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Add an item and press Enter"
      />
    </>
  );
};

export default connect(null, mapDispatchToProps)(Input);
