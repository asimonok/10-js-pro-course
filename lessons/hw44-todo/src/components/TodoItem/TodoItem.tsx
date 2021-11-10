import React, {FC, useCallback, useState} from 'react';
import {Task } from 'types/types';
import style from './TodoItem.module.css'
import className from 'classnames/bind'
import { useDispatch} from 'react-redux';
import {toggleTodo, editTodo, removeTodo} from 'store/actions'

const cx = className.bind(style);

interface Props {
    task: Task;
}

const TodoItem: FC<Props> = ({task}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(task.title);


    const handleEdit = useCallback(() => {
        setIsEdit(true);
    }, [setIsEdit])

    const handleDelete = useCallback(() => {
        dispatch(removeTodo(task.id));
    }, [dispatch, task])

    const handleCheckbox = useCallback(() => {
        dispatch(toggleTodo(task.id))
    }, [dispatch, task])

    const handleUpdatedTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedTitle(event.target.value);
    }, [setUpdatedTitle])

    const saveNewTask = useCallback(() =>  {
        dispatch(editTodo(task.id, updatedTitle));
        setIsEdit(false);
    }, [dispatch, task, updatedTitle])


    return (
        <div className={style.TodoItem}>

            {!isEdit && (<>
                <div className={style.TodoTitle}>{task.title}</div>
            </>) }

            {isEdit && (
                <>
                <input type="text" onChange={handleUpdatedTitle} value={updatedTitle}></input>
                </>
            )}
            
            <div className={style.TodoItemBtns}>
                <input type="checkbox" checked={task.isDone} onChange={handleCheckbox} />
                <button 
                  onClick={ isEdit ? saveNewTask : handleEdit} 
                  className={cx({
                    button: true,
                    edit: isEdit === false,
                    editSave: isEdit === true,
                })
                  }></button>
                <button onClick={handleDelete} className={cx('button', 'delete')}></button>
            </div>
            
        </div>
    );
};

export default TodoItem;
 