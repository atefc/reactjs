import React from 'react';

const UserOutput = (props)=>
{
    const style = 
    {
        boxShadow : "1px 2px white",
        border : "1px solid whitesmoke"
    }
    return (
        <div style={style}>
            <p>{props.name}</p>
            <p>Text 2</p>
        </div>
    )
}

export default UserOutput;