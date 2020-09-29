import React from 'react';
import { Link } from "react-router-dom";
import logo2 from '../../logos/logo1.png'


function FooterComponent() {
  return (
       <footer className="footer-container">
        <div className="footer-menu">
            <nav>
                <ul>
                    <li><Link to="/" className="footer-link">
                            Home
                        </Link></li>
                    <li><Link to="/about-us" className="footer-link">
                        About Us
                    </Link></li>
                    <li><Link to="/full-menu" className="footer-link">
                        Menu
                    </Link></li>
                    <li><Link to="/contact-us" className="footer-link">
                        Contact
                    </Link></li>
                </ul>
            </nav>
        </div>

        <div className="social-ctn">
            <a href="index.html"><img src={logo2} alt="logo" className="footer-logo" /></a>
            <div className="social-links">
                <a href="https://www.facebook.com/pg/BoJosseafood/menu/?ref=page_internal"><i className="fab fa-facebook-square"></i></a>
            </div>
        </div>
        <div className="misc">
            <Link to="/community-work">Community</Link>
            <Link to="#">Areas of Service</Link>
            <Link to="#">FAQ</Link>
        </div>
    </footer>
  );
}

export default FooterComponent;
