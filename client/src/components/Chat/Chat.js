import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import NavChat from './NavChat/NavChat';
import './Chat.css';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Wait1 from './Assets/wait1.svg';
import Wait2 from './Assets/wait.svg';

let socket;
// var Who;
var id;
var arr = [];

const Chat = ({location}) => {
    const ENDPOINT = 'http://localhost:5000';

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [waitMessage, setWaitMessage] = useState('');

    useEffect(() => {
        socket = io(ENDPOINT);
        // console.log(socket);

        socket.on('conn', (data) => {
            console.log(`You are now chatting with a random stranger !!`);
            id = data.id;
            setWaitMessage(data.text);
            console.log(data.id);
        })
        socket.on('waiting', text => {
            setWaitMessage(text.text);
            // setLogo(text.path);
        })
        socket.on('disconn', (data) => {
            var who = data.who;
            var reason = data.reason;


        })
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            const addMessage = (message) => setMessages(state => [...state, message]);
            addMessage(message);
        })
    }, [arr]);

    useEffect(() => {
        if(message) {
            socket.emit('sendMessage', message);
        }
        else{
            console.log("no message");
        }
    }, [message]);

    const logo = () => {
        if(waitMessage==="Hold up, we are searching for someone to chat")
        {
            return Wait1;
        }
        else{
            return Wait2;
        }
    }
    

    console.log(message, messages);

    return(
        <div>
            <NavChat />
            <div className="ui container">
                <div className="space1">
                    <div id="space_left">
                        <div id="waitMessage">
                            {waitMessage}
                            <div>
                                <img className="waitLogo" src={logo()} />
                            </div>
                        </div>
                    </div>
                    <div id="space_right">
                        <div>
                            <Messages id={id} messages={messages}/>
                        </div>
                    </div>
                </div>
                <div className="space2">
                    <div>
                        <button id="find" className="ui button large">Find new</button>
                    </div>
                    <div className="space1">
                        <Input message={message} setMessage={setMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat;

// setMessages([...messages, message]);