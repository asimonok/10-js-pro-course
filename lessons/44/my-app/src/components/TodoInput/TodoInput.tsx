import React, { useState, useCallback } from 'react';
import styles from './TodoInput.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button';
import { addTodo } from 'redux/actions/actions';
import InputIcon from 'img/InputIcon.svg';

const TodoInput: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addOnClick = useCallback(() => {
    dispatch(addTodo(input));
    setInput('');
  }, [dispatch, input]);

  return (
    <div className={styles.todoInputComponent}>
      <h2 className={styles.title}>TodoInput</h2>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <div className={styles.inputIcon}>
            <img
              className={styles.inputIconItem}
              src={InputIcon}
              alt="input-icon"
            />
          </div>
          <input
            type="text"
            className={styles.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            placeholder="New Todo"
            value={input}
          />
        </div>
        <Button text="Add" onClick={addOnClick} />
      </div>
    </div>
  );
};

export default TodoInput;
