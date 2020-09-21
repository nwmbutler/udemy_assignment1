import React from 'react';
import '../App.css';

const userOutput = (props) => {
    return (
         <div>
            <p>
              {props.username} This is temporary text while setting up
            </p>
            <p>
            {props.username} This is a second temporary paragraph
            </p>
        </div>
    )
};

export default userOutput;