import React from 'react';
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
