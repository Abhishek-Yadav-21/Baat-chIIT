import React, {useEffect} from 'react';
import {io} from 'socket.io-client';

let socket;

const Chat = ({location}) => {
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        socket = io(ENDPOINT);
        console.log(socket);
    }, [ENDPOINT, location.search]);

    return(
        <div>Chat</div>
    )
};

export default Chat;