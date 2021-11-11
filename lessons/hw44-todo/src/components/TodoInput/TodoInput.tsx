import React, {FC, useState, useCallback} from 'react';
import Button from '../Button';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from 'store/actions';
import style from './TodoInput.module.css'

const TodoInput = () => {
    const [newTask, setNewTask] = useState('');

    const dispatch = useDispatch();

    const onChangeName = useCallback( (event: React.ChangeEvent<HTMLInputElement>): void => {
            setNewTask(event.target.value);
        }, [setNewTask])

    const onAddTask = useCallback(()=>{
        dispatch(addTodo(newTask))
        setNewTask('');
    }, [dispatch, newTask ])    

    return (
        <div className={style.TodoInputWrapper}>
            <input className={style.TodoInput} type="text" onChange={onChangeName} placeholder="Add a task"  value={newTask}></input>
            <Button
              name="Add new task"
              handleClick={onAddTask}
            />
        </div>
    );
};

export default TodoInput;
