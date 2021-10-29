import React, {FC, useState, useEffect}  from 'react';
import {User} from 'types/types';
import UserItem  from 'components/UserItem';


const UsersPage: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    // const history = useHistory();
  
    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((response):Promise<User[]> => response.json())
          .then(users => {
            setUsers(users);  
        }).catch(error => console.log(error))
    }, []);

    return (
        <div>
            {users.map (user => <UserItem key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;