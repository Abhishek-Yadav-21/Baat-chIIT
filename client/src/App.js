import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Homepage/Home';
import Chat from './components/Chat';

const App  = () => {

    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path = "/chat" exact component = {Chat}/>
        </BrowserRouter>
    ) 
};

export default App;