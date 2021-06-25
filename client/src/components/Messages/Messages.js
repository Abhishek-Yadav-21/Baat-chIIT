import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';



const Messages = ({disconnId, id, messages}) => {
    

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  return(
      <div className="ScrollToBottom">
          {messages.map((message, i) => 
              <div key={i}><Message disconnId={disconnId} id={id} message={message}/></div>
          )}
          <div ref={messagesEndRef} />
      </div>
  )
        
    
}



export default Messages;