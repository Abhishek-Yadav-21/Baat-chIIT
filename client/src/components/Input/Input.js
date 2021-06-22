import React from 'react'
import './Input.css';

class Input extends React.Component{

    state = {term: ''};

    onFormSubmit = (event) =>{
        event.preventDefault();
        // this.props.sendMessage(this.state.term);
        this.props.setMessage(this.state.term);
        this.setState({term: ''});
    }


    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input className="ui input" value={this.state.term} placeholder="Type a message" onChange={e => this.setState({term: e.target.value})}/>
                <button id="emoji" className="ui button">emoji</button>
            </form>
        )
    }
}

export default Input;

