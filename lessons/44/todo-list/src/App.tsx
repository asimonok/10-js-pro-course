import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import AddForm from './components/Todo-add-form';
import FilterPannel from './components/Todo-filter-pannel';
import List from './components/Todo-list';
import ClearPannel from './components/Todo-clear-pannel';
import {Data} from './types/Data';

function App() {

  const [id, setId] = useState(5);
  const [task, setTask] = useState('');
  const [data, setData] = useState<Data[]>([]);
  const [list, setList] = useState<Data[]>([]);
  const [filter, setFilter] = useState('all');

  const onEdit = () => {
    console.log('onEdit')
    
  }
  const onDelete = (deletedTask: string): void => {
    const newList= list.filter(item => item.task !== deletedTask);
    setList(newList);
  }

  const addTask = (): void => {
        const newTask  = {task: task, id: id, isActive: true, isDone: false}
        setData([...data, newTask]);
        setTask('');
    }

  // const  filterPost = (items: any, filter: string) => {
  //     switch (filter) {
  //       case 'done':
  //         return items.filter(item => item.isDone);
  //       case 'todo':
  //         return items.filter(item => item.isActive);
  //       default:
  //         return items
  //     }
  //   }
  
  // const  onFilterSelect = (filter: string) => {
  //     setFilter(filter);
  //   }
  
  // const visibleData = filterPost(data, filter);

  return (
    
    <div className="App">
      <div className="container">
        <AddForm
          task={task}
          id={id}
          data={data}
          //onClick={addTask}
          />
        {/* <FilterPannel
          text={text}
          onClick={onClick}
          /> */}
        <List
          id={id}
          task={task}
          data={data}
          onDelete={() => onDelete(task)}
          onEdit={onEdit }
          />
        <ClearPannel/>
      </div>
    </div>
  );
}

export default App;
