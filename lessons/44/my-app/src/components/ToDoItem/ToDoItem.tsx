import React, { useRef } from "react";
import styles from "./ToDoItem.module.css";

const ToDoItem = ({
  id,
  text,
  complete,
  onToggleClick,
}: {
  id: number;
  text: string;
  complete: boolean;
  onToggleClick: (id: number) => void;
}) => {
  let radio = useRef<HTMLInputElement>(null);
  const handleToggleClick = (id: number) => {
    if (radio && radio.current) {
      radio.current.checked = false;
      onToggleClick(id);
    }
  };
  return (
    <>
      <div className={styles.item}>
        <input
          className={styles.input}
          ref={radio}
          type="radio"
          checked={complete}
          onClick={() => handleToggleClick(id)}
        />
        <span
          className={styles.content}
          style={{ textDecoration: complete ? "line-through" : "none" }}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default ToDoItem;
