import React from 'react';
// import Input from './Input';
import './Homepage.css';
import Navbar from '../Navbar/Navbar';

class Homepage extends React.Component {
    render(){
        return (
            <div className="bg">
                <Navbar />
                <div className="heading">
                    Omegle for IITians
                </div>
                <div className="desc">
                    Come have a chat with Machau, Ghissu, Despo, and Bakchod peeps.  
                </div>
                <div className="button">
                    <button className="massive ui button">Get Started</button>
                </div>
            </div>
        )
    }
}

export default Homepage;