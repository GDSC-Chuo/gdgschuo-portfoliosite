import React from 'react';
import { Link } from 'react-router-dom';
import Headerlogo from '../images/Header/Headerlogo.svg';
import InstagramLogo from '../images/Footer/instagram_logo.svg';
import XLogo from '../images/Footer/X_logo.svg';
import './Footer.css';

const Footer: React.FC = () => {
  return (
  <>
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={Headerlogo} alt="Logo" />
        </div>
        <div className="social-media">
          <div className="instagram">
          <a href="https://www.instagram.com/gdgs_chuo?igsh=MWdxNzFhdmRvZDNveg==" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" />
          </a>
          </div>
          <div className='follow-us'>Follow us</div>
          <div className="X">
            <a href="https://x.com/gdgs_chuo?s=21&t=xSTSR4dUHIM8W0zT6brq9w" target="_blank" rel="noopener noreferrer">
              <img src={XLogo} alt="X" />
            </a>
          </div>
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