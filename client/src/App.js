import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
<<<<<<< HEAD
import Home from './components/Homepage/Home';
=======
import Chat from './components/Chat/Chat';
>>>>>>> e09dfe3ffe03c5a4ff51bf743d15c7631c658556

const App  = () => {

    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path = "/chat" exact component = {Chat}/>
        </BrowserRouter>
    ) 
};

export default App;