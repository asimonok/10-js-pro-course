import React, {FC} from 'react';
import {Task} from 'types/types';
import TodoItem from '../TodoItem';
import style from './TodoList.module.css'

interface Props {
    tasks: Task[];
    handleEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (taskNameToDelete: string) => void;
    handleCheckbox: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoList:FC<Props> = ({tasks, handleEdit, handleDelete, handleCheckbox}) => {
    return (
         <div className={style.TodoList}>{
            tasks.map((task: Task, key:number) => {
                return <TodoItem 
                         handleCheckbox={handleCheckbox} 
                         handleEdit={handleEdit} 
                         handleDelete={() => handleDelete(task.taskName)} 
                         task={task}  
                         key={key}
                         checked={task.isDone}
                        />
            })}
         </div>
    );
};

export default TodoList;