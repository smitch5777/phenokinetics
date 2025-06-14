import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>PhenoKinetics</h4>
          <p>Revolutionizing MASH diagnosis through innovative biomarker technology.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/team" onClick={handleLinkClick}>Our Team</Link></li>
            <li><Link to="/science" onClick={handleLinkClick}>The Science</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>
            8035 N Oracle Rd<br />
            Tucson, AZ 85704<br />
            Phone: (520) 555-0100<br />
            Email: info@phenokinetics.com
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 PhenoKinetics, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;