import React from 'react';
import axios from 'axios';

class Input extends React.Component{

    state = {email: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.setState({email: event.target.value});

        var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z])+(.iitr.ac.in)/; //eslint-disable-line
        if(this.state.email.match(regx))
        {
            axios
            .post('/email', this.state)
            .then(() => console.log('email id sent, an iitr student'))
            .catch(err => {
            console.error(err);
            });
        }
        else{
            console.log("Your are not an iitr student")
        }
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="email">Enter your e-mail address</label>
                <input type="email" id="email" onChange={e => this.setState({email: e.target.value})}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default Input;