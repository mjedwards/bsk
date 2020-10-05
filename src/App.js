import React from 'react';
import { Route } from "react-router-dom";
// import { withRouter } from "react-router";
import './App.css';
//components
import Home from './components/home';
import FooterComponent from './components/home-layout/footerComponent';
import Navbar from './components/Navbar';
import AboutUs from './components/about'
import MainMenu from './components/menu/fullMenu';
import BreakfastMenu from './components/menu/breakfast';
import LunchMenu from './components/menu/lunch';
import KidsMenu from './components/menu/kids';
import Community from './components/community';
import ContactUs from './components/contact';
import CateringInfo from './components/catering';
// import {ScrollToTopControlller} from './components/scrollToTop'

function App() {
  // ScrollToTopControlller();
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/full-menu' component={MainMenu} />
      <Route path='/breakfast-menu' component={BreakfastMenu} />
      <Route path='/lunch-menu' component={LunchMenu} />
      <Route path='/kids-menu' component={KidsMenu} />
      <Route path='/catering' component={CateringInfo} />
      <Route path='/community-work' component={Community} />
      <Route path='/contact-us' component={ContactUs} />
      <FooterComponent />
    </div>
  );
}

export default App;
