import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home-icon.png'; 
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={homeIcon} alt="Home" className="header__icon" />
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/about" className="header__link">About</Link>
          <Link to="/resume" className="header__link">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
