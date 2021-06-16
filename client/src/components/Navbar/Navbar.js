import React from 'react';
import './Navbar.css';
import LoginPopup from '../Login-Popup/LoginPopup'

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <div className="ui container">
                    <div className="ui secondary menu">
                        <a className="active item">
                            <h3 className="main">Chat<span>IIT</span></h3>
                        </a>
                        <div className="right menu">
                            <a className="ui item">
                                About
                            </a>
                            <a className="ui item">
                                <LoginPopup id="signUp" text="Already have an account?" link="Log In" name="Sign Up"/>
                            </a>
                            <div className="ui item">
                                <LoginPopup id="logIn" text="No Account?" link="Sign Up" name="Log In" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}




export default Navbar;
