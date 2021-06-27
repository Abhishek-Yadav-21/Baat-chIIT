import React, {useEffect, useState} from 'react';
// import { Button } from './Button';
import './Head.css';
import LoginPopup from '../Login-Popup/LoginPopup'; 


function Head() {
  
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   

   const opacity= 1/(offsetY +1);
   console.log(opacity);

  //  style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
  // style={{color: `rgba(255, 255, 255, ${1/2(offsetY +1)})`}}

  return (
    <div>   
    <div style={{ transform: `translateY(-${offsetY * 0.4}px)` }} className='head-container' > 
      <h1>Omegle for IITians</h1>
      <p>Come have a chat with Machau, Ghissu, Despo, and Bakchod peeps.</p>
      <div>
          <div>
            <LoginPopup id="getStarted" text="Already have an account?" link="Log In" name="Get Started"/>
          </div>
          <div className="Login">
            <LoginPopup id="HeadlogIn" text="No Account?" link="Sign Up" name="Log In" />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;