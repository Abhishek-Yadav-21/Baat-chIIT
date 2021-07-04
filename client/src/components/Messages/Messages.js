import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';



const Messages = ({divId, id, messages, waitMessage}) => {
    

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  return(
      <div className="ScrollToBottom">
        <div id="waitTop">{waitMessage}</div>
          {messages.map((message, i) =>          
              <div key={i}><Message divId={divId} id={id} message={message}/></div>
          )}          
          <div ref={messagesEndRef} />
      </div>
  )
        
    
}



export default Messages;