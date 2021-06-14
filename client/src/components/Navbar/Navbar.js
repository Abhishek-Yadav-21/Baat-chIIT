import React from 'react';
import './Navbar.css';

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
                                Sign Up
                            </a>
                            <a id="login" className="ui item">
                                Log In
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}




export default Navbar;
