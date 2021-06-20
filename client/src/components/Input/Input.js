// import React from 'react';
// import './Input.css';

// const Input = ({message, setMessage, sendMessage}) => {
//     return (
//         <form>
//             <input type="text"
//                 className="ui input" 
//                 placeholder="Type a message" 
//                 value={message} 
//                 onChange={e => setMessage(e.target.value)} 
//                 onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
//             />
//             <button id="emoji" className="ui button">emoji</button>
//         </form>
//     )
// }

// export default Input;
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
                <input className="ui input" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                <button id="emoji" className="ui button">emoji</button>
            </form>
        )
    }
}

export default Input;

// onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}