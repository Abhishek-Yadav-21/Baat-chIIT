import React from 'react';
import Head from './Head';
import Content from './Content';
import NavbarNew from '../Navbar/NavbarNew';
import Footer from '../Footer/Footer';


function Home() {
  return (
    <>   
      <NavbarNew />
      <Head /> 
      <Content />
      <Footer />
    </>
  );
}

export default Home;