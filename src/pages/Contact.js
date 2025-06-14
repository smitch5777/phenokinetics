import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact PhenoKinetics - Get in Touch for MASH Diagnostic Solutions</title>
        <meta name="description" content="Contact PhenoKinetics to learn about our EZ-MASH diagnostic test. Located in Tucson, Arizona. Email info@phenokinetics.com or call (385) 262-4032." />
      </Helmet>
      <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Get in touch with PhenoKinetics to learn more about our innovative MASH diagnostic solutions.
        </p>
        
        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>For all inquiries</p>
            <a href="mailto:info@phenokinetics.com" className="contact-link">info@phenokinetics.com</a>
          </div>
          
          <div className="contact-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Our headquarters</p>
            <address>
              PhenoKinetics, LLC<br />
              8035 N Oracle Rd<br />
              Tucson, AZ 85704<br />
              United States
            </address>
          </div>
          
          <div className="contact-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>Business hours</p>
            <a href="tel:+13852624032" className="contact-link">(385) 262-4032</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;