import React, {useState} from 'react';
import MyButton from '../Button';

import './Todo-filter-pannel.css';

interface Props {
    text: string,
    // onClick: () => void
}

const FilterPannel = (props: Props) => {

    // const buttonsData = [
    //     {name: 'all', label: 'All-'},
    //     {name: 'done', label: 'Done-'},
    //     {name: 'todo', label: 'Todo'}
    // ];
    //const [filter, setFilter] = useState('all');

    // const buttons = buttonsData.map( ({name, label}) => {
       
    //     return( 
    //     <MyButton 
    //         className={`btn ${clazz}`}
    //         name={name}
    //         onClick={() => props.onFilterSelect(name)}>
    //         {label}
    //     </MyButton>
    //    )
    // } )

    return (
        <>
            <h2>TodoList</h2>
            {/* {buttons} */}
            <MyButton text="All" />
            <MyButton text="Done" />
            <MyButton text="Todo" />
        </>
    )
}

export default FilterPannel;