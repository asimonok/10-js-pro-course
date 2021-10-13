import React, { ChangeEvent, useState } from 'react';
import './Input.css';

interface Props {
    onChange: (selectEl: string) => void;
}

function Input (props: Props) {

    const [number, setNumber] = useState([5, 10, 15, 20]);
    const options = number.map ( (num, index) => {
        return <option key={index}> {num} </option>
    } )

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        props.onChange(event.target.value);
    }

    return (
        <div className="wrapper">
            <form className="search__form">
                <input 
                    className="input" 
                    placeholder="Enter your text" 
                    onChange={onChange}
                />
            </form>
            <select 
                className="num" 
            >
            {options}
            </select>
        </div>
    )
}

export default Input;