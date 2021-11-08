import React, {useState} from 'react';
import './App.css';
import{Task} from 'types/types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {useDispatch, useSelector} from 'react-redux'

function App() {
    const todo = useSelector<Task, Task['taskName'] >(state => state.taskName);
    console.log(todo);

    const dispatch = useDispatch();

    const [task, setTask] = useState<string>('');
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    }

    // const addTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
    //     const newTask  = {taskName: task, isActive: true, isDone: false}
    //     setTodoList([...todoList, newTask]);
    //     setTask('');
    // }

    const addTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const newTask  = {taskName: task, isActive: true, isDone: false}
        dispatch({type: 'ADD_NOTE', payload: newTask})
    }

    const handleEdit = () => {
      console.log('handleEdit')
      
    }
    const handleDelete = (taskNameToDelete: string): void => {
      console.log('handleDelete is clicked')
      const updatedTodoList= todoList.filter(task => task.taskName !== taskNameToDelete)
      setTodoList(updatedTodoList)
    }

  return (
    <div className='App-container'>
      <TodoInput 
        task={task}
        onChange={handleChange}
        onClick={addTask}
      />
      <TodoList handleEdit={handleEdit} handleDelete={handleDelete} tasks={todoList}/>
    </div>
  );
}

export default App;
