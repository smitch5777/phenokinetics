import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>PhenoKinetics</h1>
          <h2>Revolutionary MASH Diagnostic Testing</h2>
          <p className="hero-description">
            Transforming the diagnosis of Metabolic dysfunction-Associated Steatohepatitis (MASH) 
            through innovative exogenous biomarker technology.
          </p>
        </div>
      </section>

      <section className="overview-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            PhenoKinetics is pioneering a non-invasive diagnostic test for MASH, 
            a serious inflammatory liver condition. Our innovative EZ-MASH test uses 
            exogenous biomarkers to accurately diagnose patients, enabling better 
            therapeutic development and patient care.
          </p>
          
          <div className="key-features">
            <div className="feature">
              <h3>Non-Invasive Testing</h3>
              <p>No need for painful liver biopsies - our test uses blood and urine samples.</p>
            </div>
            <div className="feature">
              <h3>Accurate Diagnosis</h3>
              <p>Disease-specific transporter expression patterns provide precise results.</p>
            </div>
            <div className="feature">
              <h3>Clinical Impact</h3>
              <p>Essential for developing MASH therapeutics and conducting effective clinical trials.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Learn More About Our Technology</h2>
          <p>Discover how PhenoKinetics is revolutionizing MASH diagnosis</p>
          <div className="cta-buttons">
            <a href="/science" className="btn btn-primary">Explore the Science</a>
            <a href="/team" className="btn btn-secondary">Meet Our Team</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;