import React, {useState, useCallback, ChangeEvent} from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {toggleTodo, editTodo, removeTodo} from '../../store/reducer';
import './Todo-list-item.css';

interface Props {
  id: string;
  title: string;
  isDone: boolean;
}

const ListItem: React.FC<Props> = ({isDone, title, id}) => {

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [correctedTitle, setCorrectedTitle] = useState(title);

  const onToogle = useCallback( () => {
    dispatch(toggleTodo(id));
  }, [dispatch, id, toggleTodo] );

  const onEdit = useCallback( () => {
    setIsEdit(true);
  }, [setIsEdit] );

  const onSave = useCallback( () => {
    setIsEdit(false);
    dispatch(editTodo(id, correctedTitle))
  }, [setIsEdit, dispatch, correctedTitle] );

  const onCorrect = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
    setCorrectedTitle(e.target.value)
  }, [setCorrectedTitle] )

  const onRemove = useCallback( () => {
    dispatch(removeTodo(id));
  }, [dispatch, id, removeTodo] );

    return (
      <div className="list-group">
        {!isEdit && (
            <div className="list-group-item">
              {title}
              <div className='bnt__block'>
                <input 
                  type="checkbox" 
                  checked={isDone} 
                  className="check"
                  onChange={onToogle}/>
                <button type="button"
                    className="btn-pen btn-sm "
                    onClick={onEdit}
                    >
                    <i className="fas fa-pen"></i>
                </button>
                <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={onRemove}
                  >
                  <i className="fas fa-trash"></i>
                </Button>
              </div>
            </div>
        )}
        {isEdit && (
            <div className="list-group-item">
              <input 
                type="text" 
                value={correctedTitle}
                onChange={onCorrect}
                />
               <div className='bnt__block'>
              <button type="button"
              className="btn-save btn-sm "
              onClick={onSave}
              >
              <i className="fas fa-save"></i>
              </button>
              <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={onRemove}
                  >
                  <i className="fas fa-trash"></i>
                </Button>
              </div>
            </div>
        )}
      </div>      
    )
  }

export default ListItem;