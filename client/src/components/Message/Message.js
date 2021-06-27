import React from 'react';
import './Message.css';

const Message = ({id, message: {text, user}}) => {

    let isSentByCurrentUser = false;


    if(user===id)
    {
       isSentByCurrentUser=true;
    }

   
    return (
       <div>
            {isSentByCurrentUser
            ?(
               <div className="me">
                  <div id="right">{text}</div>
               </div>
            ): (
               <div className="other">
                  <p id="left">{text}</p>
               </div>
            )}
        </div>   
    )    
}

export default Message;