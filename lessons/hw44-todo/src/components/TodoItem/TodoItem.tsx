import React, {FC, useState} from 'react';
import {Task } from 'types/types';
import style from './TodoItem.module.css'
import className from 'classnames/bind'
import { useDispatch} from 'react-redux';
import {toggleTodo, addTodo, editTodo, removeTodo} from 'store/actions'
import TodoInput from 'components/TodoInput'


const cx = className.bind(style);

interface Props {
    task: Task;
}

const TodoItem: FC<Props> = ({task}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(task.title);


    const handleEdit = () => {
        setIsEdit(true);
    }

    const handleDelete = () => {
        console.log('handleEdit')
        dispatch(removeTodo(task.id));
    }

    const handleCheckbox = () => {
        console.log('handleCheckbox')
        dispatch(toggleTodo(task.id))
    }

    const handleUpdatedTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedTitle(event.target.value);
    }

    const saveNewTask = () =>  {
        console.log('saveNewTask');
        dispatch(editTodo(task.id, updatedTitle));
        setIsEdit(false);
    }


    return (
        <div className={style.TodoItem}>
            {!isEdit && (<>
                <div className={style.TodoTitle}>{task.title}</div>
            </>) }

            {isEdit && (
                <>
                {/* <input type='text' value={task.title}></input> */}
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
