import React, {FC} from 'react';
import {User} from 'types/types';
import style from './UserItem.module.css'


interface MyUserItemProps {
    user: User;
}

const UserItem: FC<MyUserItemProps>  = ({user}) => {
    return (

        <div className={style.userItem}>
            {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street, {user.address.suite}
        </div>
    );
};

export default UserItem;