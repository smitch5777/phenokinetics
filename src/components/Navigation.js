import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/logo-placeholder.png" alt="PhenoKinetics" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/science">The Science</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;