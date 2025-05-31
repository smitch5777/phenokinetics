import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Get in touch with PhenoKinetics to learn more about our innovative MASH diagnostic solutions.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Reach Out to Our Team</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>General Inquiries</h3>
                <p>
                  <strong>Email:</strong> info@phenokinetics.com<br />
                  <strong>Phone:</strong> (520) 555-0100
                </p>
              </div>
              
              <div className="contact-item">
                <h3>Business Development</h3>
                <p>
                  <strong>Email:</strong> partnerships@phenokinetics.com<br />
                  <strong>Phone:</strong> (520) 555-0101
                </p>
              </div>
              
              <div className="contact-item">
                <h3>Research Collaborations</h3>
                <p>
                  <strong>Email:</strong> research@phenokinetics.com<br />
                  <strong>Phone:</strong> (520) 555-0102
                </p>
              </div>
            </div>
            
            <div className="address-section">
              <h3>Headquarters</h3>
              <p>
                PhenoKinetics, LLC<br />
                8035 N Oracle Rd<br />
                Tucson, AZ 85704<br />
                United States
              </p>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input type="text" id="organization" name="organization" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;