import React from 'react';
import './App.css';
import TodoInput from 'components/TodoInput';
import TodoList from 'containers/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
