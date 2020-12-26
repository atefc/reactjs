import React from 'react';
import './userInput.css'

const UserInput = (props)=>
{
    return (
    <div className="UserInput">
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
}

export default UserInput;