import React from 'react';
import axios from 'axios';

class Input extends React.Component{

    state = {email: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.setState({email: event.target.value});

        axios
        .post('/email', this.state)
        .then(() => console.log('email id sent'))
        .catch(err => {
          console.error(err);
        });
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