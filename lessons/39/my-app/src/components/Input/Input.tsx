import React, { useState } from 'react';
import './Input.css';

interface Props {
    handleChange: (selectEl: string) => void;
    number: number;
}

function Input () {
    const [value, setValue] = useState('');
    const [number, setNumber] = useState([5, 10, 15, 20]);

    const options = number.map ( (num, index) => {
        return <option key={index}> {num} </option>
    } )

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }
    // function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setNumber(event.target.value);
    // }

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
                //onChange={handleChange}
            >
            {options}
            </select>
        </div>
    )
}

export default Input;