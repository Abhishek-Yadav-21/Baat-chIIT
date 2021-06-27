import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavbarNew.css';
import LoginPopup from '../Login-Popup/LoginPopup';
import Bars from './Assets/bars.svg'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);                      
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 780) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () =>{
    if(window.scrollY >=75){
      setNavbar(true);
    }else{
      setNavbar(false);
    };
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active':'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Chat<span>IIT</span>
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img className="bars" src={Bars}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <div className='mobileHead nav-item'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Chat<span>IIT</span>
            <i className='fab fa-typo3' />
          </Link>
          </div>            
          <div className='menu-icon' onClick={closeMobileMenu}>
            <i className= 'fas fa-times'/>
          </div>
            
            <li id="about" className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <LoginPopup id="signUp" text="Already have an account?" link="Log In" name="Sign Up"/>
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <LoginPopup id="logIn" text="No Account?" link="Sign Up" name="Log In" />
              </div>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'><LoginPopup id="logIn" text="No Account?" link="Sign Up" name="Log In" /></Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;