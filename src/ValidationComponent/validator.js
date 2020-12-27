import React from 'react';
import './userInput.css'

const ValidatorComponent = (props)=>
{
    let msg = null;
    if(props.length < 5)
    {
        msg = (
            <div>
                <p>Text too short</p>
            </div>
        )
    }
    else
    {
        msg = (
            <div>
                <p>Text long enough</p>
            </div>
        )
    }
    return (
    <div>
        <p>{props.length}</p>
        {msg}
    </div>
    )
}

export default ValidatorComponent;