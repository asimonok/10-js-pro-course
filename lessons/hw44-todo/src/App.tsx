import React, {useState} from 'react';
import './App.css';
import{Task} from 'types/types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {useSelector} from 'react-redux'

function App() {
    const state = useSelector(state => state);
    console.log(state);
    
    const [task, setTask] = useState<string>('');
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    }

    const addTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const newTask  = {taskName: task, isActive: true, isDone: false}
        setTodoList([...todoList, newTask]);
        setTask('');
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
