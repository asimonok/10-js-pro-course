import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../store/store';
import MyButton from '../Button';
import {TodoFilter, setFilter} from '../../store/reducer';

import './Todo-filter-pannel.css';

interface Props {
    text?: string,
    onClick?: () => void
}

const FilterPannel = (props: Props) => {

    const activeFilter = useSelector((state: RootState) => state.todos.filter);
    const dispatch = useDispatch();
    const onFilter = (filter: TodoFilter) => dispatch(setFilter(filter)); 

    return (
        <>
            <h2>TodoList</h2>
            <div className="wrapper">
            {Object.values(TodoFilter).map((filter, i) => {
            return <MyButton 
                    key={i}
                    text={filter}
                    disabled={filter === activeFilter}
                    onClick={() => onFilter(filter)}
                    />
            })}

            </div>  
        </>
    )
}

export default FilterPannel;