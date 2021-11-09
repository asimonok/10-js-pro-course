import React, { useState, useCallback } from 'react';
import styles from './TodoInput.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button';
import { addTodo } from 'redux/actions/actions';

const TodoInput: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addOnClick = useCallback(() => {
    dispatch(addTodo(input));
    setInput('');
  }, [dispatch, input]);

  return (
    <>
      <input
        type="text"
        className={styles.searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
      />
      <Button text="Add" onClick={addOnClick} />
    </>
  );
};

export default TodoInput;
