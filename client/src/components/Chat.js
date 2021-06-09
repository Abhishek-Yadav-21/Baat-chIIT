import React, {useEffect} from 'react';
import {io} from 'socket.io-client';

let socket;

const Chat = ({location}) => {
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        socket = io(ENDPOINT);
        // console.log(socket);
        socket.on('conn', obj => {
            console.log(`You are now chatting with a random stranger !!`);
            console.log(obj);

        })
        // socket.on('disconn', (data) => {
        //     var who = data.who;
        //     var reason = data.reason;


        // })
    }, [ENDPOINT, location.search]);

    return(
        <div>Chat</div>
    )
};

export default Chat;