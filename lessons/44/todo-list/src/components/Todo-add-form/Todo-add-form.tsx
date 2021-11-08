import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import MyButton from '../Button'; 
import {Data} from'../../types/Data';

import './Todo-add-form.css';

interface Props {
    id: number,
    task: string,
    data: Data[],
    //onClick: () => void
}

const AddForm = (props: Props) => {

    const [task, setTask] = useState('');
    const [data, setData] = useState<Data[]>([]);
    const [value1, setValue1] = useState('');

    let maxId = 4;

     const addTask = (): void => {
        const newTask  = {task: task, id: maxId++, isActive: true, isDone: false}
        setData([...data, newTask]);
        setTask('');
    }

    // const dispatch = useDispatch();

    // const addTask = (): void => {
    //     const newTask  = {task: task, id: maxId++, isActive: true, isDone: false}
    //     dispatch({type: 'ADD_TASK', payload: newTask})
    // }

    return (
        <>
            <h2>TodoInput</h2>
            <form className="form">
                <input 
                    className="input" 
                    placeholder="New Todo" 
                    value={task} 
                    onChange={event => setValue1(event.target.value)}/>
                <MyButton text="Add new task"
                         // onClick={addItem}
                          />
            </form>
        </>
    )
}

export default AddForm;