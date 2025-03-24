import React from 'react';
import './styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: "select-icon",
      title: "Select a skill",
      description: "Choose from over 100 skill assessments across technical disciplines."
    },
    {
      icon: "complete-icon",
      title: "Complete the assessment",
      description: "Answer multiple-choice questions to demonstrate your knowledge."
    },
    {
      icon: "receive-icon",
      title: "Receive detailed results",
      description: "Get insights into your strengths and areas for improvement."
    },
    {
      icon: "share-icon",
      title: "Share and improve",
      description: "Share your results and get personalized learning recommendations."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="section-container">
        <h2>How skills assessments work</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className={`step-icon ${step.icon}`}>
                <span>{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;