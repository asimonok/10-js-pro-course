import React from 'react';
import './App.css';
import AddForm from './components/Todo-add-form';
import FilterPannel from './components/Todo-filter-pannel';
import List from './components/Todo-list';
import ClearPannel from './components/Todo-clear-pannel';

function App() {
  return (
    <div className="App">
      <AddForm/>
      <FilterPannel/>
      <List/>
      <ClearPannel/>
    </div>
  );
}

export default App;
