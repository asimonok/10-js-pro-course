import React, {useState} from 'react';
import './App.css';
import{TaskActionTypes, todoListActionTypes} from 'types/types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from './store'


function App() {
  
  const dispatch = useDispatch();
    // const task = useSelector((state: RootState) => state.taskReducer);
    // console.log('task: ',task)
    const todoList = useSelector((state: RootState) => state.todoListReducer.todoList)
    console.log(todoList);

    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);
    }
    const handleCheckbox = (event:React.ChangeEvent<HTMLInputElement>): void =>  {
      if(event.target.checked) {
        dispatch({type: TaskActionTypes.DANE_TASK})
        dispatch({type: TaskActionTypes.DANE_TASK})
      }
    };

    const addTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
      console.log('addtask clicked')
      if( inputValue) {
        const newTask  = {taskName: inputValue, isActive: true, isDone: false} 
         dispatch({type: todoListActionTypes.ADD_TODO, payload: newTask})
         setInputValue('');
      }
    }

    const handleEdit = () => {
      console.log('handleEdit')
    }
    
    const handleDelete = (taskNameToDelete: string): void => {
      console.log('handleDelete is clicked')
      // const updatedTodoList= todoList.filter(task => task.taskName !== taskNameToDelete)
      // setTodoList(updatedTodoList)
    }

  return (
    <div className='App-container'>
      <TodoInput
        task = {inputValue} 
        onChange={handleChange}
        onClick={addTask}
      />

      {todoList.length > 0 ? 
        <div>
          <TodoList 
            handleEdit={handleEdit} 
            handleDelete={handleDelete} 
            handleCheckbox={handleCheckbox}
            tasks={todoList}/>
        </div>
        :
        <div>There are no tasks so far!</div>
      }
      
    </div>
  );
}

export default App;
