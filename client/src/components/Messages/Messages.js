import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({id, messages, Who}) => (
    <ScrollToBottom>
        {messages.map((message, i) => 
            <div key={i}><Message id={id} message={message}/></div>
        )}
    </ScrollToBottom>
)


// class Messages extends React.Component {

//     Show(){
//             // <div><Message Who={this.props.Who} message={this.props.messages[i]}/></div>  
//         return (this.props.messages.map((message, i=this.props.index) => 
//         <div key={this.props.index}><Message message={message} Who={this.props.Who}/></div>)
//     ) 
               
//     }

//     render(){
//         return(
//             <ScrollToBottom>
//                 {this.Show()}
//             </ScrollToBottom>
//         )
//     }
// }

export default Messages;