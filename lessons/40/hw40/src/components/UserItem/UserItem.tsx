import React, {FC} from 'react';
import {User} from 'types/types';
import style from './UserItem.module.css'
import {useHistory} from 'react-router-dom'


interface MyUserItemProps {
    user: User;
}

const UserItem: FC<MyUserItemProps>  = ({user}) => {
    const history = useHistory();

    const handleUserPosts = () => {
        history.push(`/userPost/${user.id}`)
    }
    
    return (
        <div className={style.userItem} onClick={handleUserPosts}>
            {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street, {user.address.suite}
        </div>
    );
};

export default UserItem;