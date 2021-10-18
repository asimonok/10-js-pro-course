import React from 'react';
import {User} from 'types/types'

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '10px', border: '1px solid grey'}}>
            {user.id}. {user.name} lives in {user.address.city}, {user.address.street} str., app {user.address.suite}
        </div>
    );
};

export default UserItem;
