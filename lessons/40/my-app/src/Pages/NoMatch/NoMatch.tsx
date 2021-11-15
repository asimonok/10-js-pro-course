import React from 'react';
import img from './error.gif'

const NoMatch = () => {

    return (
        <>
        <h1>Page not found!</h1>
        <img src={img} alt="Error"/>
        </>
    )
}

export default NoMatch;