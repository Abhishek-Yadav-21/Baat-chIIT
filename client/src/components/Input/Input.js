import React from 'react'
import debounce from 'lodash/debounce';
import './Input.css';
import Send from './Assets/Send.svg';

class Input extends React.Component{

    state = {term: '', disabled: false, className: 'ui input'};

    giveClassName = () => {
        if(this.props.divId === 'not_div')
        {
            return 'not ui input';
        }
        else
        {
            return 'ui input';
        }
    }

    onInputChange = (event) =>{

        this.props.setTyping(true);
        this.setState({term: event.target.value});
        this.handleTyping();
    }

    handleTyping = debounce(function() { // continually delays setting "isTyping" to false for 500ms until the user has stopped typing and the delay runs out
        this.props.setTyping(false);      
    }, 500);

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
                <input disabled = {(this.state.disabled)? "disabled" : ""} className={this.giveClassName()} value={this.state.term} placeholder="Type a message" onChange={this.onInputChange}/>
                <button onClick={this.onFormSubmit} id="emoji" ><img id="send" src={Send}/></button>
            </form>
        )
    }
}

export default Input;

