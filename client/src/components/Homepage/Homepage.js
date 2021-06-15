import React from 'react';
// import Input from './Input';
import './Homepage.css';
import Navbar from '../Navbar/Navbar';
import First from './Assets/first.png';
import Second from './Assets/second.png';
import Third from './Assets/third.png';
import Footer from '../Footer/Footer';


class Homepage extends React.Component {
    render(){
        return (
            <div>
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
                <div className="ui container">
                    <div className="first">
                        <div>
                            <img src={First}/>
                        </div>
                        <div className="content_head">
                            <h3>Random video calls</h3>
                            <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                    <div className="first">
                        <div className="content_head">
                            <h3>Experience security</h3>
                            <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div>
                            <img src={Second}/>
                        </div>
                    </div>
                    <div className="first">
                        <div>
                            <img src={Third}/>
                        </div>
                        <div className="content_head">
                            <h3>Chat with strangers</h3>
                            <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
            
        )
    }
}

export default Homepage;