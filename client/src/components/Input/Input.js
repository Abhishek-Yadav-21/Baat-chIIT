import React from 'react'
import './Input.css';

class Input extends React.Component{

    state = {term: '', disabled: false};

    onFormSubmit = (event) =>{
        event.preventDefault();
        // this.props.sendMessage(this.state.term);
        this.props.setMessage(this.state.term);
        this.setState({term: ''});
    }
    componentDidUpdate() {
        if(this.props.code === 3 || this.props.code===2){
            this.setState({disabled: true})
            this.props.setCode(null);
        }
        else if(this.props.code === 1)
        {
            this.setState({disabled: false});
            this.props.setCode(null);
        }
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input disabled = {(this.state.disabled)? "disabled" : ""} className="ui input" value={this.state.term} placeholder="Type a message" onChange={e => this.setState({term: e.target.value})}/>
                <button id="emoji" className="ui button">emoji</button>
            </form>
        )
    }
}

export default Input;

