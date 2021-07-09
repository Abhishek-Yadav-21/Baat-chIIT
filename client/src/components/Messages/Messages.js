import React, {useState}  from 'react';
import './Messages.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';



const Messages = ({divId, id, messages, waitMessage}) => {
  
  const [height, setHeight] = useState(window.innerHeight);

  const handleScroll = () => setHeight(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleScroll);

    return () => window.removeEventListener("resize", handleScroll);
  }, []);

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
  }, [messages, height]);

  console.log(height);
  return(
      <div className="ScrollToBottom">
        {temp ? null:  (<div id="waitTop">{waitMessage}</div>)}
          {messages.map((message, i) =>          
              <div key={i}><Message divId={divId} id={id} message={message}/></div>
          )}          
          {temp ? (<div id="waitTop">{waitMessage}</div>) : null}
          <div ref={messagesEndRef} />
      </div>
  )
        
    
}



export default Messages;