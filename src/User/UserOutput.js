import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
         <div className="UserOutput">
            <p>
              {props.username} This is temporary text while setting up
            </p>
            <p>
              This is a second temporary paragraph
            </p>
        </div>
    )
};

export default userOutput;