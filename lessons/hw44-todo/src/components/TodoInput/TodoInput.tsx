import React, {FC} from 'react';
import Button from '../Button';

interface Props {
    task: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoInput: FC<Props> = ({task, onChange, onClick}) => {
    return (
        <div>
            <input type="text" onChange={onChange} placeholder="Add a task"  value={task}></input>
            <Button
              name="Add new task"
              handleClick={onClick}
            />
        </div>
    );
};

export default TodoInput;
