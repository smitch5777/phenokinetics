import React from 'react';
import './Footer.css';

const Footer = () => {
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
            <li><a href="/">Home</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/science">The Science</a></li>
            <li><a href="/contact">Contact</a></li>
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