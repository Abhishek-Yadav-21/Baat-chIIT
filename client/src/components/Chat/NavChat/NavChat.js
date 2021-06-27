import React from 'react';
import './NavChat.css';
import LoginPopup from '../../Login-Popup/LoginPopup';
class NavChat extends React.Component {

    state = {div_id: 'all', chath3: 'chath3', logout: 'logout'};

   onChangeHandler = (event) => {
       if(event.target.checked){
           this.props.dark_mode(event.target.checked);
           this.setState({div_id: 'not_all', chath3: 'not_chath3', logout: 'not_logout'})
       }
       else{
           this.props.dark_mode(event.target.checked);
           this.setState({div_id: 'all', chath3: 'chath3', logout: 'logout'});
       }
       console.log(event.target.checked);
   }
    
    render(){
        return (
            <div id={this.state.div_id}>
                <div className="ui container">
                    <div className="ui secondary menu">
                        <a className="active item">
                            <h3 id={this.state.chath3} className="main">Chat<span>IIT</span></h3>
                        </a>
                        <div className="right menu">
                            <div className="ui toggle checkbox">
                                <input onChange={this.onChangeHandler} type="checkbox" name="newsletter" />
                                <label></label>
                            </div>
                            <div className="ui item">
                                <LoginPopup id={this.state.logout} text="No Account?" link="Sign Up" name="Logout" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default NavChat;
