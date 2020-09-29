import React from 'react';
import Menu from '../home-layout/menu'
import HomeInfo from '../home-layout/homeInfo'
import Gallery from './gallery';


function BodyComponent() {
  return (
    <div className="body-container">
      <Menu />
      <Gallery />
      <HomeInfo />
    </div>
  );
}

export default BodyComponent;
