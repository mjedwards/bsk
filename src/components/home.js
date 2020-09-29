import React from 'react';
import HeaderComponent from './home-layout/headerComponent';
import BodyComponent from './home-layout/bodyComponent';


function Home() {
  return (
    <div className="home-container">
       <HeaderComponent />
       <BodyComponent />
    </div>
  );
}

export default Home;
