import React, {FC} from 'react';
import {Task} from 'types/types';
import style from './TodoItem.module.css'
import className from 'classnames/bind'

const cx = className.bind(style);

interface Props {
    task: Task;
    handleEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (event:React.MouseEvent<HTMLButtonElement>) => void;
    handleCheckbox: (event:React.ChangeEvent<HTMLInputElement>) => void;
    checked?:boolean;
}

const TodoItem: FC<Props> = ({task, handleEdit, handleDelete, handleCheckbox}) => {
    return (
        <div className={style.TodoItem}>
            <div>{task.taskName}</div>
            <div className={style.TodoItemBtns}>
                <input type="checkbox" onChange={handleCheckbox} />
                <button onClick={handleEdit} className={cx('button', 'edit')}></button>
                <button onClick={handleDelete} className={cx('button', 'delete')}></button>
            </div>
            
        </div>
    );
};

export default TodoItem;