import React, {useState, useCallback, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../Button'; 
import {addTodo} from'../../store/reducer';
import ListItem from '../Todo-list-item';
import FilterPannel from '../Todo-filter-pannel';
import {RootState} from '../../store/store';
import './Todo-add-form.css';

const AddForm = () => {

    const [newTodo, setNewTodo] = useState('');

    const dispatch = useDispatch();

    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }, [setNewTodo]);

    const items = useSelector((state: RootState) => state.todos.items);
    
    const onAdd = useCallback((e) => {
        e.preventDefault();
        dispatch( addTodo(newTodo) )
        setNewTodo('')
    }, [newTodo, dispatch]);

    return (
        <>
            <h2>TodoInput</h2>
            <form className="form"
                  onSubmit={onAdd}>
                <input 
                    type="text"
                    className="input" 
                    placeholder="New Todo" 
                    value={newTodo} 
                    onChange={onChangeName}/>
                <MyButton text="Add new task"/>
            </form>
            {items.map( (todo) => {
                <ListItem key={todo.id} title={todo.title} id={todo.id} isDone={todo.isDone}/>
            } )}
            
        </>
    )
}

export default AddForm;