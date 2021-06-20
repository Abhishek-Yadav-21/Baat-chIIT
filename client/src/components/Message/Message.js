import React from 'react';
import './Message.css';

const Message = ({id, message: {text, user}}) => {

    let isSentByCurrentUser = false;

   //  console.log(user);
   //  console.log(text);
    if(user===id)
    {
       isSentByCurrentUser=true;
    }

   
    return (
       isSentByCurrentUser
         ?(
            <div>
               <p>{text}</p>
            </div>
         ): (
            <div className="gandu">
               <p>{text}</p>
            </div>
         )
    )
}

export default Message;