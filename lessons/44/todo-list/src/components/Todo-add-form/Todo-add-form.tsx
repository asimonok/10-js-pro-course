import React, {useState, useCallback, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../Button'; 
import {addTodo} from'../../store/reducer';
import ListItem from '../Todo-list-item';
import FilterPannel from '../Todo-filter-pannel';
import './Todo-add-form.css';

const AddForm = () => {

    const [newTodo, setNewTodo] = useState('');
    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }, [setNewTodo]);

    const dispatch = useDispatch();

    const onAdd = useCallback(() => {
        dispatch( addTodo(newTodo) )
        setNewTodo('')
    }, [newTodo, dispatch]);

    const hanleClack = () => {
        console.log('click');
    }

    return (
        <>
            <h2>TodoInput</h2>
            <form className="form">
                <input 
                    type="text"
                    className="input" 
                    placeholder="New Todo" 
                    value={newTodo} 
                    onChange={onChangeName}/>
                <MyButton text="Add new task"
                          onClick={onAdd}
                          />
                {/* {items.map( (todo) => (
                     <ListItem 
                     id={todo.id}
                     title={todo.title} 
                     isDone={todo.isDone}/>
                ) )} */}
            </form>
            <FilterPannel
                onClick={hanleClack}
                />
            <ListItem />
        </>
    )
}

export default AddForm;