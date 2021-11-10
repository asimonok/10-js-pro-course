import React, {useState} from 'react';
import MyButton from '../Button';

import './Todo-filter-pannel.css';

interface Props {
    //text: string,
    onClick: () => void
}

const FilterPannel = (props: Props) => {

    // const buttonsData = [
    //     {name: 'all', label: 'All-'},
    //     {name: 'done', label: 'Done-'},
    //     {name: 'todo', label: 'Todo'}
    // ];
    // const [filter, setFilter] = useState('all');

    // const buttons = buttonsData.map( ({name, label}) => {
       
    //     return( 
    //     <MyButton 
    //         text={text}
    //        // onClick={() => props.onFilterSelect(name)}
    //        >
    //         {label}
    //     </MyButton>
    //    )
    // } )
    const hanleClack = () => {
        console.log('click');
    }

    return (
        <>
            <h2>TodoList</h2>
            {/* {buttons} */}
           <div className="wrapper">
           <MyButton text="All" onClick={hanleClack}/>
            <MyButton text="Done" onClick={hanleClack}/>
            <MyButton text="Todo" onClick={hanleClack}/>
           </div>
        </>
    )
}

export default FilterPannel;