import React, {FC} from 'react';
import {Task} from 'types/types';
import TodoItem from '../TodoItem';
import style from './TodoList.module.css'

interface Props {
    tasks: Task[];
    handleEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (taskNameToDelete: string) => void;
}

const TodoList:FC<Props> = ({tasks, handleEdit, handleDelete }) => {
    return (
         <div className={style.TodoList}>{
            tasks.map((task: Task, key:number) => {
                return <TodoItem handleEdit={handleEdit} handleDelete={() => handleDelete(task.taskName)} task={task}  key={key}/>
            })}
         </div>
    );
};

export default TodoList;