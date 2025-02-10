import React from 'react';
import { Link } from 'react-router-dom';
import Headerlogo from '../images/Header/Headerlogo.svg';
import './Footer.css';

const Footer: React.FC = () => {
  return (
  <>
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={Headerlogo} alt="Logo" />
        </div>
        <nav className="footer-menu">
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/activities">活動紹介</Link></li>
            <li><Link to="/portfolio">ポートフォリオ</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  </>
  );
};

export default Footer;