import React, {FC} from 'react';
import Button from 'components/Button';
import style from './NotFoundPage.module.css';
import { useHistory } from 'react-router-dom';


const NotFoundPage: FC = () => {
    const history = useHistory();
    return (
        <div className={style.notFound}>
            <p>Not found... There is no post with such Id.</p>
            <Button handleClick={() => {history.replace('/posts')}} name="Back to posts"/>
           
        </div>
    );
};

export default NotFoundPage;