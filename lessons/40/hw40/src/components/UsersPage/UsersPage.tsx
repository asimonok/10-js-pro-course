import React, {FC, useEffect}  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import UserItem  from 'components/UserItem';
import { RootState } from 'store';
import {fetchUsers} from 'store/actions/users'
import Loading from 'components/Loading'

const UsersPage: FC = () => {

    const { users, loading }= useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(fetchUsers())
    }, [dispatch]);

    return (
        <div>{
            !loading ? (
                <div>
                    {users.map (user => <UserItem key={user.id} user={user}/>)}
                </div>
            ) : <Loading/>
            
        }</div>
        
    );
};

export default UsersPage;