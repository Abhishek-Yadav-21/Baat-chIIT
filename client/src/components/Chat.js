import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';

let socket;
var arr = [];

const Chat = ({location}) => {
    const ENDPOINT = 'http://localhost:5000';

    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = io(ENDPOINT);
        // console.log(socket);
        socket.on('conn', obj => {
            console.log(`You are now chatting with a random stranger !!`);
            console.log(obj);

        })
        socket.on('disconn', (data) => {
            var who = data.who;
            var reason = data.reason;


        })
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
            // console.log(message,messages);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
            // setMessages([...messages].map(message));
        }
    }

    console.log(message, messages);

    return(
        <div>
            <input value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}/>
        </div>
    )
};

export default Chat;