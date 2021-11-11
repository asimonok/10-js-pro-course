import React, {useState} from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import {useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { TodoFilter } from '../../store/reducer';
import {filterTodo, deleteAllTodo, deleteDoneTodo} from '../../store/reducer';
import MyButton from '../Button'; 
import ListItem from '../Todo-list-item';

import './Todo-list.css';

const List = () => {

    const items = useSelector((state: RootState) => {
        return state.todos.items;
      });
    const activeFilter = useSelector((state:RootState) => {
        return state.todos.filter
      });
    const filteredItems= items.filter(item => {
        if(activeFilter === 'Done') {
            return item.isDone
        } else if (activeFilter === 'Todo') {
            return !item.isDone
        } else {
            return item;
        }
    })

    const dispatch = useDispatch();

    return (
        <TransitionGroup className="todo-list">
            {/* <MyButton 
                key={filter} 
                disabled={activeFilter===filter} 
                name={filter} 
                handleClick={() => { dispatch( filterTodo(filter)) }}/>
            <div >
                {filteredItems.map(item => <ListItem key={item.id} task={item}/>)}
            </div>
             <MyButton 
                text={'Delete done tasks'} 
                onClick={() => {}}
                />
            <MyButton 
                text={'Delete all tasks'} 
                onClick={() => {}}
                /> */}
        </TransitionGroup>
    )
}

export default List;