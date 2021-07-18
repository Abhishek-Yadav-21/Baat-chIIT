import React from 'react';
import Head from './Head';
import Content from './Content';
import NavbarNew from '../Navbar/NavbarNew';
import Footer from '../Footer/Footer';


function Home() {
  return (
    <div>   
      <NavbarNew />
      <div id="home_fix">
        <Head /> 
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Home;