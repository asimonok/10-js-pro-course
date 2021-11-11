import React, { useCallback } from 'react';
import style from './TodoList.module.css'
import {useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/index';
import TodoItem from 'components/TodoItem'
import Button from 'components/Button';
import { TaskFilter } from 'store/actions';
import {filterTodo, deleteAllTodo, deleteDoneTodo} from 'store/actions';


const TodoList = () => {
    const items = useSelector((state:RootState) => state.tasks.items);
    const activeFilter = useSelector((state:RootState) => state.tasks.filter);
    const filteredItems= items.filter(item => {
        if(activeFilter === 'Done') {
            return item.isDone
        } else if (activeFilter === 'Todo') {
            return !item.isDone
        } else {
            return item;
        }
    })

    const dispatch = useDispatch();

    const handleDeletAll = useCallback(() => {
        dispatch(deleteAllTodo());
    },[dispatch])

    const handleDeletDone = useCallback(() => {
        dispatch(deleteDoneTodo());
    },[dispatch])

    return (
        <div className={style.TodoList}>
            
          {items.length > 0 ? 
          <>
             <div className={style.TodoListBtn}>
                {Object.values(TaskFilter).map(filter =>
                    <Button 
                        key={filter} 
                        disabled={activeFilter===filter} 
                        name={filter} 
                        handleClick={() => { dispatch( filterTodo(filter)) }}/>
                )}
            </div>
            <div >{
                filteredItems.map(item => <TodoItem key={item.id} task={item}/>)
            }</div>
            <div className={style.TodoListDelete}>
                <Button  name="Delete done tasks" handleClick={handleDeletDone} bgColor="delete"/>
                <Button name="Delete all tasks" handleClick={handleDeletAll} bgColor="delete" />
            </div>
           </>
            :
            <div className={style.noTasks}>There are no tasks so far!</div>
            }

            
        </div>
    )
         
};

export default TodoList;