import React, {FC, useState, useCallback} from 'react';
import Button from '../Button';
import {useDispatch, useSelector} from 'react-redux';
import {TaskActionTypes} from 'types/types'
import {addTodo} from 'store/actions';

interface Props {
    // task: string;
    // onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoInput: FC<Props> = () => {
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
        <div>
            <input type="text" onChange={onChangeName} placeholder="Add a task"  value={newTask}></input>
            <Button
              name="Add new task"
              handleClick={onAddTask}
            />
        </div>
    );
};

export default TodoInput;
