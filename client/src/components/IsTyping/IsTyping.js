import React from 'react';
import './IsTyping.css';
import { useEffect, useRef } from 'react';

const IsTyping = ({b}) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [b]);

    return(
        <div>
            <div id="typing">
              {(b)? (<div>Stranger is Typing...</div>): null}
            </div> 
            <div ref={messagesEndRef} />
        </div>
    ) 
}
// className="ScrollToBottom"
export default IsTyping;