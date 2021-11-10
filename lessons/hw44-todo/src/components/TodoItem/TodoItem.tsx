import React, {FC} from 'react';
import {Task } from 'types/types';
import style from './TodoItem.module.css'
import className from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux';
import {State} from 'store/tasksReducer'

const cx = className.bind(style);

interface Props {
    task: Task;
}

const TodoItem: FC<Props> = ({task}) => {

    const handleEdit = () => {
        console.log('handleEdit')
    }

    const handleDelete = () => {
        console.log('handleDelete')
    }

    const handleCheckbox = () => {
        console.log('handleCheckbox')
    }

    
    return (
        <div className={style.TodoItem}>
            <div>{task.title}</div>
            <div className={style.TodoItemBtns}>
                <input type="checkbox" onChange={handleCheckbox} />
                <button onClick={handleEdit} className={cx('button', 'edit')}></button>
                <button onClick={handleDelete} className={cx('button', 'delete')}></button>
            </div>
            
        </div>
    );
};

export default TodoItem;