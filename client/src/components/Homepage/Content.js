import React from 'react'
import First from './Assets/first.png';
import Second from './Assets/second.png';
import Third from './Assets/third.png';
import './Content.css';

function Content() {
    return (
        <div>
            <div className="ui container">

                    <div className="first">                                             
                        <div className="content">
                            <h3>Random video calls</h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="firstImage"> 
                            <img src={First}/>
                        </div>
                    </div>

                    <div className="second">                                                   
                        <div className="content ">
                            <h3>Experience security</h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>                    
                        <div className="secondImage">
                            <img src={Second}/>
                        </div>
                    </div>

                    <div className="third">                        
                        <div className="content">
                            <h3>Chat with strangers</h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>                        
                        <div className="thirdImage">
                            <img src={Third}/>
                        </div>
                    </div>

                </div>            
        </div>
    )
}

export default Content;
