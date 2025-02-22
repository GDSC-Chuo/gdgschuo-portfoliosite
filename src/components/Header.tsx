import React from 'react';
import { Link } from 'react-router-dom';
import Headerlogo from '../images/Header/Headerlogo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Headerlogo} alt="Logo" />
          
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/production">制作物</Link></li>
            <li><Link to="/study">勉強会</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;