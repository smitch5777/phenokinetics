import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={`${process.env.PUBLIC_URL}/logo-phenokinetics2.png`} alt="PhenoKinetics" />
            <span className="company-name">
              <span className="pheno">Pheno</span>
              <span className="kinetics">Kinetics</span>
            </span>
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/team" onClick={handleLinkClick}>Our Team</Link></li>
          <li><Link to="/science" onClick={handleLinkClick}>The Science</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;