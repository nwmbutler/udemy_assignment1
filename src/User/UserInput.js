import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid teal'
    };

    return (
        <div className="Box">
          <input 
            style={inputStyle}
            type="text" 
            onChange={props.changed} 
            value={props.currentUser}/>
        </div>
    )
};

export default userInput;