import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';
import Input from '../Input/Input';



const Messages = ({divId, id, messages, waitMessage, typing, setTyping, code, setCode, message, setMessage}) => {
  
  let temp = false;
  if(waitMessage === "Stranger has left the chat" || waitMessage === "You have left the chat")
  {
    temp = true;
  }
  else{
    temp = false;
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  return(
      <div className="ScrollToBottom">
        {temp ? null:  (<div id="waitTop">{waitMessage}</div>)}
          {messages.map((message, i) =>          
              <div key={i}><Message divId={divId} id={id} message={message}/></div>
          )}          
          {temp ? (<div id="waitTop">{waitMessage}</div>) : null}
          <div id="chat_input" className="spaceInput">
              <Input divId={divId} typing={typing} setTyping={setTyping} code={code} setCode={setCode} message={message} setMessage={setMessage} />
          </div>
          <div ref={messagesEndRef} />
      </div>
  )
        
    
}



export default Messages;