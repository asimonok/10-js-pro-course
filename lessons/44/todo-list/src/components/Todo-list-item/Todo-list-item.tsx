import React, {useState, useCallback, ChangeEvent} from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../store/store';
import {toggleTodo, editTodo, deleteTodo} from '../../store/reducer';
import MyButton from '../Button'; 
import './Todo-list-item.css';

interface Props {
  id: string;
  title: string;
  isDone: boolean;
}

const ListItem: React.FC<Props> = () => {

  // const { title, id, isDone } = props;
  // const [isEdit, setIsEdit] = useState(false);
  // const [updatedTitle, setUpdatedTitle] = useState(title);
  // const dispatch = useDispatch();

  // const completeOnChange = useCallback(() => {
  //   dispatch(completeTodo(item.id));
  // }, [dispatch, item.id]);

  // const editOnClick = useCallback(() => {
  //   setIsEdit(true);
  // }, [setIsEdit]);

  // const saveOnClick = useCallback(() => {
  //   setIsEdit(false);
  //   dispatch(editTodo(id, updatedTitle));
  // }, [setIsEdit, dispatch, updatedTitle, id]);

  // const onChangeTitle = useCallback(
  //   (e: ChangeEvent<HTMLInputElement>) => {
  //     setUpdatedTitle(e.target.value);
  //   },
  //   [setUpdatedTitle]
  // );

    return (
      <div>

      </div>
    )
  }

export default ListItem;