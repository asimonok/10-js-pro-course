import React, {useState} from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';

import ListItem from '../Todo-list-item';
import {Data} from '../../types/Data';

import './Todo-list.css';

type Props = {
    // id: number,
    // task: string, 
    // data: Data[],
    // onEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
    // onDelete: (event:React.MouseEvent<HTMLButtonElement>) => void;
}

const List = (props: Props) => {

    //const { id, task, data } = props;
    //const [list, setList] = useState();
    //const [task, setTask] = useState('');
    const onEdit = () => {
        console.log('onEdit')
        
      }
    const onDelete = () => {
        console.log('onDelete')
    }

    return (
        <TransitionGroup className="todo-list">
            {/* <ListItem 
                // id={id}
                // data={data}
                // task={task}
                // onDelete={onDelete}
                // onEdit={onEdit} 
                />            */}
        </TransitionGroup>
    )
}

export default List;