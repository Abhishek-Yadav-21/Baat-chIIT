import React from 'react';
import './Message.css';

const Message = ({id, message: {text, user}}) => {

    let isSentByCurrentUser = false;

    if(user===id)
    {
       isSentByCurrentUser=true;
    }

   
    return (
       isSentByCurrentUser
         ?(
            <div className="me">
               <p id="right">{text}</p>
            </div>
         ): (
            <div className="other">
               <p id="left">{text}</p>
            </div>
         )
    )
}

export default Message;