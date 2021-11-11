import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import AddForm from './components/Todo-add-form';
import FilterPannel from './components/Todo-filter-pannel';
import { store } from './store/store';

import ClearPannel from './components/Todo-clear-pannel';
import {Data} from './types/Data';

function App() {
  
  const [id, setId] = useState('5');
  const [task, setTask] = useState('');
  const [data, setData] = useState<Data[]>([]);

  return (
    
    <div className="App">
      <div className="container">
        <AddForm/> 
      </div>
    </div>
  );
}

export default App;
