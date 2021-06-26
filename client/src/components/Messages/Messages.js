import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';



const Messages = ({b, id, messages}) => {
    

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
              <div key={i}><Message id={id} message={message}/></div>
          )}
          {/* <div id="typing">
              {(b)? (<div>Stranger is Typing...</div>): null}
          </div> */}
          <div ref={messagesEndRef} />
      </div>
  )
        
    
}



export default Messages;