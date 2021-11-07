import React from 'react';
import './App.css';
import AddForm from './components/Todo-add-form';
import FilterPannel from './components/Todo-filter-pannel';
import List from './components/Todo-list';
import ClearPannel from './components/Todo-clear-pannel';

function App() {

  const data = [
    {task: 'Learn ReactJS basics', id:1}, 
    {task: 'Practive ReactJS', id:2},
    {task: 'Learn Redux', id:3},
    {task: 'Code portfolio in React', id:4}];

  const maxId = data.length + 1;


  return (
    <div className="App">
      <div className="container">
      <AddForm/>
        <FilterPannel/>
        <List 
           // key={id}
            data={data}
             // onCorrect={onCorrect}
              //onDelete={onDelete}
             // onToggleProp={onToggleProp}
             />
        <ClearPannel/>
      </div>
    </div>
  );
}

export default App;
