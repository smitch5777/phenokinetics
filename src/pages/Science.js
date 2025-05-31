import React from 'react';
import './Science.css';

const Science = () => {
  return (
    <div className="science-page">
      <div className="container">
        <h1>The Science Behind EZ-MASH</h1>
        
        <section className="science-overview">
          <h2>Understanding MASH and Our Innovation</h2>
          <p className="lead-text">
            Metabolic dysfunction-Associated Steatohepatitis (MASH) has traditionally been identified 
            through invasive liver biopsy, despite being a serious inflammatory, fibrogenic condition 
            with significant effects on drug disposition and toxicity.
          </p>
        </section>

        <section className="science-graphic">
          <div className="graphic-placeholder">
            <img src="/science-diagram-placeholder.png" alt="MASH Diagnostic Process" />
            <p>Visualization of the EZ-MASH Diagnostic Process</p>
          </div>
        </section>

        <section className="science-details">
          <h2>How EZ-MASH Works</h2>
          
          <div className="science-steps">
            <div className="step">
              <h3>1. Transporter Changes</h3>
              <p>
                Progression to MASH results in changes to three separate drug transport processes, 
                which combine to result in decreased biliary efflux of our probe drug metabolite (EZE-Gluc).
              </p>
            </div>
            
            <div className="step">
              <h3>2. Biomarker Retention</h3>
              <p>
                The metabolite is retained in the blood and subsequently in urine. These transporter 
                changes result in the accumulation of our exogenous biomarker in MASH patients.
              </p>
            </div>
            
            <div className="step">
              <h3>3. Disease Correlation</h3>
              <p>
                The biomarker levels increase with disease severity, providing a quantifiable measure 
                of MASH progression without invasive procedures.
              </p>
            </div>
          </div>
        </section>

        <section className="key-advantages">
          <h2>Key Advantages of Our Approach</h2>
          
          <div className="advantages-grid">
            <div className="advantage">
              <h3>Non-Invasive Testing</h3>
              <p>
                Unlike traditional liver biopsies, our test requires only plasma and urine samples, 
                making it safer and more comfortable for patients.
              </p>
            </div>
            
            <div className="advantage">
              <h3>Disease-Specific Detection</h3>
              <p>
                Our data demonstrates a disease-specific transporter expression pattern and selective 
                biomarker substrate for those transporters.
              </p>
            </div>
            
            <div className="advantage">
              <h3>Proven Concept</h3>
              <p>
                Exciting proof of concept in MASH patients shows higher biomarker metabolite levels 
                in patients with hepatic impairment that increase with disease severity.
              </p>
            </div>
            
            <div className="advantage">
              <h3>Clinical Applications</h3>
              <p>
                The test can identify patients for therapy and patient selection to reduce confounding 
                factors and potential liabilities in clinical trials.
              </p>
            </div>
          </div>
        </section>

        <section className="technical-details">
          <h2>Technical Background</h2>
          <p>
            Our EZ-MASH test proposes that plasma and urine levels of EZE-Gluc can be used as a 
            diagnostic probe to distinguish patients with MASH from those with steatosis or healthy livers. 
            The altered disposition of EZE-Gluc in MASH patients serves as a specific, non-invasive 
            exogenous biomarker capable of diagnosing patients with MASH.
          </p>
          
          <div className="application-areas">
            <h3>Applications in Healthcare</h3>
            <ul>
              <li>Developing MASH therapeutics</li>
              <li>Conducting effective clinical trials for other indications</li>
              <li>Excluding patients with confounding factors</li>
              <li>Reducing potential liabilities in drug development</li>
            </ul>
          </div>
        </section>

        <section className="cta-science">
          <h2>Ready to Learn More?</h2>
          <p>Contact us to discover how EZ-MASH can transform MASH diagnosis in your clinical practice or research.</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </section>
      </div>
    </div>
  );
};

export default Science;