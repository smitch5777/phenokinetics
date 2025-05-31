import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Nathan J. Cherrington, Ph.D.",
      role: "Founder",
      image: `${process.env.PUBLIC_URL}/images/team/Nathan Cherrington Headshot.jpg`,
      bio: "Nathan J. Cherrington, Ph.D. is the Musil Family Endowed Professor and 1885 Distinguished Scholar in the Department of Pharmacology and Toxicology, and the Associate Dean for Research in the College of Pharmacy at the University of Arizona. Nathan has published over 140 original research papers on the sources of inter-individual variability in drug disposition and response. His current research identified ezetimibe as a biomarker to diagnose the progression of MASH."
    },
    {
      name: "Curtis Finster",
      role: "Chief Executive Officer",
      image: `${process.env.PUBLIC_URL}/images/team/Curt Finster Headshot.png`,
      bio: "Curtis Finster's career has been focused on small business startup growth and financial management discipline. He has experience in market driven financial changes that require adjustments in order for a company to maintain a high standard of quality control and fiscal responsibility. Mr. Finster's experience encompasses development of finance training, sales forecasting modeling, marketing and solutions to optimize the benefits for the company's focus and goals. His years of experience through market changes provide the perfect opportunity to lead the startup phase into future expansion. His purpose and role with PhenoKinetics, LLC is to be responsible for assisting with the long-term vision for the company to navigate the growth of the company as we bring this important and vital MASH diagnostic product to market."
    },
    {
      name: "Tim White",
      role: "Chief Operating Officer",
      image: `${process.env.PUBLIC_URL}/images/team/Timothy White Portrait Head only.png`,
      bio: "Tim White's career has been focused on efficiently deploying technical solutions into practice. I have experience in leading program teams in multiple industries and functional teams in supply chain, manufacturing, engineering, and quality. My experience spans development of cutting-edge technical solutions to optimizing the manufacturing of decades-old design. I depend on my training as a Systems Engineer to seek broad perspectives and create data-driven solutions that optimize for cost, schedule, and technical performance."
    },
    {
      name: "John Cherrington",
      role: "Executive Director",
      image: `${process.env.PUBLIC_URL}/images/team/John Cherrington headshot.JPG`,
      bio: "John Cherrington's career has been focused on sales and partner relations in the banking industry. He has experience managing relationships with partners doing up to 1.2 billion in sales. His experience in managing major client relationships and a knowledge of the banking industry provide insight and value in facilitating the growth of PhenoKinetics' current and future relationships. His role as Executive Director will allow him to leverage his experience to strategically position PhenoKinetics as we go to market."
    },
    {
      name: "Emily Mitchell",
      role: "Research Scientist",
      image: `${process.env.PUBLIC_URL}/images/team/Emily Mitchell headshot.jpg`,
      bio: "Emily Mitchell has four years of experience in biochemical and analytical chemistry in GLP and research testing. Ms. Mitchell is responsible for the standardization of the optimized analytical methods at PhenoKinetics. She has extensive background to develop the original methods used for biomarker quantification purposes. She provides technical expertise on method development/analysis for the company."
    }
  ];

  return (
    <div className="team-page">
      <div className="container">
        <h1>Our Team</h1>
        <p className="team-intro">
          Meet the dedicated professionals behind PhenoKinetics' innovative MASH diagnostic technology.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;