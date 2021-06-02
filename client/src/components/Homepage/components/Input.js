import React from 'react';

class Input extends React.Component{

    state = {email: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.setState({email: event.target.value});
        console.log(this.state.email);

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