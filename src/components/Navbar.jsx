import React, { useEffect, useState } from 'react';
import {
  FaPhone, FaShoppingCart, FaSearch, FaBars, FaTimes
} from 'react-icons/fa';
import './Navbar.css';
import BlogAndFooter from './BlogAndFooter';
// import ServicePopup from './ServicePopup';
// import services from '../data/services.json';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicePopup, setShowServicePopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServicePopup = () => setShowServicePopup(!showServicePopup);

  return (
    <div className="navbar-wrapper">
      <div className={`top-bar ${scrolled ? 'hide' : ''}`}>
        <div>
          <FaPhone /> Performance hall: 418 838-6000 &nbsp; | &nbsp;
          <FaPhone /> Exhibition Center: 418 838-6001
        </div>
      </div>

      <div className={`main-navbar ${scrolled ? 'fixed' : ''}`}>
        <div className="navbar-header">
          <div className="logo">Clean</div>
          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <a href="/">Home</a>
          <a href="/BlogAndFooter">Blog</a>
          <a href="/AboutUs">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <button><FaSearch /></button>
        </div>

        <div className={`nav-actions ${menuOpen ? 'show' : ''}`}>
          <span className="nav-link service-link" onClick={toggleServicePopup}>
           ≡ Service 
          </span>
          <button className="ticket-btn"><FaShoppingCart /> Cart</button>
        </div>
      </div>
{/* 
      {showServicePopup && (
  <div className="custom-service-popup-wrapper">
    <ServicePopup services={services} onClose={toggleServicePopup} />
  </div>
)} */}

    </div>
  );
};

export default Navbar;
