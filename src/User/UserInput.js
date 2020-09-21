import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="Box">
          <input type="text" onChange={props.changed} value={props.currentUser}/>
        </div>
    )
};

export default userInput;