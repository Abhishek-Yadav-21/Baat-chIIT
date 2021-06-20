import React from 'react';
import './NavChat.css';
import LoginPopup from '../../Login-Popup/LoginPopup';
class NavChat extends React.Component {
    render(){
        return (
            <div>
                <div className="ui container">
                    <div className="ui secondary menu">
                        <a className="active item">
                            <h3 id="chath3" className="main">Chat<span>IIT</span></h3>
                        </a>
                        <div className="right menu">
                            <div className="ui item">
                                <LoginPopup id="logout" text="No Account?" link="Sign Up" name="Logout" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default NavChat;
