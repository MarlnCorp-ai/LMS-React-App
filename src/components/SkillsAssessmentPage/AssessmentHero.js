import React from 'react';
import Button from '../LandingPage/Button';
import './styles/AssessmentHero.css';

const AssessmentHero = () => {
  return (
    <section className="assessment-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Measure tech skills with confidence</h1>
          <p>Validate skills for hiring, upskilling and building world-class teams with role-based assessments designed by industry experts.</p>
          <div className="hero-buttons">
            <Button text="Try a free assessment" primary={true} >Test your skills</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentHero;