import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import NavChat from './NavChat/NavChat';
import './Chat.css';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;
// var Who;
var id;
var arr = [];

const Chat = ({location}) => {
    const ENDPOINT = 'http://localhost:5000';

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = io(ENDPOINT);
        // console.log(socket);

        socket.on('conn', (data) => {
            console.log(`You are now chatting with a random stranger !!`);
            id = data.id;
            console.log(data.id);
            // console.log(data.who);
            // Who = data.who;
        })
        socket.on('disconn', (data) => {
            var who = data.who;
            var reason = data.reason;


        })
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            // Who = who;
            const addMessage = (message) => setMessages(state => [...state, message]);
            addMessage(message);
            // console.log(Who);
        })
    }, [arr]);

    useEffect(() => {
        if(message) {
            // const addMessage = (message) => setMessages(state => [...state, message]);
            // addMessage(message);
            // Who=1;
            socket.emit('sendMessage', message);
            // console.log(message);
        }
        else{
            console.log("no message");
        }
    }, [message]);
    // const sendMessage = (event) => {
    //     event.preventDefault();
    //     if(message) {
    //         // setMessages1([...messages1, message]);
    //         socket.emit('sendMessage', message, () => { setMessage('')})
    //     }
    // }

    console.log(message, messages);

    return(
        <div>
            <NavChat />
            <div className="ui container">
                <div className="space1">
                    <div id="space_left">You are chatting with a Stranger</div>
                    <div id="space_right">Chat box</div>
                </div>
                <div className="space2">
                    <div>
                        <button id="find" className="ui button large">Find new</button>
                    </div>
                    <div className="space1">
                        {/* <Message message={message} /> */}
                        <Messages id={id} messages={messages}/>
                        <Input message={message} setMessage={setMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat;

// setMessages([...messages, message]);