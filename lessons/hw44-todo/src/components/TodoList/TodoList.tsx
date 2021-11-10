import React, {FC} from 'react';
import {Task} from 'types/types';
import style from './TodoList.module.css'
import {useSelector } from 'react-redux';
import {State} from 'store/tasksReducer'
import { RootState } from 'store/index';
import TodoItem from 'components/TodoItem'

// interface Props {
//     tasks: Task[];
//     handleEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
//     handleDelete: (taskNameToDelete: string) => void;
//     handleCheckbox: (event:React.ChangeEvent<HTMLInputElement>) => void;
// }

const TodoList = () => {
    const items = useSelector((state:RootState) => state.tasks.items);
    // const todos = useSelector((state: RootState) => state.todos.todos);

    // useSelector((state: RootState) => state.todos.todos

    console.log(items)
    return (
        // <h3>Task list is here</h3>
        <div>
          {items.length > 0 ? 
            <div className={style.TodoList}>{
                items.map(item => <TodoItem key={item.id} task={item}/>)
            }</div>
            :
            <div>There are no tasks so far!</div>
            }
         </div>
    );
};

export default TodoList;