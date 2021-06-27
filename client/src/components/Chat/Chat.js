import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import NavChat from './NavChat/NavChat';
import './Chat.css';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Wait1 from './Assets/wait1.svg';
import Wait2 from './Assets/wait.svg';
import Wait3 from './Assets/wait2.svg';
import FindButton from './FindButton/FindButton';
import IsTyping from '../IsTyping/IsTyping';


let socket;
var id;
var arr = [];

const Chat = ({location}) => {
    const ENDPOINT = 'http://localhost:5000';

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [waitMessage, setWaitMessage] = useState('');
    const [code, setCode] = useState(null);
    const [bcode, setBcode] = useState(null);
    const [end, setEnd] = useState(false);
    const [find, setFind] = useState(false);
    const [typing, setTyping] = useState(false);
    const [b , setB] = useState(false);

    useEffect(() => {
        socket = io(ENDPOINT);

        socket.on('conn', (data) => {
            console.log(`You are now chatting with a random stranger !!`);
            id = data.id;
            setWaitMessage(data.text);
            setMessages([]);
            setCode(data.code);
            setBcode(data.bcode);
        })
        socket.on('waiting', text => {
            setWaitMessage(text.text);
            setCode(text.code);
            setBcode(text.bcode);
        })
        socket.on('disconn', (data) => {
            console.log(data.id);
            console.log(data.text);
            setCode(data.code);
            setBcode(data.bcode);
            setWaitMessage(data.text);
            console.log(code);
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        if(end===true)
        {
            socket.emit("disconn");
            setEnd(false);
        }
    }, [end])


    useEffect(() => {
        socket.on('istyping', isTyping => {
            setB(isTyping);
           
        })
    });

    useEffect(() => {
            socket.emit("typing", typing);
    });


    useEffect(() => {
        if(find===true){
            socket.emit("new");
            setFind(false);
        }
    }, [find])

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

        if(waitMessage==="You are now chatting with a Stranger!"){
            return Wait2;
        }
        else if(waitMessage === "Stranger has left the chat" || waitMessage==="You have left the chat")
        {
            return Wait3;
        }
        else{
            return Wait1;
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
                            <IsTyping b={b}/>
                        </div>
                    </div>
                </div>
                <div className="space2">
                    <div id="findButton">
                        <div>
                            <FindButton find={find} setFind={setFind} end={end} setEnd={setEnd} bcode={bcode} setBcode={setBcode}/>
                        </div>
                    </div>
                    <div className="space1">
                        <Input typing={typing} setTyping={setTyping} code={code} setCode={setCode} message={message} setMessage={setMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat;

