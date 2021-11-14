import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {deleteAllTodo, deleteDoneTodo} from '../../store/reducer';

import './Todo-clear-pannel.css';

const ClearPannel = () => {

    const dispatch = useDispatch();
    const onDeleteAll = () => dispatch(deleteAllTodo());
    const onDeleteDone = () => dispatch(deleteDoneTodo())

    return (
        <Container>
          <Row className="button__wrapper">
            <Col className="button">
                <button 
                    className="btn__delete"
                    onClick={onDeleteDone}
                    >Delete done tasks</button>
                </Col>
            <Col className="button">
                <button 
                    className="btn__delete"
                    onClick={onDeleteAll}
                    >Delete all tasks</button>
                </Col>
          </Row>
        </Container>
    )
}

export default ClearPannel;