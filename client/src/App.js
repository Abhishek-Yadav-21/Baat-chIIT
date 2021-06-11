import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Chat from './components/Chat';

const App  = () => {

    return(
        <BrowserRouter>
            <Route path="/" exact component={Homepage}/>
            <Route path = "/chat" exact component = {Chat}/>
        </BrowserRouter>
    ) 
};

export default App;