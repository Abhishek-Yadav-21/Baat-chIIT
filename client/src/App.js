import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';

import Home from './components/Homepage/Home';
import Chat from './components/Chat/Chat';
import axios from 'axios';

let isUserLoggedIn = false;

class App  extends Component {

    state = {component: ''};

    componentDidMount(){
        // this.props.fetchUser();
        // console.log(this.props.fetchUser());
        axios.get('/api/current_user')
            .then(response => {
                console.log(response);
                if(response.data === ""){
                    this.setState({component: Home})
                    isUserLoggedIn = false;
                }
                else{
                    this.setState({component: Chat});
                    isUserLoggedIn=true;
                }
            })

    }

    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path = "/chat" exact component={this.state.component} />
            </BrowserRouter>
        );
    }
};

// function mapStateToProps({auth}){
//     return {auth};
// }

// export default connect(null, actions)(App);
export default App;