import React, {useState} from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  return (

    <div className='App-container'>
      <h1>Todo Input</h1>
      <TodoInput/>
      <h2>Todo List </h2>
      <TodoList/>

      
    </div>
  );
}

export default App;


// function App() {
  
//   const dispatch = useDispatch();

//   const todoList = useSelector((state: RootState) => state.todoListReducer.todoList)
//   console.log('todoList: ',todoList);

//   const [inputValue, setInputValue] = useState<string>('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setInputValue(event.target.value);
//   }
//   const handleCheckbox = (event:React.ChangeEvent<HTMLInputElement>): void =>  {
//     if(event.target.checked) {
//       dispatch({type: TaskActionTypes.DANE_TASK})
//       dispatch({type: TaskActionTypes.DANE_TASK})
//     }
//   };

//   const addTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
//     console.log('addtask clicked')
//     if( inputValue) {
//       const newTask  = {taskName: inputValue, isActive: true, isDone: false} 
//       dispatch({type: todoListActionTypes.ADD_TODO, payload: newTask})
//       setInputValue('');
//     }
//   }

//   const handleEdit = () => {
//     console.log('handleEdit')
//   }
  
//   const handleDelete = (taskNameToDelete: string): void => {
//     console.log('handleDelete is clicked')
//     // const updatedTodoList= todoList.filter(task => task.taskName !== taskNameToDelete)
//     // setTodoList(updatedTodoList)
//   }

//   const addTodo = (task: string) => {
//     console.log('addTodo');
//     const newTask = {
//       taskName: task,
//       isDone: false,
//       isActive: true,
//     }
//     dispatch({type: todoListActionTypes.ADD_TODO, payload: newTask })
//   }
//   const deleteTodo = (task: string) => {
//     console.log('deleteTodo');
//     const newTask = {
//       taskName: task,
//       isDone: false,
//       isActive: true,
//     }
//     dispatch({type: todoListActionTypes.ADD_TODO, payload: newTask })
//   }

// return (
//   <div className='App-container'>
//     <TodoInput
//       task = {inputValue} 
//       onChange={handleChange}
//       onClick={addTask}
//     />
//     <button onClick={() => {addTodo('new task!')}}>add</button>
//     <button onClick={() => {deleteTodo('new task!')}}>delete</button>
//     {todoList.length > 0 ? 
//       <div>

//       <ul>
//         {/* {todoList.map((todo) => {
//            return <div>{todo}</div>
//           })
//         } */}

//       </ul>
         


//       </div>
//       :
//       <div>There are no tasks so far!</div>
//     }
    
//   </div>
// );
// }