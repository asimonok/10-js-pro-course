import React, {useState, useCallback} from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../store/store';
import {toggleTodo} from '../../store/reducer';

import './Todo-list-item.css';

interface Props {
    // id: string,
    // title: string, 
    // isDone: boolean
}

const ListItem = (props: Props) => {

  
    const [items, setItems] = useState([
      {title: 'Learn ReactJS basics', id:1}, 
      {title: 'Practive ReactJS', id:2},
      {title: 'Learn Redux', id:3},
      {title: 'Code portfolio in React', id:4}
    ]);
      //const {id, title, isDone} = props;
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    // const onToggle = useCallback( ()=> {
    //   dispatch(toggleTodo())
    // }, [dispatch, id, toggleTodo] );

    //   const list = useSelector((state: RootState) => {
    //   return state.todos.items;
    // });

    const onDelete = (deletedTask: any) => {
      const newList= items.filter(item => item.title !== deletedTask);
      setItems(newList);
    }

    // const startEdit = useCallback( () => {
    //   setIsEdit(true);
    // }, [setIsEdit] );

    return (
      <Container style={{ marginTop: '2rem', marginLeft: '30px' }}>
        <ListGroup style={{ marginBottom: '1rem' }}>
          <TransitionGroup className="todo-list">
            {items.map(({ id, title }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="item"
              >
                <ListGroup.Item>
                  <label className="list-group-item-label">
                    {title}
                    {/* {!isEdit && (
                      <>
                        {title}
                        <button type="button"
                          className="btn-pen btn-sm "
                          onclick={startEdit}>
                          <i className="fas fa-pen"></i>
                        </button>
                      <>
                    )} */}
                    {/* {!isEdit && (
                      <>
                        <input />
                        <button type="button"
                          className="btn-pen btn-sm "
                          onclick={startEdit}>
                         Save</i>
                        </button>
                      <>
                    )} */}
                  </label>
                  <div className='bnt__block'>
                    <input 
                        className="check"
                        type="checkbox"
                        //onChange={onToggle}
                        />
                    <button type="button"
                        className="btn-pen btn-sm ">
                        <i className="fas fa-pen"></i>
                    </button>
                    <Button
                      className="remove-btn"
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        setItems(items =>
                          items.filter(item => item.id !== id)
                        )}
                        >
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