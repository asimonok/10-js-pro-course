import React, {useState} from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Data} from '../../types/Data';

import './Todo-list-item.css';

interface Props {
    id: number,
    task: string, 
    data: Data[],
    onEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
    onDelete: (event:React.MouseEvent<HTMLButtonElement>) => void;
}

const ListItem = (props: Props) => {
    const [items, setItems] = useState([
      {task: 'Learn ReactJS basics', id:1}, 
      {task: 'Practive ReactJS', id:2},
      {task: 'Learn Redux', id:3},
      {task: 'Code portfolio in React', id:4}
    ]);

    const onEdit = () => {
      console.log('onEdit') 
    }

    const onDelete = (deletedTask: any) => {
      const newList= items.filter(item => item.task !== deletedTask);
      setItems(newList);
    }

    return (
      <Container style={{ marginTop: '2rem' }}>
        <ListGroup style={{ marginBottom: '1rem' }}>
          <TransitionGroup className="todo-list">
            {items.map(({ id, task }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="item"
              >
                <ListGroup.Item>
                <span className="list-group-item-label"> {task} </span>
                <div className='bnt__block'>
                    <input 
                        className="check"
                        type="checkbox"/>
                    <button type="button"
                        className="btn-pen btn-sm "
                        onClick={onEdit}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <Button
                      className="remove-btn"
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        setItems(items =>
                          items.filter(item => item.id !== id)
                        )}>
                      <i className="fas fa-trash"></i>
                    </Button>
                </div>
               </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }

export default ListItem;