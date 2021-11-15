import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { AuthorTypes } from '../../types/AuthorTypes';
import { RootState } from '../../store/store';
import {fetchUsers} from '../../store/UserReducer';
import Preloader from '../../components/Preloader';
import './Authors.css';

interface Props {
  authors: AuthorTypes[];
}

const Authors = ({authors}: Props) => {
 
    const { users, loading }= useSelector((state: RootState) => state.users);

    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(fetchUsers())
    }, [dispatch]);

  return (
    <>
       {!loading ? (
            <ul className="author__list">
            {users.map (user => <li key={user.id}>
                    {user.name}
                </li>)}
            </ul>
        ) : <p>Loading...</p>}
    </>
  );
};

export default Authors;
