import React from 'react';
import '../App.css';

const userInput = (props) => {
    return (
         <div className="Body">

            <input type="text" onChange={props.changed} value={props.currentUser}/>
        </div>
    )
};

export default userInput;