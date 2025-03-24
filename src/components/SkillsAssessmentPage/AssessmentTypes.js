import React from 'react';
import './styles/AssessmentTypes.css';

const AssessmentTypes = () => {
  const assessmentTypes = [
    {
      title: "Role IQ",
      description: "Comprehensive assessments that measure proficiency across all skills needed for a specific role.",
      features: ["Covers multiple skill areas", "Benchmarked against industry peers", "Personalized recommendations"]
    },
    {
      title: "Skill IQ",
      description: "Focused assessments that measure proficiency in a specific technology or concept.",
      features: ["20-30 minute assessments", "Immediate results", "Identifies knowledge gaps"]
    },
    {
      title: "Custom Assessments",
      description: "Tailored assessments designed to measure the specific skills that matter to your organization.",
      features: ["Built to your requirements", "Aligned with your tech stack", "Enterprise-ready"]
    }
  ];

  return (
    <section className="assessment-types">
      <div className="section-container">
        <h2>Assessment types for every need</h2>
        <div className="types-container">
          {assessmentTypes.map((type, index) => (
            <div className="assessment-card" key={index}>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
              <ul>
                {type.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentTypes;