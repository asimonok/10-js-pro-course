import userEvent from '@testing-library/user-event';
import React from 'react';
import {User} from 'types/types';
import UserItem from '../UserItem'


interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = (props) => {
    const {users} = props;
    return (
        <div>
            {users.map( user => 
                <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;