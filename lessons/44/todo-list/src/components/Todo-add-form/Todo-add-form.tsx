import React from 'react';

import Button from '../Button'; 

import './Todo-add-form.css';

const AddForm = () => {

    return (
        <>
            <h2>TodoInput</h2>
            <form className="form">
                <input className="input" placeholder="New Todo"/>
                <Button text={'Add new task'}/>
            </form>
        </>
    )
}

export default AddForm;