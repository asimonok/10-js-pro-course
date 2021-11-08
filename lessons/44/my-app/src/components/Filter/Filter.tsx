import React from "react";
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE,
  setFilter,
} from "../../redux/actions";
import { connect } from "react-redux";
import { TodoActionTypes } from "../../redux/types";
import styles from "./Filter.module.css";

const mapDispatchToProps = {
  setFilter,
};
const Filter = ({
  setFilter,
}: {
  setFilter: (filter: string) => TodoActionTypes;
}) => {
  return (
    <>
      <div className={styles.flexbox}>
        <button
          type="button"
          onClick={() => setFilter(FILTER_ALL)}
          className={styles.button}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter(FILTER_ACTIVE)}
          className={styles.button}
        >
          Todo
        </button>
        <button
          type="button"
          onClick={() => setFilter(FILTER_COMPLETE)}
          className={styles.button}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Filter);
